# Portfolio Website

## Overview

This is a modern, professional portfolio website for Ajay Miryala, a Lead Data Scientist. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with PostgreSQL as the database (managed through Drizzle ORM). The website showcases Ajay's skills, projects, and expertise in data science, machine learning, and AI through an immersive, visually stunning interface with quantum-themed animations and effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## Outstanding Tasks

### High Priority - Mobile Animation Issues (To Resume Tomorrow)
- **Issue**: Mobile scroll animations still have pop/drop behavior instead of smooth transitions
- **Affected Sections**: About Me, Interactive Portfolio Showcase, timeline job descriptions, portfolio subsections
- **Current Status**: Attempted fixes with translate3d(), cubic-bezier easing, and willChange optimization, but mobile experience remains choppy
- **Next Steps**: Need deeper investigation into mobile-specific scroll performance and animation timing
- **Date Noted**: September 02, 2025

## Recent Changes

### Skills Section Redesign (September 02, 2025)
- **Completed**: Redesigned technical skills section with compact minimal pills layout
- **User Preference**: Selected Variation 1 (Minimal Pills) from 4 options presented
- **Features Added**: Quantum effects, floating particles, hover animations, gradient text
- **Design**: Compact pills with icons, category grouping, consistent with site's quantum theme

### Interactive Portfolio Showcase Enhancement (September 02, 2025)
- **Completed**: Added quantum effects to Interactive Portfolio Showcase for consistency
- **Features Added**: Floating particles, quantum-card styling, hover overlays, gradient effects
- **Enhancements**: Reality-bend effects, consciousness-expand animations, quantum-glow elements
- **Consistency**: Now matches quantum theme with skills section and other site sections

### Mobile Scroll Animation Optimization (September 02, 2025)
- **Completed**: Implemented comprehensive mobile-optimized scroll animations
- **Mobile Detection**: Added device detection for animation tuning across all sections
- **Performance**: Enhanced throttling (20ms vs 16ms), gentler transforms (15px vs 30px)
- **Smooth Transitions**: Longer durations (1s vs 0.8s), eased cubic-bezier timing
- **CSS Optimizations**: Hardware acceleration, backface-visibility, reduced motion
- **Sections Updated**: About, Skills, Timeline, Portfolio Showcase with mobile-smooth class

### Dark/Light Mode Toggle Implementation (September 02, 2025)
- **Completed**: Full dark/light mode toggle system with theme persistence
- **Features Added**: Theme context, toggle component, system preference detection
- **Integration**: Added to navigation (desktop and mobile), theme-adaptive CSS
- **Styling**: Updated all components with proper light/dark mode support
- **Storage**: localStorage persistence with system auto-detection fallback

### Timeline Animation Fixes (September 02, 2025)
- **Issue Resolved**: Fixed overlapping animations causing job descriptions to go out of focus
- **Problem**: Multiple staggered animations, transforms, and scroll effects on same elements
- **Solution**: Simplified animation logic, removed redundant transform effects
- **Result**: Job descriptions now remain visible and readable during scroll

### Animation System Overhaul (September 02, 2025)
- **Issue Resolved**: Eliminated jarring turning animations and improved visual aesthetics
- **Problem**: Consciousness-expand and reality-bend animations were too intense with rotations and 3D transforms
- **Solution**: 
  - Simplified consciousness-expand to gentle scale (1.02x) and opacity changes
  - Reduced reality-bend to subtle translateY movement with brightness adjustment
  - Replaced aggressive animations with unified scroll-animate system
  - Removed distracting background grid animations in project showcase
- **Result**: All animations now smooth, aesthetically pleasing, and easy on the eyes

### Project Showcase Animation Cleanup (September 02, 2025)
- **Issue Resolved**: Eliminated competing animation effects in project showcase section
- **Problem**: Multiple conflicting animations (chart bars, floating particles, quantum effects, scroll-based transforms)
- **Solution**:
  - Replaced animated chart bars with static height variations
  - Removed scrollProgress-based floating particle movements 
  - Simplified background effects to minimal static elements
  - Removed quantum-glow from "Ajay Miryala" name animation
  - Eliminated scroll-based stat transforms
- **Result**: Project showcase now clean and distraction-free

### Complete Aesthetic Overhaul (September 02, 2025)
- **Issue Resolved**: Eliminated all glowing and blinking effects across entire portfolio
- **Problem**: Gradient-text, quantum-glow, and quantum-pulse effects were too intense and distracting
- **Solution**:
  - Removed gradient-text class from all headings (Hero, About, Skills, Contact, Demos)
  - Replaced with clean text-foreground styling for consistent, readable headings
  - Eliminated quantum-glow effects from navigation, theme toggle, and skill icons
  - Removed quantum-pulse animations from contact section and hero image
  - Replaced floating particle backgrounds with minimal static decorative elements
  - Simplified background effects to subtle gradients and static dots
  - Reduced holographic-shimmer to simple gradient overlays
- **Result**: Portfolio now has clean, professional aesthetic that's easy on the eyes

### Consistent Heading Format Implementation (September 02, 2025)
- **Task Completed**: Applied uniform heading format across all portfolio sections
- **Format Applied**: Based on Interactive Portfolio Showcase heading style preferred by user
- **Consistent Elements**:
  - gradient-text class for all main headings (restored for consistency)
  - scroll-animate class for entrance animations
  - w-24 h-1 gradient underline bars with scroll animation
  - Descriptive paragraphs under each heading with scroll animation
- **Sections Updated**: Hero, About, Skills, Contact, Demos, Projects, Timeline
- **Result**: All headings now have identical formatting, animations, and visual hierarchy

### Gradient Animation Speed Optimization (September 02, 2025)
- **Issue Resolved**: Gradient text animation was too fast and distracting
- **Problem**: holographicShimmer animation was running at 4s duration, creating rapid color cycling
- **Solution**: Slowed gradient animation from 4s to 12s for much gentler, pleasant effect
- **Affected Elements**: All gradient-text elements including hero "Ajay Miryala" name and navigation logo
- **Result**: Smooth, aesthetically pleasing gradient animation that's easy on the eyes

### Systematic Heading Format Standardization (September 02, 2025)
- **Task Completed**: Applied identical heading format systematically across ALL portfolio sections
- **Standard Format Applied**:
  - `text-4xl md:text-5xl font-bold mb-4 gradient-text scroll-animate` for ALL main headings
  - `w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 scroll-animate` underline bars
  - Descriptive paragraph with `text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate`
- **Sections Verified**: Hero (with underline), About, Skills, Contact, Demos, Projects, Timeline, Interactive Portfolio Showcase
- **Consistency Achieved**: All 8 main headings now use identical styling, sizing, classes, and animations
- **Result**: Complete visual consistency and unified aesthetic across entire portfolio

### Comprehensive Animation Aesthetic Overhaul (September 02, 2025)
- **Issue Resolved**: Standardized heading animations and drastically improved visual aesthetics
- **Problem**: Excessive and jarring animations, inconsistent heading styles, too many distracting effects
- **Solution**:
  - Unified all headings to use consistent `scroll-animate` class
  - Reduced quantum-glow intensity (2px vs 5px shadow, 8s vs 4s duration)
  - Removed multiple animations from single elements (quantum-float + quantum-pulse)
  - Eliminated floating particles, quantum-dots, neural connections
  - Simplified background effects to minimal static decorative elements
  - Removed holographic-shimmer effects throughout components
  - Cleaned up "Ajay Miryala" name styling - removed quantum-glow
- **Result**: Clean, aesthetically pleasing animations that are easy on the eyes

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Custom CSS animations with quantum and neural network themes

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules
- **Development Server**: Development server with hot module replacement via Vite integration
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request logging with performance metrics

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (Neon serverless)
- **Schema Management**: Drizzle migrations with schema definitions in TypeScript
- **Connection**: @neondatabase/serverless for serverless PostgreSQL connections

## Key Components

### Frontend Components
1. **Navigation**: Responsive navigation with smooth scrolling and mobile hamburger menu
2. **Hero Section**: Professional headshot with animated background effects and social links
3. **About Section**: Two-column layout with personal story and achievement metrics
4. **Skills Section**: Categorized skill display with animated progress bars and icons
5. **Projects Section**: Grid-based project showcase with technology tags and links
6. **Demos Section**: Video demonstrations and image gallery for project showcases
7. **Contact Section**: Contact form with toast notifications for user feedback
8. **Particle System**: Canvas-based particle animations for visual enhancement
9. **Quantum Background**: Animated grid effects with quantum field visualizations

### Backend Infrastructure
1. **Route Registration**: Modular route system with Express app configuration
2. **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
3. **Vite Integration**: Development server integration with hot module replacement
4. **Static File Serving**: Production static file serving capability

### UI System
- Complete shadcn/ui component library implementation
- Comprehensive form components with validation
- Dialog, popover, and overlay components
- Data visualization components (charts, progress bars)
- Navigation and layout components

## Data Flow

### Client-Side Data Flow
1. React components use TanStack Query for server state management
2. Form submissions trigger API calls with error handling
3. Toast notifications provide user feedback
4. Scroll animations trigger based on intersection observers
5. Particle systems run on requestAnimationFrame for smooth animations

### Server-Side Data Flow
1. Express middleware handles request logging and error capture
2. Route handlers process API requests
3. Storage layer abstracts database operations
4. Response data is logged and returned to client
5. Static files are served in production mode

### Database Operations
1. Drizzle ORM provides type-safe database queries
2. Schema definitions ensure data consistency
3. Migrations handle database structure changes
4. Connection pooling managed by Neon serverless driver

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Database**: Drizzle ORM, Neon serverless PostgreSQL
- **Development**: TypeScript, Vite, PostCSS, Tailwind CSS
- **State Management**: TanStack Query for server state
- **Validation**: Zod for schema validation with Drizzle integration

### Styling and Animation
- **Tailwind CSS**: Utility-first CSS framework with custom theming
- **Custom CSS**: Quantum and neural network themed animations
- **Font**: Inter font family from Google Fonts
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production
- **TSX**: TypeScript execution for development
- **Replit Integration**: Replit-specific development tools and banners

## Deployment Strategy

### Development Environment
- Vite development server with hot module replacement
- Express server running on Node.js with tsx for TypeScript execution
- Environment variables for database configuration
- Replit integration for cloud development

### Production Build
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Static Serving**: Express serves built frontend files in production
4. **Database Migrations**: Drizzle handles schema updates via `npm run db:push`

### Environment Configuration
- **Development**: NODE_ENV=development with live reloading
- **Production**: NODE_ENV=production with optimized builds
- **Database**: Requires DATABASE_URL environment variable for PostgreSQL connection
- **Security**: CORS and security headers configured for production deployment

### Scaling Considerations
- Serverless-ready architecture with Neon PostgreSQL
- Stateless server design for horizontal scaling
- CDN-ready static asset serving
- Memory storage fallback for development/testing environments