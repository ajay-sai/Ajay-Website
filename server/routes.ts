import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProjectSchema, contactFormSchema } from "@shared/schema";
import { seedProjects } from "./seed";
import path from "path";
import { Resend } from "resend";

export async function registerRoutes(app: Express): Promise<Server> {
  // Seed projects on startup
  await seedProjects();
  
  // Project Routes
  
  // GET all projects
  app.get('/api/projects', async (req, res) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ message: 'Failed to fetch projects' });
    }
  });

  // GET featured projects
  app.get('/api/projects/featured', async (req, res) => {
    try {
      const projects = await storage.getFeaturedProjects();
      res.json(projects);
    } catch (error) {
      console.error('Error fetching featured projects:', error);
      res.status(500).json({ message: 'Failed to fetch featured projects' });
    }
  });

  // GET project by slug
  app.get('/api/projects/:slug', async (req, res) => {
    try {
      const project = await storage.getProjectBySlug(req.params.slug);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.json(project);
    } catch (error) {
      console.error('Error fetching project:', error);
      res.status(500).json({ message: 'Failed to fetch project' });
    }
  });

  // POST create new project
  app.post('/api/projects', async (req, res) => {
    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(validatedData);
      res.status(201).json(project);
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(400).json({ message: 'Invalid project data', error });
    }
  });

  // PATCH update project
  app.patch('/api/projects/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid project ID' });
      }
      
      const validatedData = insertProjectSchema.partial().parse(req.body);
      const project = await storage.updateProject(id, validatedData);
      
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      
      res.json(project);
    } catch (error) {
      console.error('Error updating project:', error);
      res.status(400).json({ message: 'Invalid project data', error });
    }
  });

  // DELETE project
  app.delete('/api/projects/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid project ID' });
      }
      
      const deleted = await storage.deleteProject(id);
      if (!deleted) {
        return res.status(404).json({ message: 'Project not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting project:', error);
      res.status(500).json({ message: 'Failed to delete project' });
    }
  });

  // Resume download route
  app.get('/api/download/resume', (req, res) => {
    const resumePath = path.join(process.cwd(), 'public', 'resume.pdf');
    res.download(resumePath, 'Ajay_Miryala_Resume.pdf', (err) => {
      if (err) {
        console.error('Error downloading resume:', err);
        res.status(404).json({ message: 'Resume not found' });
      }
    });
  });

  // Contact form endpoint - send email notification
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        console.error('RESEND_API_KEY is not configured');
        return res.status(500).json({ 
          message: 'Email service is not configured. Please contact the administrator.' 
        });
      }

      const resend = new Resend(resendApiKey);
      
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'sai.ajaysai@gmail.com',
        replyTo: validatedData.email,
        subject: `Portfolio Contact: ${validatedData.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `,
        text: `
New Contact Form Submission

From: ${validatedData.name}
Email: ${validatedData.email}

Message:
${validatedData.message}
        `
      });

      res.status(200).json({ 
        message: 'Message sent successfully' 
      });
    } catch (error) {
      console.error('Error sending contact email:', error);
      
      if (error instanceof Error && 'name' in error && error.name === 'ZodError') {
        return res.status(400).json({ 
          message: 'Invalid form data',
          errors: error 
        });
      }
      
      res.status(500).json({ 
        message: 'Failed to send message. Please try again or email directly.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
