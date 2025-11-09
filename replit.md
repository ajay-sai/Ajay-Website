# Portfolio Website

## Overview
This is a modern, professional portfolio website for Ajay Miryala, a Generative AI and ML Engineer. The application is a full-stack web application built with React for the frontend and Express.js for the backend, using PostgreSQL as the database (managed through Drizzle ORM). The website showcases Ajay's skills, projects, and expertise in generative AI, LLM systems, RAG architectures, and production ML through an immersive, visually stunning interface with quantum-themed animations and effects. Its purpose is to present a professional online presence, highlight capabilities, and provide an engaging user experience for potential employers or collaborators. The site features a clean multi-page navigation structure with dedicated pages for Home, Professional Journey, Projects & Case Studies, and Contact.

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