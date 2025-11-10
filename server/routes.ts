import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProjectSchema } from "@shared/schema";
import { seedProjects } from "./seed";
import path from "path";
import { ObjectStorageService } from "./objectStorage";

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

  // Object Storage route - serve public images from cloud storage
  // Reference: blueprint:javascript_object_storage
  app.get('/public-objects/:filePath(*)', async (req, res) => {
    const filePath = req.params.filePath;
    const objectStorageService = new ObjectStorageService();
    try {
      const file = await objectStorageService.searchPublicObject(filePath);
      if (!file) {
        return res.status(404).json({ error: 'File not found' });
      }
      objectStorageService.downloadObject(file, res);
    } catch (error) {
      console.error('Error searching for public object:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
