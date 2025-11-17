# Replit Development Guide

## 🎯 Current Setup

This project is **deployed to GCP Cloud Run** via **GitHub Actions** (not Replit deployments).

### Replit's Role
Replit is configured as a **development environment only**:
- ✅ Quick prototyping and testing
- ✅ Live preview with hot reload
- ✅ Easy database access
- ❌ **NOT used for production deployments**

## 🚀 Development Workflow

### In Replit
1. Click **"Run"** button to start dev server
2. Make changes to code
3. Test at the preview URL (e.g., `https://your-repl.replit.dev`)
4. Commit changes when satisfied

### Deployment Flow
```
Replit (dev) → GitHub (push) → GitHub Actions → GCP Cloud Run (prod)
```

**Production URL**: https://ajaymiryala.com

## 📋 Common Tasks in Replit

### Start Development Server
```bash
npm run dev
```
Runs on `http://localhost:5000` with hot reload

### Build for Production (Test)
```bash
npm run build
npm start
```
Tests the production build locally

### Database Operations
```bash
# Push schema changes
npm run db:push

# View database in browser
npm run db:studio
```

### Environment Variables
Set in Replit Secrets (🔒 icon):
- `DATABASE_URL` - Neon PostgreSQL connection
- `RESEND_API_KEY` - Email service API key

## 🔄 Git Workflow

### Push to Production
```bash
git add .
git commit -m "your message"
git push origin main  # Auto-deploys via GitHub Actions
```

### Check Deployment Status
Visit: https://github.com/ajay-sai/Ajay-Website/actions

## ⚠️ Important Notes

1. **Don't use Replit's "Deploy" button** - it's disabled (deployment commented out in `.replit`)
2. **Always push to GitHub** - that's the production deployment trigger
3. **Replit database is separate** - production uses Neon PostgreSQL
4. **Service account auth** - GitHub Actions handles GCP authentication

## 🆘 Troubleshooting

### Preview Not Working
- Check if port 5000 is exposed
- Restart the Repl
- Run `npm install` if packages are missing

### Database Connection Issues
- Verify `DATABASE_URL` secret is set
- Check Neon dashboard for connection status

### Changes Not Appearing in Production
- Ensure you pushed to GitHub (`git push`)
- Check GitHub Actions for deployment status
- Verify Cloud Run logs: `gcloud run services logs read ajay-portfolio --region=us-central1`

## 📚 Related Documentation
- [GCP Deployment Guide](./GCP_DEPLOYMENT.md)
- [Domain Setup Guide](./DOMAIN_SETUP_GUIDE.md)
- [Design System](./DESIGN_SYSTEM.md)
