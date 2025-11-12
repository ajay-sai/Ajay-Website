# GCP Cloud Run Deployment Guide

## Project Information
- **GitHub Repository**: https://github.com/ajay-sai/Ajay-Website
- **GCP Project Name**: Gemini API
- **GCP Project ID**: gen-lang-client-0281776478
- **GCP Project Number**: 755976610848
- **Service Account**: replit@gen-lang-client-0281776478.iam.gserviceaccount.com
- **Region**: us-central1 (recommended for Cloud Run free tier)

## Architecture Changes for Cloud Run

### 1. Object Storage Migration
✅ **Completed**: Migrated from Replit Object Storage to static file hosting
- Moved all timeline images (34 files) from object storage to `public/images/timeline/`
- Moved profile photo to `public/images/profile/`
- Moved logo to `public/images/logos/`
- Updated code references in `parallax-timeline.tsx` and `about-section.tsx`
- Removed Replit sidecar authentication dependencies
- Total static assets size: ~56MB

### 2. Database Configuration
✅ **Keeping Neon PostgreSQL** - No migration needed
- Already cloud-based and works perfectly with Cloud Run
- Just pass DATABASE_URL as environment variable/secret

### 3. Code Modifications
✅ Completed:
- Removed Replit Object Storage routes from `server/routes.ts`
- Removed object storage service imports
- Added static file serving for `public/` directory in `server/index.ts`
- Replit-specific plugins already conditionally loaded (dev-only)

## Prerequisites

### 1. Install Google Cloud CLI
```bash
# Install gcloud CLI
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# Authenticate
gcloud auth login
gcloud config set project gen-lang-client-0281776478
```

### 2. Enable Required APIs
```bash
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  secretmanager.googleapis.com
```

### 3. Create Artifact Registry Repository
```bash
gcloud artifacts repositories create ajay-portfolio \
  --repository-format=docker \
  --location=us-central1 \
  --description="Docker repository for Ajay portfolio website"
```

## Secret Management

### 1. Store Secrets in Secret Manager
```bash
# Store DATABASE_URL
echo -n "your-neon-database-url" | \
  gcloud secrets create database-url \
  --data-file=- \
  --replication-policy="automatic"

# Store RESEND_API_KEY
echo -n "your-resend-api-key" | \
  gcloud secrets create resend-api-key \
  --data-file=- \
  --replication-policy="automatic"
```

### 2. Grant Cloud Run Access to Secrets
```bash
# Get the Cloud Run service account
PROJECT_NUMBER=$(gcloud projects describe gen-lang-client-0281776478 --format="value(projectNumber)")
SERVICE_ACCOUNT="${PROJECT_NUMBER}-compute@developer.gserviceaccount.com"

# Grant access to secrets
gcloud secrets add-iam-policy-binding database-url \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/secretmanager.secretAccessor"

gcloud secrets add-iam-policy-binding resend-api-key \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/secretmanager.secretAccessor"
```

## Deployment Options

### Option A: Manual Deployment (One-Time)

#### 1. Build and Deploy Locally
```bash
# Build the Docker image
docker build -t us-central1-docker.pkg.dev/gen-lang-client-0281776478/ajay-portfolio/portfolio:latest .

# Test locally (optional)
docker run -p 8080:8080 \
  -e DATABASE_URL="your-database-url" \
  -e RESEND_API_KEY="your-resend-api-key" \
  -e NODE_ENV=production \
  us-central1-docker.pkg.dev/gen-lang-client-0281776478/ajay-portfolio/portfolio:latest

# Configure Docker to use gcloud credentials
gcloud auth configure-docker us-central1-docker.pkg.dev

# Push to Artifact Registry
docker push us-central1-docker.pkg.dev/gen-lang-client-0281776478/ajay-portfolio/portfolio:latest

# Deploy to Cloud Run
gcloud run deploy ajay-portfolio \
  --image=us-central1-docker.pkg.dev/gen-lang-client-0281776478/ajay-portfolio/portfolio:latest \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated \
  --port=8080 \
  --memory=512Mi \
  --cpu=1 \
  --min-instances=0 \
  --max-instances=10 \
  --set-env-vars=NODE_ENV=production \
  --set-secrets=DATABASE_URL=database-url:latest,RESEND_API_KEY=resend-api-key:latest
```

#### 2. Deploy from Source (Simpler)
```bash
gcloud run deploy ajay-portfolio \
  --source . \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated \
  --port=8080 \
  --memory=512Mi \
  --cpu=1 \
  --min-instances=0 \
  --max-instances=10 \
  --set-env-vars=NODE_ENV=production \
  --set-secrets=DATABASE_URL=database-url:latest,RESEND_API_KEY=resend-api-key:latest
```

### Option B: Continuous Deployment from GitHub (Recommended)

#### 1. Connect GitHub Repository
```bash
# Install the Cloud Build GitHub App
# Visit: https://github.com/apps/google-cloud-build
# Install it for the ajay-sai/Ajay-Website repository
```

#### 2. Create Build Trigger
```bash
gcloud builds triggers create github \
  --name="ajay-portfolio-deploy" \
  --repo-name=Ajay-Website \
  --repo-owner=ajay-sai \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml
```

Or use the GCP Console:
1. Go to Cloud Build > Triggers
2. Click "Create Trigger"
3. Connect GitHub repository: ajay-sai/Ajay-Website
4. Set trigger to run on push to `main` branch
5. Set Build Configuration to use `cloudbuild.yaml`
6. Save

#### 3. How It Works
Once set up, every push to the `main` branch will:
1. Trigger Cloud Build automatically
2. Build the Docker image
3. Push to Artifact Registry
4. Deploy to Cloud Run
5. Complete in ~5-10 minutes

## Custom Domain Setup (Optional)

### 1. Map Custom Domain
```bash
# Map ajaymiryala.com to Cloud Run service
gcloud run services add-iam-policy-binding ajay-portfolio \
  --region=us-central1 \
  --member=allUsers \
  --role=roles/run.invoker

gcloud beta run domain-mappings create \
  --service=ajay-portfolio \
  --domain=ajaymiryala.com \
  --region=us-central1
```

### 2. Update DNS Records
Add the DNS records shown by the command above to your domain registrar.

## Monitoring & Logs

### View Logs
```bash
# Real-time logs
gcloud run services logs tail ajay-portfolio --region=us-central1

# Recent logs
gcloud run services logs read ajay-portfolio --region=us-central1 --limit=50
```

### View Metrics
```bash
# Service details
gcloud run services describe ajay-portfolio --region=us-central1

# Or visit Cloud Console
# https://console.cloud.google.com/run?project=gen-lang-client-0281776478
```

## Cost Optimization

### Cloud Run Free Tier (Monthly)
- ✅ 2 million requests
- ✅ 180,000 vCPU-seconds
- ✅ 360,000 GiB-seconds
- ✅ 1 GB network egress (from North America)

### Expected Costs for Portfolio Site
**Free** - Your portfolio traffic should easily stay within free tier limits!

### Optimize Further
- Set `--min-instances=0` to scale to zero when idle
- Use `--memory=512Mi` and `--cpu=1` (lowest settings)
- Enable Cloud CDN for static assets (optional)

## Troubleshooting

### Build Fails
```bash
# Check build logs
gcloud builds list --limit=5
gcloud builds log [BUILD_ID]
```

### Deployment Fails
```bash
# Check service status
gcloud run services describe ajay-portfolio --region=us-central1

# Check logs
gcloud run services logs tail ajay-portfolio --region=us-central1
```

### Database Connection Issues
Verify DATABASE_URL secret:
```bash
gcloud secrets versions access latest --secret=database-url
```

### Images Not Loading
Ensure `public/` directory is being served correctly. The images should be at:
- `/images/timeline/*.jpg`
- `/images/profile/*.jpg`
- `/images/logos/*.png`

## Rollback

### Rollback to Previous Revision
```bash
# List revisions
gcloud run revisions list --service=ajay-portfolio --region=us-central1

# Rollback to specific revision
gcloud run services update-traffic ajay-portfolio \
  --to-revisions=[REVISION_NAME]=100 \
  --region=us-central1
```

## Local Development vs Production

### Development (Replit)
- Uses Vite dev server with HMR
- Serves from `client/` directory
- Hot reload enabled
- Replit plugins active

### Production (Cloud Run)
- Serves built files from `dist/public`
- Static assets from `public/`
- No Replit dependencies
- Optimized bundles

## Files Created/Modified for Migration

### New Files
- ✅ `Dockerfile` - Container definition for Cloud Run
- ✅ `cloudbuild.yaml` - CI/CD configuration for GitHub integration
- ✅ `GCP_DEPLOYMENT.md` - This deployment guide
- ✅ `public/images/` - Static images directory (56MB)

### Modified Files
- ✅ `client/src/components/parallax-timeline.tsx` - Updated image paths
- ✅ `client/src/components/about-section.tsx` - Updated image paths
- ✅ `server/routes.ts` - Removed object storage routes
- ✅ `server/index.ts` - Added static file serving for public/
- ✅ `.dockerignore` - Added Replit-specific exclusions

### Unchanged (No Migration Needed)
- ✅ `vite.config.ts` - Replit plugins already conditional
- ✅ `server/db.ts` - Database connection works as-is
- ✅ `shared/schema.ts` - No changes needed

## Next Steps

1. **Test Build Locally** (Optional)
   ```bash
   docker build -t ajay-portfolio-test .
   docker run -p 8080:8080 ajay-portfolio-test
   # Visit http://localhost:8080
   ```

2. **Store Secrets** (Required)
   - Create secrets in Secret Manager
   - Grant Cloud Run service account access

3. **Choose Deployment Method**
   - Manual: Use `gcloud run deploy --source .`
   - CI/CD: Set up GitHub trigger with cloudbuild.yaml

4. **Verify Deployment**
   - Test all routes work
   - Verify images load
   - Test contact form
   - Check database queries

5. **Configure Custom Domain** (Optional)
   - Map ajaymiryala.com
   - Update DNS records
   - SSL auto-provisioned

## Support Resources

- Cloud Run Documentation: https://cloud.google.com/run/docs
- Pricing Calculator: https://cloud.google.com/products/calculator
- GCP Console: https://console.cloud.google.com/run?project=gen-lang-client-0281776478
- GitHub Repository: https://github.com/ajay-sai/Ajay-Website
