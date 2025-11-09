import { users, projects, type User, type InsertUser, type Project, type InsertProject, type ProjectListItem } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Storage interface with CRUD methods for users and projects
export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project CRUD operations
  getAllProjects(): Promise<ProjectListItem[]>;
  getFeaturedProjects(): Promise<ProjectListItem[]>;
  getProjectBySlug(slug: string): Promise<Project | undefined>;
  getProjectById(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllProjects(): Promise<ProjectListItem[]> {
    return await db.select({
      id: projects.id,
      slug: projects.slug,
      title: projects.title,
      summary: projects.summary,
      coverImage: projects.coverImage,
      featured: projects.featured,
      tags: projects.tags,
      technologies: projects.technologies,
      links: projects.links,
    }).from(projects).orderBy(projects.id);
  }

  async getFeaturedProjects(): Promise<ProjectListItem[]> {
    return await db.select({
      id: projects.id,
      slug: projects.slug,
      title: projects.title,
      summary: projects.summary,
      coverImage: projects.coverImage,
      featured: projects.featured,
      tags: projects.tags,
      technologies: projects.technologies,
      links: projects.links,
    }).from(projects).where(eq(projects.featured, true)).orderBy(projects.id);
  }

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.slug, slug));
    return project || undefined;
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project || undefined;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db
      .insert(projects)
      .values(insertProject)
      .returning();
    return project;
  }

  async updateProject(id: number, updateData: Partial<InsertProject>): Promise<Project | undefined> {
    const [project] = await db
      .update(projects)
      .set(updateData)
      .where(eq(projects.id, id))
      .returning();
    return project || undefined;
  }

  async deleteProject(id: number): Promise<boolean> {
    const result = await db
      .delete(projects)
      .where(eq(projects.id, id))
      .returning();
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();
