import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

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

  const httpServer = createServer(app);

  return httpServer;
}
