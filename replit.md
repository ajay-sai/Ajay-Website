# Portfolio Website

## Overview
This is a modern, professional portfolio website for Ajay Miryala, a Generative AI and ML Engineer with a Master of Science in Business Statistics from the University of Maryland. The application is a full-stack web application built with React for the frontend and Express.js for the backend, using PostgreSQL as the database (managed through Drizzle ORM). The website showcases Ajay's skills, projects, and expertise in generative AI, LLM systems, RAG architectures, and production ML through an immersive, visually stunning interface with quantum-themed animations and effects. Its purpose is to present a professional online presence, highlight capabilities, and provide an engaging user experience for potential employers or collaborators. The site features a clean multi-page navigation structure with dedicated pages for Home, Professional Journey, Projects & Case Studies, and Schedule Meeting (Contact).

**Latest Update (Nov 10, 2024):** Comprehensive GEO (Generative Engine Optimization) implementation completed with FAQ section, Services section, enhanced schema markup, semantic HTML, temporal/quantifiable data tags, and AI crawler optimization (sitemap.xml, robots.txt).

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
- **Dynamic Sections**: Hero, About, Journey Preview, Skills, Projects, Services ("How I Can Help"), FAQ, all with consistent visual formatting and animations.
- **Interactive Elements**: Animated skill displays, project showcases, expandable FAQ accordions, service cards with hover effects, and contact forms with toast notifications.
- **Visual Enhancements**: Subtle particle systems and quantum-themed background effects, carefully refined to avoid distraction.
- **Theming**: Dark/light mode toggle with theme persistence and system preference detection.
- **GEO Optimization**: Comprehensive structured data (Person, Organization, FAQPage, Service schemas), semantic HTML with microdata, temporal and quantifiable data markup, enhanced meta tags for AI crawlers.

### Data Flow
- **Client-Side**: React components utilize TanStack Query for server state; form submissions trigger API calls; animations based on intersection observers; particle systems use `requestAnimationFrame`.
- **Server-Side**: Express handles requests via middleware; route handlers process API calls; storage layer abstracts database operations; responses are logged and returned.
- **Database Operations**: Drizzle ORM performs type-safe queries; schema consistency via definitions; migrations manage structure changes; connection pooling by Neon.

## External Dependencies

- **React Ecosystem**: React 18, React DOM, React Hook Form, React Helmet Async (for SEO).
- **UI Framework**: Radix UI primitives, shadcn/ui components.
- **Database**: Drizzle ORM, Neon serverless PostgreSQL.
- **Development Tooling**: TypeScript, Vite, PostCSS, Tailwind CSS, ESBuild, TSX.
- **State Management**: TanStack Query.
- **Validation**: Zod (for schema validation).
- **Styling & Icons**: Inter font (Google Fonts), Lucide React.

## Recent Changes

### GEO (Generative Engine Optimization) - November 10, 2024
Completed comprehensive optimization for AI crawler discoverability and LLM understanding:

**New Components:**
1. **FAQ Section** (client/src/components/faq-section.tsx)
   - 8 comprehensive questions covering expertise, companies, location, achievements, technologies, RAG vs fine-tuning, production systems, and education
   - FAQPage schema with itemScope/itemProp microdata
   - Expand/collapse accordion functionality
   - Centralized data in client/src/data/faq-data.ts

2. **Services Section** (client/src/components/services-section.tsx)
   - 6 service offerings: LLM Orchestration, ML Infrastructure, Computer Vision, Predictive Analytics, Data Strategy, AI Consulting
   - Service/OfferCatalog schema markup
   - Gradient-styled cards with hover effects

**Enhanced Components:**
1. **Journey Preview** - Added key metric badges, temporal markup with <time> tags, <data> tags for quantifiable metrics
2. **About Section** - Person itemScope, semantic HTML with itemProp, <data> tags for metrics, nested Organization schemas

**Schema Implementations:**
- **Person Schema**: Enhanced with address, hasOccupation, award, seeks, expanded knowsAbout
- **Organization Schemas**: 5 organizations (Home Depot, Harley Davidson, Principal, UMD, Bridge Solutions) with @id references
- **EmployeeRole Schemas**: 7 employment entries with startDate, endDate, descriptions (Note: May need restructuring for optimal crawler detection)
- **FAQPage Schema**: 8 questions with structured answers
- **Breadcrumb Schemas**: Implemented on all pages

**SEO Enhancements:**
- Enhanced meta tags: geo location (Atlanta, GA coordinates), language (en-US), target audience, coverage
- robots.txt: Allows all AI crawlers (GPTBot, ChatGPT-User, Claude-Web, Google-Extended, CCBot, anthropic-ai)
- sitemap.xml: 4 pages with priorities and changefreq

**Known Limitations:**
- EmployeeRole schemas in JSON-LD @graph may not be optimally linked to Person schema for some crawlers. Future optimization: restructure as WorkExperience or attach through Person's hasOccupation with @id linkage.

**Testing:**
- E2E testing confirmed all UI functionality works correctly
- Schema detection verified for Person, Organization, FAQPage, BreadcrumbList
- All sections render and animate properly
- FAQ expand/collapse, service card hovers, and navigation all functional