# Local Testing Guide

This guide walks you through testing your portfolio locally before deploying to GCP Cloud Run.

## Prerequisites Checklist

- [ ] Node.js 20.x installed
- [ ] Git installed
- [ ] Code editor (VS Code/Cursor)
- [ ] Neon PostgreSQL database URL
- [ ] Resend API key (for contact form)

## Step 1: Install Dependencies

```powershell
# Install all npm packages
npm install
```

## Step 2: Configure Environment Variables

Create a `.env` file in the project root:

```powershell
# Create .env file from template
Copy-Item .env.example .env

# Edit .env with your actual values
notepad .env
```

**Required environment variables:**

```env
# Your Neon PostgreSQL connection string
DATABASE_URL=postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require

# Your Resend API key (for contact form emails)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Development mode
NODE_ENV=development
PORT=5000
```

### Getting Your Credentials

**Neon Database URL:**
1. Go to https://neon.tech
2. Sign in or create account
3. Create a new project (if needed)
4. Copy the connection string from the dashboard

**Resend API Key:**
1. Go to https://resend.com
2. Sign in or create account
3. Go to API Keys section
4. Create a new API key

## Step 3: Initialize Database

```powershell
# Push database schema to Neon
npm run db:push
```

This command:
- Connects to your Neon database
- Creates all required tables (users, projects)
- Seeds initial project data

**Expected output:**
```
✓ Applying changes...
✓ Database synchronized
```

## Step 4: Test Development Server

```powershell
# Start development server with hot reload
npm run dev
```

**Expected output:**
```
serving on port 5000
```

**What's happening:**
- Express server starts on port 5000
- Vite dev server runs with HMR (Hot Module Replacement)
- Database connection established
- Projects seeded automatically

## Step 5: Manual Testing Checklist

Open your browser to **http://localhost:5000**

### Homepage (`/`)
- [ ] Page loads without errors
- [ ] Hero section displays your name with gradient animation
- [ ] About section shows profile photo
- [ ] Journey preview shows timeline cards
- [ ] Skills section displays tech stack
- [ ] Projects section shows project cards
- [ ] Services section loads
- [ ] FAQ section displays
- [ ] Footer has contact links
- [ ] Theme toggle works (light/dark mode)

### Journey Page (`/journey`)
- [ ] Timeline displays with images
- [ ] Scroll animations work
- [ ] All company logos load
- [ ] Timeline events show correctly
- [ ] Mobile responsive layout works

### Projects Page (`/projects`)
- [ ] Project cards display from database
- [ ] Featured projects show first
- [ ] Tags and technologies display
- [ ] Project links work
- [ ] Search/filter functionality (if implemented)

### Contact Page (`/contact`)
- [ ] Contact form displays
- [ ] Calendar/meeting scheduler loads
- [ ] Form validation works
- [ ] Submit button enabled

### API Endpoints

Test API routes manually:

```powershell
# Test projects API
curl http://localhost:5000/api/projects

# Test featured projects
curl http://localhost:5000/api/projects/featured
```

### Static Assets
- [ ] Timeline images load: `/images/timeline/*.jpg`
- [ ] Profile photo loads: `/images/profile/*.jpg`
- [ ] Company logos load: `/images/logos/*.png`
- [ ] Resume PDF accessible: `/resume.pdf`
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt accessible: `/robots.txt`

### Contact Form Testing

1. Fill out the contact form
2. Submit the form
3. Check if email arrives at `sai.ajaysai@gmail.com`
4. Verify success message displays

**Note:** If `RESEND_API_KEY` is not set, contact form will show configuration error.

## Step 6: Test Production Build

```powershell
# Build for production
npm run build
```

**Expected output:**
```
vite v5.x.x building for production...
✓ built in 15.23s
dist/public/index.html        x.xx kB
dist/public/assets/index-xxx.js   xxx.xx kB
...
```

**What's created:**
- `dist/public/` - Frontend build (HTML, JS, CSS)
- `dist/index.js` - Backend server bundle

### Test Production Server

```powershell
# Start production server
npm start
```

Visit **http://localhost:5000** and repeat all tests from Step 5.

**Key differences in production:**
- No hot reload
- Optimized bundles
- Minified code
- No Replit plugins loaded
- Serves from `dist/public/`

## Step 7: Test Docker Build (Optional but Recommended)

This mimics the exact GCP Cloud Run environment:

```powershell
# Build Docker image
docker build -t ajay-portfolio-test .

# Run container with environment variables
docker run -p 8080:8080 `
  -e DATABASE_URL="your-database-url-here" `
  -e RESEND_API_KEY="your-resend-key-here" `
  -e NODE_ENV=production `
  ajay-portfolio-test
```

Visit **http://localhost:8080** (note: port 8080, not 5000)

### Docker Testing Checklist
- [ ] Container builds successfully
- [ ] Server starts on port 8080
- [ ] All routes work
- [ ] Images load correctly
- [ ] Database queries work
- [ ] Contact form works

## Troubleshooting

### Port Already in Use
```powershell
# Kill process on port 5000
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process -Force

# Or use different port
$env:PORT=3000; npm run dev
```

### Database Connection Errors

**Error:** `DATABASE_URL must be set`
- **Solution:** Ensure `.env` file exists with valid `DATABASE_URL`

**Error:** `Connection timeout`
- **Solution:** Check Neon database is running and accessible
- **Solution:** Verify connection string is correct

**Error:** `SSL required`
- **Solution:** Ensure `?sslmode=require` is in DATABASE_URL

### Images Not Loading

**Error:** 404 on `/images/*`
- **Solution:** Ensure `public/images/` directory exists
- **Solution:** Check image files are present
- **Solution:** Verify paths start with `/images/` (no leading dot)

### Build Errors

**Error:** `Cannot find module '@/components/...'`
- **Solution:** Run `npm install` again
- **Solution:** Check `tsconfig.json` paths are correct

**Error:** `vite build failed`
- **Solution:** Check for TypeScript errors: `npm run check`
- **Solution:** Review console for specific error details

### Contact Form Not Working

**Error:** `Email service is not configured`
- **Solution:** Set `RESEND_API_KEY` in `.env`
- **Solution:** Verify API key is valid at resend.com

**Error:** `Failed to send message`
- **Solution:** Check Resend dashboard for error logs
- **Solution:** Verify sender email is verified in Resend

### Theme Not Working

**Problem:** Theme toggle doesn't switch modes
- **Solution:** Clear browser localStorage
- **Solution:** Check `ThemeProvider` is wrapping the app

## Performance Checks

### Development Server
- Initial load: < 2 seconds
- Hot reload: < 500ms
- API responses: < 100ms

### Production Build
- Build time: < 30 seconds
- Bundle size: < 500KB (gzipped)
- First contentful paint: < 1.5s

### Lighthouse Scores (Target)
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

Run Lighthouse in Chrome DevTools to verify.

## Next Steps

Once local testing passes:

1. ✅ All routes work
2. ✅ Images load correctly
3. ✅ Database queries succeed
4. ✅ Contact form sends emails
5. ✅ Production build works
6. ✅ Docker build works (optional)

You're ready to deploy to GCP Cloud Run! Follow `GCP_DEPLOYMENT.md` for deployment steps.

## Quick Reference Commands

```powershell
# Development
npm run dev              # Start dev server with HMR
npm run check            # Type-check TypeScript
npm run db:push          # Sync database schema

# Production
npm run build            # Build for production
npm start                # Run production server

# Docker
docker build -t test .   # Build image
docker run -p 8080:8080 test  # Run container

# Database
npm run db:push          # Push schema changes
```

## Environment Variables Summary

| Variable | Required | Purpose | Example |
|----------|----------|---------|---------|
| `DATABASE_URL` | Yes | Neon PostgreSQL connection | `postgresql://...` |
| `RESEND_API_KEY` | Yes* | Email service for contact form | `re_xxx...` |
| `NODE_ENV` | Auto | Environment mode | `development`/`production` |
| `PORT` | No | Server port (default: 5000/8080) | `5000` |

*Required for contact form to work, but app runs without it.

## Support

If you encounter issues:
1. Check console for error messages
2. Review logs in terminal
3. Verify `.env` configuration
4. Check database connectivity
5. Review `GCP_DEPLOYMENT.md` troubleshooting section
