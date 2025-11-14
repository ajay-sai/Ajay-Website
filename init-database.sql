-- Initialize database tables for Ajay Portfolio
-- Run this in your Neon SQL Editor: https://console.neon.tech

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid()::text,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    cover_image TEXT,
    featured BOOLEAN NOT NULL DEFAULT false,
    content_markdown TEXT NOT NULL,
    tags TEXT[] NOT NULL,
    technologies TEXT[] NOT NULL,
    links TEXT[]
);

-- Verify tables were created
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
