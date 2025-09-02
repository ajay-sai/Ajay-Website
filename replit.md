# Portfolio Website

## Overview
This is a modern, professional portfolio website for Ajay Miryala, a Lead Data Scientist. The application is a full-stack web application built with React for the frontend and Express.js for the backend, using PostgreSQL as the database (managed through Drizzle ORM). The website showcases Ajay's skills, projects, and expertise in data science, machine learning, and AI through an immersive, visually stunning interface with quantum-themed animations and effects. Its purpose is to present a professional online presence, highlight capabilities, and provide an engaging user experience for potential employers or collaborators.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript.
- **Build Tool**: Vite for fast development and optimized production builds.
- **Styling**: Tailwind CSS with custom CSS variables for theming.
- **UI Components**: Radix UI primitives with shadcn/ui component library.
- **Routing**: Wouter for lightweight client-side routing.
- **State Management**: TanStack Query for server state management.
- **Animations**: Custom CSS animations with quantum and neural network themes, focusing on smooth, aesthetically pleasing transitions.
- **Design Principles**: Emphasis on a clean, professional aesthetic, consistent heading formats, and subtle, non-distracting animations.

### Backend Architecture
- **Framework**: Express.js with TypeScript.
- **Module System**: ES Modules.
- **Development Server**: Integrated with Vite for hot module replacement.
- **Error Handling**: Centralized middleware.
- **Logging**: Custom request logging with performance metrics.

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations.
- **Database**: PostgreSQL (Neon serverless).
- **Schema Management**: Drizzle migrations with schema definitions in TypeScript.
- **Connection**: @neondatabase/serverless for serverless PostgreSQL connections.

### Key Features & Components
- **Responsive Navigation**: With smooth scrolling and mobile support.
- **Dynamic Sections**: Hero, About, Skills, Projects, Demos, Contact, all with consistent visual formatting and animations.
- **Interactive Elements**: Animated skill displays, project showcases, and contact forms with toast notifications.
- **Visual Enhancements**: Subtle particle systems and quantum-themed background effects, carefully refined to avoid distraction.
- **Theming**: Dark/light mode toggle with theme persistence and system preference detection.

### Data Flow
- **Client-Side**: React components utilize TanStack Query for server state; form submissions trigger API calls; animations based on intersection observers; particle systems use `requestAnimationFrame`.
- **Server-Side**: Express handles requests via middleware; route handlers process API calls; storage layer abstracts database operations; responses are logged and returned.
- **Database Operations**: Drizzle ORM performs type-safe queries; schema consistency via definitions; migrations manage structure changes; connection pooling by Neon.

## External Dependencies

- **React Ecosystem**: React 18, React DOM, React Hook Form.
- **UI Framework**: Radix UI primitives, shadcn/ui components.
- **Database**: Drizzle ORM, Neon serverless PostgreSQL.
- **Development Tooling**: TypeScript, Vite, PostCSS, Tailwind CSS, ESBuild, TSX.
- **State Management**: TanStack Query.
- **Validation**: Zod (for schema validation).
- **Styling & Icons**: Inter font (Google Fonts), Lucide React.

## Deployment Configuration

### Deployment Type Recommendation
**Use Autoscale Deployment** - This full-stack application requires an Express.js backend server, which is only supported by Autoscale deployments. Static deployments are designed for frontend-only applications without server components.

### Build Configuration
- **Development**: Uses `npm run dev` to start both frontend and backend with hot reloading
- **Production**: Uses `npm run build` to create optimized builds:
  - Frontend: Built to `dist/public/` (contains index.html and static assets)
  - Backend: Server bundled to `dist/index.js`
  - Start production: `npm start` runs the bundled Express server

### Deployment Settings
- **Build Command**: `npm run build` (builds both frontend and backend)
- **Run Command**: `npm start` (starts the Express server in production)
- **Public Directory**: Not applicable for Autoscale (server handles static file serving)
- **Port**: Automatically uses PORT environment variable (defaults to 5000)

### Static-Only Option (Frontend Only)
If you need a static deployment for the frontend only (without backend functionality):
- **Build Command**: `vite build` (frontend only)
- **Public Directory**: `dist/public`
- **Deployment Type**: Static
- **Note**: This removes all backend API functionality and database features

### Recent Changes
- Fixed development server port conflicts
- Confirmed production build process works correctly
- Verified both frontend and backend build properly for deployment