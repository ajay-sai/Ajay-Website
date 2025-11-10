# Portfolio Website

## Overview
This project is a modern, professional portfolio website for Ajay Miryala, a Generative AI and ML Engineer. The site aims to showcase his skills, projects, and expertise in areas like generative AI, LLM systems, RAG architectures, and production ML through an immersive, visually engaging interface. It features a full-stack architecture with React for the frontend and Express.js for the backend, utilizing PostgreSQL and Drizzle ORM. The primary purpose is to establish a strong online professional presence, highlight capabilities to potential employers or collaborators, and provide an engaging user experience with quantum-themed animations and effects.

## Recent Changes (November 10, 2025)
**Fixed 8GB Deployment Size Issue:**
- Identified and removed unused Python dependencies (docling, pypdf2, python-docx) that were pulling in 7.3GB of ML/CUDA libraries
- Added Python cache directories to .gitignore (.cache, .pythonlibs, __pycache__, *.pyc, uv.lock)
- Reduced deployment size from ~8GB to 793MB (90% reduction)
- **Note:** This is a JavaScript/TypeScript project only - no Python dependencies are needed

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite for development and optimized builds.
- **Styling**: Tailwind CSS with custom CSS variables, complemented by Radix UI primitives and shadcn/ui components.
- **Routing**: Wouter for lightweight client-side navigation.
- **State Management**: TanStack Query for server state.
- **Animations**: Custom CSS animations with quantum and neural network themes, focusing on smooth, non-distracting transitions.
- **Design Principles**: Emphasizes a clean, professional aesthetic, consistent heading formats, and subtle visual enhancements like particle systems.
- **Theming**: Dark/light mode toggle with persistence and system preference detection.
- **GEO Optimization**: Comprehensive structured data (Person, Organization, FAQPage, Service schemas), semantic HTML, and enhanced meta tags for AI crawlers.

### Backend Architecture
- **Framework**: Express.js with TypeScript and ES Modules.
- **Development**: Integrated with Vite for hot module replacement.
- **Object Storage**: Replit Object Storage (Google Cloud Storage) is used for serving public assets like timeline images, reducing deployment size.

### Database Architecture
- **ORM**: Drizzle ORM for type-safe operations.
- **Database**: PostgreSQL (Neon serverless).
- **Schema Management**: Drizzle migrations manage schema definitions in TypeScript.

### Key Features & Components
- **Responsive Navigation**: Multi-page navigation with smooth scrolling and mobile support.
- **Dynamic Sections**: Includes Hero, About, Journey Preview, Skills, Projects, Services, and FAQ, all with consistent visual formatting and animations.
- **Interactive Elements**: Animated skill displays, project showcases, expandable FAQ accordions, service cards with hover effects, and contact forms with toast notifications.

## External Dependencies

- **Frontend**: React 18, React DOM, React Hook Form, React Helmet Async, Radix UI, shadcn/ui.
- **Database**: Drizzle ORM, Neon serverless PostgreSQL.
- **Development Tooling**: TypeScript, Vite, PostCSS, Tailwind CSS, ESBuild, TSX.
- **State Management**: TanStack Query.
- **Validation**: Zod.
- **Styling & Icons**: Inter font, Lucide React.