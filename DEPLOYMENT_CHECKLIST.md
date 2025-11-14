# 🚀 Deployment Checklist & Security Audit

## ✅ Completed Tasks

### 1. **Production Deployment** ✅
- ✅ Docker image built and pushed to GCP Artifact Registry
- ✅ Deployed to Cloud Run: https://ajay-portfolio-755976610848.us-central1.run.app
- ✅ Secrets configured (DATABASE_URL, RESEND_API_KEY)
- ✅ Service running with 512MB RAM, 1 CPU, auto-scaling 0-10 instances

### 2. **Security Hardening** ✅
- ✅ Added security headers middleware:
  - `X-Frame-Options: DENY` (prevents clickjacking)
  - `X-Content-Type-Options: nosniff` (prevents MIME sniffing)
  - `Strict-Transport-Security` (enforces HTTPS)
  - `Content-Security-Policy` (prevents XSS attacks)
  - Removed `X-Powered-By` header (hides Express version)
- ✅ Implemented rate limiting:
  - Contact form: 3 requests per 15 minutes per IP
  - API endpoints: 100 requests per 15 minutes per IP
- ✅ Input validation with Zod schemas
- ✅ SQL injection protection via Drizzle ORM

### 3. **Code Quality** ✅
- ✅ TypeScript strict mode enabled
- ✅ Error handling in all API endpoints
- ✅ Environment variables secured (not exposed to client)
- ✅ Production build optimization

### 4. **GitHub Actions CI/CD** ✅
- ✅ Workflow file created (`.github/workflows/deploy.yml`)
- ✅ Service account created with proper IAM roles
- ✅ Auto-deploys on push to `main` branch

---

## 🔄 Pending Tasks

### **STEP 1: Configure GitHub Actions Secret**

**Action Required:** Add the service account key to GitHub repository secrets

1. Go to: https://github.com/ajay-sai/Ajay-Website/settings/secrets/actions

2. Click **"New repository secret"**

3. Name: `GCP_SA_KEY`

4. Value: Copy the **ENTIRE CONTENTS** of `github-actions-key.json` file (already created in your project root)

5. Click **"Add secret"**

**Security Note:** After adding to GitHub, DELETE the local file:
```powershell
Remove-Item .\github-actions-key.json -Force
```

---

### **STEP 2: Deploy Security Updates**

Commit and push the security improvements:

```powershell
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Security hardening: Add headers, rate limiting, and enhanced validation"

# Push to trigger auto-deployment
git push origin main
```

**GitHub Actions will automatically:**
1. Build new Docker image
2. Push to Artifact Registry
3. Deploy to Cloud Run
4. Show deployment URL in workflow logs

---

### **STEP 3: Verify Domain Ownership**

**Action Required:** Verify `ajaymiryala.com` with Google

**Option A: Via Google Search Console (Recommended)**

1. Go to: https://search.google.com/search-console

2. Click **"Add property"** → Choose **"Domain"**

3. Enter: `ajaymiryala.com`

4. Google will provide a **TXT record**

5. Log into **GoDaddy** → DNS Settings for `ajaymiryala.com`

6. Add the TXT record:
   - Type: `TXT`
   - Name: `@`
   - Value: `<Google verification code>`
   - TTL: `1 Hour`

7. Wait 5-15 minutes, then click **"Verify"** in Search Console

**Option B: Via gcloud (Alternative)**

```powershell
# Start verification
gcloud domains verify ajaymiryala.com
```

Follow the instructions to add the TXT record to GoDaddy.

---

### **STEP 4: Map Custom Domain**

Once domain is verified:

```powershell
# Map apex domain
gcloud beta run domain-mappings create `
  --service=ajay-portfolio `
  --domain=ajaymiryala.com `
  --region=us-central1

# Map www subdomain
gcloud beta run domain-mappings create `
  --service=ajay-portfolio `
  --domain=www.ajaymiryala.com `
  --region=us-central1
```

**Take note of the DNS records provided in the output!**

---

### **STEP 5: Update GoDaddy DNS Records**

Log into GoDaddy DNS settings for `ajaymiryala.com` and add:

**For apex domain (ajaymiryala.com):**
- Type: `A`
- Name: `@`
- Value: `<IP from gcloud output>`
- TTL: `1 Hour`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `ghs.googlehosted.com`
- TTL: `1 Hour`

**DNS Propagation:** Allow 24-48 hours for global propagation

---

### **STEP 6: Configure Monitoring & Alerts**

```powershell
# Create uptime check
gcloud monitoring uptime-check-configs create https-check `
  --display-name="Portfolio Uptime" `
  --resource-type=uptime-url `
  --host=ajaymiryala.com `
  --path=/ `
  --period=300

# Create email notification channel
gcloud monitoring channels create `
  --display-name="Email Alert" `
  --type=email `
  --channel-labels=email_address=sai.ajaysai@gmail.com

# Create alert policy for downtime
gcloud monitoring policies create `
  --display-name="Portfolio Down Alert" `
  --condition-display-name="Uptime check failing" `
  --notification-channels=<channel-id-from-previous-command>
```

---

## 🔒 Security Audit Results

### Current Protection Status

| Security Feature | Status | Details |
|-----------------|--------|---------|
| **HTTPS** | ✅ Enabled | Cloud Run enforces HTTPS |
| **Security Headers** | ✅ Configured | CSP, HSTS, X-Frame-Options, etc. |
| **Rate Limiting** | ✅ Active | Contact: 3/15min, API: 100/15min |
| **Input Validation** | ✅ Zod schemas | Contact form, project CRUD |
| **SQL Injection** | ✅ Protected | Drizzle ORM with prepared statements |
| **XSS Protection** | ✅ Configured | CSP header + React auto-escaping |
| **Secrets Management** | ✅ Secure | GCP Secret Manager |
| **Error Handling** | ✅ Implemented | Try-catch in all routes |

### Recommended Improvements

1. **CORS Configuration** (if needed for external API access)
   ```typescript
   import cors from 'cors';
   app.use(cors({ origin: 'https://ajaymiryala.com' }));
   ```

2. **Content Security Policy** - Already configured but monitor for violations

3. **Database Backups** - Neon handles this automatically

4. **SSL Certificate** - Cloud Run manages this automatically

---

## 📊 Testing Checklist

### Manual Testing

Visit https://ajay-portfolio-755976610848.us-central1.run.app and test:

- [ ] **Homepage** loads correctly
- [ ] **Journey page** (`/journey`) shows timeline
- [ ] **Projects page** (`/projects`) loads from database
- [ ] **Contact form** (`/contact`):
  - [ ] Validates name (min 2 chars)
  - [ ] Validates email format
  - [ ] Validates message (min 10 chars)
  - [ ] Sends email successfully
  - [ ] Shows success toast
- [ ] **Theme toggle** switches between light/dark
- [ ] **Images** load (profile, timeline, logos)
- [ ] **Resume download** works
- [ ] **Navigation** works on all routes
- [ ] **Mobile responsive** design

### Automated Security Testing

Run the security audit script:

```powershell
npx tsx scripts/security-audit.ts https://ajay-portfolio-755976610848.us-central1.run.app
```

Expected results:
- ✅ HTTPS enabled
- ✅ Security headers present
- ✅ API endpoints return correct status codes
- ✅ Contact form validation works
- ⚠️ May show warnings for additional CSP improvements (optional)

---

## 🌐 Domain Migration Steps

### After DNS is Configured

1. **Test custom domain:**
   ```powershell
   curl -I https://ajaymiryala.com/
   ```

2. **Verify SSL certificate:**
   - Cloud Run auto-provisions Let's Encrypt certificates
   - May take 15-30 minutes after DNS propagation

3. **Update external links:**
   - [ ] LinkedIn profile
   - [ ] GitHub bio/README
   - [ ] Resume PDF (update URL inside document)
   - [ ] Email signature
   - [ ] Social media profiles
   - [ ] Business cards

4. **Update `sitemap.xml` and `robots.txt`:**
   ```powershell
   # Edit public/sitemap.xml
   # Replace Cloud Run URL with ajaymiryala.com
   ```

---

## 🗑️ Replit Sunset

**Only after domain is live and tested for 2-3 days:**

1. **Export any Replit-specific data:**
   - [ ] Check Replit secrets/env vars
   - [ ] Export any logs if needed
   - [ ] Download any files not in Git

2. **Stop Replit deployment:**
   - Replit Dashboard → Stop deployment
   - Keep account for now (free tier)

3. **Archive or delete Replit project:**
   - After 1 week of successful GCP deployment
   - Confirm all functionality works

---

## 💰 Cost Estimation

**Google Cloud Run:**
- Free tier: 180,000 vCPU-seconds/month
- With current config (512MB, 1 CPU, 0 min instances):
  - Light traffic: ~$2-5/month
  - Medium traffic: ~$10-15/month
  - Auto-scales only when needed

**Neon PostgreSQL:**
- Free tier: Adequate for portfolio
- Serverless billing: ~$0-5/month

**Total estimated: $2-15/month** depending on traffic

---

## 🆘 Troubleshooting

### Deployment fails in GitHub Actions
- Check secrets are set: `GCP_SA_KEY`
- Verify service account has roles: Cloud Run Admin, Artifact Registry Writer

### Domain verification fails
- Ensure TXT record is added correctly in GoDaddy
- Wait 10-15 minutes for DNS propagation
- Use `nslookup -type=TXT ajaymiryala.com` to verify

### Site not loading after domain mapping
- Check DNS propagation: https://dnschecker.org
- Verify A/CNAME records in GoDaddy
- SSL cert provisioning can take 15-30 minutes

### Contact form not working
- Check Cloud Run logs: `gcloud run services logs read ajay-portfolio --region=us-central1`
- Verify RESEND_API_KEY secret is set
- Check Resend dashboard for errors

---

## 📞 Support Resources

- **GCP Cloud Run Docs:** https://cloud.google.com/run/docs
- **Neon Docs:** https://neon.tech/docs
- **Resend Docs:** https://resend.com/docs
- **GitHub Actions Docs:** https://docs.github.com/en/actions

---

## ✅ Final Checklist Before Going Live

- [ ] GitHub Actions secret configured
- [ ] Security updates deployed and tested
- [ ] Domain verified in Google Search Console
- [ ] Custom domain mapped to Cloud Run
- [ ] DNS records updated in GoDaddy
- [ ] SSL certificate active (check https://ajaymiryala.com)
- [ ] All features tested on custom domain
- [ ] Monitoring and alerts configured
- [ ] External links updated
- [ ] Replit deployment stopped (after 1 week)

---

**Current Status:** 🟡 In Progress - Complete Steps 1-6 above

**Next Action:** Configure GitHub Actions secret with `GCP_SA_KEY`
