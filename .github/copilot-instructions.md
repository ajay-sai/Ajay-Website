# AI Coding Agent Instructions

## Project Overview

This is a professional portfolio website for an AI/ML engineer, built as a **full-stack TypeScript monorepo** combining React frontend, Express backend, and PostgreSQL database. The project is optimized for **Google Cloud Run** deployment with continuous deployment from GitHub.

## Architecture

### Monorepo Structure
```
├── client/           # React + Vite frontend (SPA)
│   └── src/
│       ├── components/   # UI components (default exports)
│       ├── pages/        # Route components (home, journey, projects, contact)
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities (queryClient, etc.)
├── server/           # Express backend API
│   ├── index.ts      # Server entry + static file serving
│   ├── routes.ts     # API route definitions
│   ├── db.ts         # Drizzle ORM setup (Neon PostgreSQL)
│   └── storage.ts    # Database abstraction layer
├── shared/           # Shared types and schemas (Zod + Drizzle)
└── public/           # Static assets (images, resume, SEO files)
```

### Critical Build Pipeline
- **Development**: `npm run dev` runs Express server with Vite middleware + HMR
- **Production**: `npm run build` creates `dist/public/` (frontend) + `dist/index.js` (backend)
- **Static Assets**: `/public` is served directly via `express.static()` in all environments
- **Deployment Target**: Docker container on GCP Cloud Run (see `Dockerfile`, `cloudbuild.yaml`)

## Development Patterns

### 1. Path Aliases (Critical!)
Always use TypeScript path aliases defined in `tsconfig.json` and `vite.config.ts`:
```typescript
import { Button } from "@/components/ui/button";  // ✅ Frontend
import type { Project } from "@shared/schema";     // ✅ Shared types
import { storage } from "./storage";               // ✅ Backend (relative)
```

### 2. Component Conventions
- **Export Style**: Components use `export default function ComponentName()` (not named exports)
- **File Naming**: `kebab-case.tsx` for components (e.g., `hero-section.tsx`)
- **UI Components**: Radix UI + Tailwind via shadcn/ui in `client/src/components/ui/`
- **Custom Hooks**: Prefix with `use-` (e.g., `use-scroll-animation.tsx`)

### 3. Routing
- Uses **Wouter** (not React Router): `import { Link, useLocation } from "wouter"`
- Client-side routes in `client/src/App.tsx`: `/`, `/journey`, `/projects`, `/contact`
- API routes in `server/routes.ts`: `/api/projects`, `/api/contact`, etc.

### 4. Database Layer
- **ORM**: Drizzle with Neon PostgreSQL (serverless WebSocket connection)
- **Schema**: Single source of truth in `shared/schema.ts` (Drizzle tables + Zod schemas)
- **Storage Pattern**: `server/storage.ts` exports singleton `storage` with repository methods:
  ```typescript
  await storage.getAllProjects();
  await storage.getProjectBySlug(slug);
  ```
- **Migrations**: Run `npm run db:push` to sync schema changes

### 5. Static Assets
- **Images**: Stored in `public/images/` subdirectories (timeline, profile, logos)
- **Access Pattern**: Use absolute paths from `/` in React components:
  ```tsx
  <img src="/images/timeline/photo.jpg" />  // ✅ Correct
  ```
- **Resume**: Lives at `public/resume.pdf`, downloadable via `/api/download/resume`

## Design System

### Theming
- **System**: Next Themes with custom `ThemeProvider` in `client/src/contexts/theme-context.tsx`
- **CSS Variables**: Defined in `client/src/index.css` with `.light` and `.dark` classes
- **Usage**: Always use CSS custom properties:
  ```css
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
  ```

### Animation Patterns (See `DESIGN_SYSTEM.md`)
- **Gradient Text**: `.gradient-text` class with holographic shimmer animation
- **Scroll Animations**: `.scroll-animate` + Intersection Observer pattern
- **Performance**: All animations use `transform` and `opacity` for GPU acceleration
- **Accessibility**: Respect `prefers-reduced-motion` media query

### Component Style Guide
- **Buttons**: Premium gradient style with shimmer effects (see `DESIGN_SYSTEM.md`)
- **Cards**: `.quantum-card` class with glassmorphism + theme-adaptive backgrounds
- **Icons**: Lucide React (`lucide-react` package)

## Critical Workflows

### Adding a New Page
1. Create component in `client/src/pages/my-page.tsx`
2. Add route in `client/src/App.tsx`: `<Route path="/my-page" component={MyPage} />`
3. Update navigation in `client/src/components/navigation.tsx`
4. Add SEO metadata using `<SEOHead>` component (see `client/src/pages/home.tsx`)

### API Development
1. Define Zod schema in `shared/schema.ts`
2. Add storage method in `server/storage.ts` if database access needed
3. Implement route in `server/routes.ts` with schema validation
4. Use `apiRequest()` helper from `client/src/lib/queryClient.ts` for frontend calls

### Environment Variables
- **Development**: Define in `.env` (not tracked in Git)
- **Production (Cloud Run)**: Stored in GCP Secret Manager
  - `DATABASE_URL` → `database-url` secret
  - `RESEND_API_KEY` → `resend-api-key` secret
- **Access Pattern**: `process.env.VARIABLE_NAME` (both client and server)

## Deployment

### GCP Cloud Run Setup (See `GCP_DEPLOYMENT.md`)
1. **Build**: Docker multi-stage build optimizes image size (~100MB final)
2. **Static Assets**: Copied to container at `/app/public` and served via `express.static()`
3. **Secrets**: Injected at runtime via `--set-secrets` flag in `cloudbuild.yaml`
4. **Port**: Always uses `PORT` env var (defaults 5000 dev, 8080 production)
5. **Auto-Deploy**: Push to `main` branch triggers Cloud Build → Artifact Registry → Cloud Run

### Replit-Specific Code (Dev Only)
- `vite.config.ts` conditionally loads Replit plugins based on `NODE_ENV` and `REPL_ID`:
  ```typescript
  ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
    ? [cartographer()]  // ✅ Only loads in Replit dev
    : [])
  ```
- **Never** remove this conditional - it's critical for production builds

### Testing Builds Locally
```bash
# Build for production
npm run build

# Test production server
npm start

# Test with Docker (matches Cloud Run exactly)
docker build -t portfolio-test .
docker run -p 8080:8080 -e DATABASE_URL="..." -e RESEND_API_KEY="..." portfolio-test
```

## Common Pitfalls

### ❌ Don't Do This
- Import components with named exports: `import { HeroSection }` → Use default exports
- Use relative paths for shared code: `import "../../../shared/schema"` → Use `@shared/schema`
- Hardcode environment in configs → Always check `process.env.NODE_ENV`
- Store secrets in code → Use GCP Secret Manager
- Serve images from object storage → All static assets in `/public` directory

### ✅ Do This Instead
- `export default function Component()` for all components
- Use path aliases: `@/components`, `@shared`, `@assets`
- Conditional logic: `app.get("env") === "development"` (Express) or `import.meta.env.DEV` (Vite)
- Secrets via environment variables injected at runtime
- Static file serving via `express.static('public')`

## Key Files Reference

- **`server/index.ts`**: Server entry point with static file serving setup
- **`server/routes.ts`**: All API endpoint definitions
- **`shared/schema.ts`**: Single source of truth for types and validation
- **`vite.config.ts`**: Build config with path aliases and conditional Replit plugins
- **`Dockerfile`**: Multi-stage build for Cloud Run deployment
- **`cloudbuild.yaml`**: CI/CD pipeline for automatic deployments
- **`DESIGN_SYSTEM.md`**: Complete animation library and component patterns
- **`GCP_DEPLOYMENT.md`**: Comprehensive deployment guide with commands

## SEO & Performance

- Structured data via `react-helmet-async` (see `client/src/components/seo/schemas.ts`)
- `robots.txt` and `sitemap.xml` in `/public` for search engines
- Lazy loading images: Native `loading="lazy"` attribute
- Code splitting: React.lazy + Suspense (not currently implemented but easy to add)

## Questions? Check These First

1. **Build failing?** → Verify path aliases match `tsconfig.json` and `vite.config.ts`
2. **Images not loading?** → Ensure paths start with `/images/` and files exist in `public/images/`
3. **Database errors?** → Check `DATABASE_URL` is set and run `npm run db:push`
4. **Deployment issues?** → Review `GCP_DEPLOYMENT.md` troubleshooting section
5. **Styling broken?** → Verify CSS variables in `index.css` and theme context is wrapped around app
