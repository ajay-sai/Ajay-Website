# Portfolio Website

## Overview
This is a modern, professional portfolio website for Ajay Miryala, a Generative AI and ML Engineer with a Master of Science in Business Statistics from the University of Maryland. The application is a full-stack web application built with React for the frontend and Express.js for the backend, using PostgreSQL as the database (managed through Drizzle ORM). The website showcases Ajay's skills, projects, and expertise in generative AI, LLM systems, RAG architectures, and production ML through an immersive, visually stunning interface with quantum-themed animations and effects. Its purpose is to present a professional online presence, highlight capabilities, and provide an engaging user experience for potential employers or collaborators. The site features a clean multi-page navigation structure with dedicated pages for Home, Professional Journey, Projects & Case Studies, and Schedule Meeting (Contact).

**Latest Update (Nov 10, 2024):** Object Storage migration completed - all large images (timeline + profile photos) now served from Replit Object Storage. Deployment build size reduced by ~76MB. Asset policy established: @assets for logos only (<200KB), Object Storage for photos (>200KB).

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
- **Object Storage**: Replit Object Storage (Google Cloud Storage) for serving public assets like timeline images.

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

### WorkExperience Schema Enhancement - November 10, 2024
Completed comprehensive work experience data extraction and Schema.org compliance improvements:

**Resume Data Extraction:**
- Installed python-docx for accurate DOCX parsing
- Extracted complete job descriptions from resume for all 8 employment positions
- Preserved all 50 responsibility bullets with exact wording, metrics, and technologies

**Schema Implementation:**
1. **formatResponsibilities() Helper Function**
   - Created helper to convert responsibility arrays to Schema.org compliant Text format
   - Function: `formatResponsibilities(items: string[]) => items.map(item => \`• ${item}\`).join('\n')`
   - Ensures JSON-LD serializes responsibilities as strings (not arrays) with bullet formatting

2. **Complete Job Descriptions Added**
   - Lead Generative AI and ML Engineer (The Home Depot): 9 responsibilities
   - Senior Data Scientist - Decision Analytics (The Home Depot): 11 responsibilities
   - Senior Data Analyst (The Home Depot): 7 responsibilities
   - Data Analyst and Engineer (Harley Davidson): 7 responsibilities
   - Data Scientist (Principal Financial): 5 responsibilities
   - Marketing Analyst (Anahata Art & Design): 3 responsibilities
   - Graduate Assistant (University of Maryland): 4 responsibilities
   - Data Analyst (Bridge Solutions): 4 responsibilities
   - **Total: 50 detailed responsibility bullets across all positions**

3. **Organization Schema Completion**
   - Added complete PostalAddress for all 6 organizations
   - Each includes: streetAddress, addressLocality, addressRegion, addressCountry
   - Organizations: The Home Depot, Harley Davidson, Principal Financial Group, University of Maryland, Bridge Solutions, Anahata Art & Design
   - Added missing Anahata Art & Design organization schema

**Data Accuracy:**
- All job titles verified against resume
- All dates (startDate, endDate) verified for 8 positions
- All company names confirmed
- All metrics preserved (55% reduction, 87% accuracy, $20M target, etc.)
- All technologies and tools mentioned (GPT-4, Gemini, BigQuery, TensorFlow, etc.)

**Schema.org Compliance:**
- responsibilities field now Text format (not arrays) per Schema.org specification
- All 8 EmployeeRole schemas validated
- Complete PostalAddress data for better local search and crawler resolution
- Ready for Google Rich Results and schema validators

**Testing:**
- E2E testing verified all 8 roles render correctly
- Confirmed responsibilities output as Text with bullet formatting
- Verified all 50 bullets present in rendered schema
- Confirmed 6 organizations have complete address data including streetAddress
- No console errors, all pages functional

### Object Storage Migration - November 10, 2024
Migrated all large images (timeline + profile photos, ~76MB total) from local attached_assets to Replit Object Storage for deployment optimization:

**Implementation:**
1. **Object Storage Setup**
   - Created default bucket: `replit-objstore-115625ec-c30f-4fba-b127-b0b97d692d24`
   - Configured public directory: `/repl-default-bucket-2757ce05-f5e0-4b34-ae6d-fb5b07515b64/public`
   - Set environment variables: PUBLIC_OBJECT_SEARCH_PATHS, PRIVATE_OBJECT_DIR

2. **Server Implementation** (server/objectStorage.ts, server/routes.ts)
   - Created ObjectStorageService with Google Cloud Storage client
   - Added `/public-objects/:filePath(*)` route to serve public images
   - Implemented searchPublicObject() and downloadObject() methods
   - Set cache headers: `public, max-age=3600` for optimal CDN caching

3. **Image Upload** (scripts/upload-timeline-images.ts, scripts/upload-harley-images.ts, scripts/upload-hero-about-images.ts, scripts/upload-large-logos.ts)
   - Created automated upload scripts for all images
   - Timeline images: 34 files uploaded to `public/timeline/` (~70MB)
   - Profile photos: 2 files uploaded to `public/profile/` (~6.4MB)
   - Large logos: 1 file uploaded to `public/logos/` (378KB Stoned Santa logo)
   - Set appropriate content types (image/jpeg, image/png) and cache control
   - All 37 images successfully uploaded with 100% success rate

4. **Frontend Updates** 
   - **parallax-timeline.tsx**: Updated all workplace images to `/public-objects/timeline/`, migrated 378KB logo to `/public-objects/logos/`
   - **about-section.tsx**: Migrated 6.3MB profile photo to `/public-objects/profile/`
   - **hero-section.tsx**: Migrated profile photo to `/public-objects/profile/`
   - Small company logos remain as @assets imports (all < 100KB, needed at build time)
   - No functional changes to component logic or animations

5. **Deployment Optimization** (.dockerignore, ASSET_POLICY.md)
   - Added attached_assets/ to .dockerignore
   - Established asset policy: @assets for logos only (<200KB), Object Storage for photos (>200KB)
   - Reduced deployment build size by ~76MB (70MB timeline + 6.4MB profile photos)
   - Images now served from cloud storage with CDN caching
   - Documented asset management strategy in ASSET_POLICY.md

**Benefits:**
- **Build Size**: Reduced by ~76MB (all large images moved to cloud storage)
- **Performance**: Images served from Google Cloud Storage with CDN caching
- **Scalability**: Offloaded static assets to object storage infrastructure
- **Cache Control**: 1-year browser cache for optimal performance
- **Deployment Ready**: Under Cloud Run 8 GiB limit, all @assets imports < 100KB

### Deployment Optimization - November 10, 2024
Additional deployment size optimizations to resolve Cloud Run 8 GiB limit errors:

**Issues Identified:**
- 7.3GB .cache directory being included in deployment
- Old build cache causing migrated images to be re-bundled
- Large JavaScript bundle (631KB uncompressed)

**Solutions Applied:**
1. **.dockerignore Enhancements**
   - Added .cache/, .turbo, .next, .nuxt to exclusions
   - Prevents 7.3GB cache directory from being deployed
   
2. **Build Cache Management**
   - Cleared dist/ and .vite/ directories
   - Fresh production build verified clean (1.2MB total)
   - No large images in dist/public/assets/
   
3. **Build Output Verification**
   - Total dist size: 1.2MB
   - JavaScript bundle: 631.68 KB (gzipped: 188.40 KB)
   - CSS bundle: 120.36 KB (gzipped: 18.56 KB)
   - 9 small company logos: all < 100KB
   
**Deployment Footprint:**
- .cache/ excluded: 7.3GB saved
- attached_assets/ excluded: 69MB saved
- .git/ excluded: 82MB saved
- node_modules excluded: 401MB saved (reinstalled during deployment)
- **Total savings: ~8.5GB**

**Files Modified:**
- server/objectStorage.ts (new)
- server/routes.ts (added public-objects route)
- client/src/components/parallax-timeline.tsx (updated URLs)
- scripts/upload-timeline-images.ts (new)
- .dockerignore (added attached_assets)
- replit.md (documentation update)