# Domain Verification & Mapping Quick Guide

## Current Status
✅ GitHub Actions configured
✅ Security updates deployed
✅ Site running: https://ajay-portfolio-755976610848.us-central1.run.app
🔄 Domain verification in progress

## Step-by-Step Domain Setup

### Step 1: Complete Domain Verification

**The browser just opened to Google Search Console. Follow these steps:**

1. If you already verified `ajaymiryala.com` in Search Console, you should see it listed
2. If not, you'll need to verify it by adding a TXT record to GoDaddy:
   - Copy the TXT record value shown in Search Console
   - Go to GoDaddy → DNS Management for `ajaymiryala.com`
   - Add a TXT record:
     - Type: `TXT`
     - Name: `@`
     - Value: `<paste the verification code>`
     - TTL: `1 Hour`
   - Wait 5-15 minutes
   - Click "Verify" in Search Console

3. After verification is successful, the domain will be available for GCP

---

### Step 2: Map Domain to Cloud Run

Once verification completes, run these commands:

```powershell
# Map apex domain (ajaymiryala.com)
gcloud beta run domain-mappings create `
  --service=ajay-portfolio `
  --domain=ajaymiryala.com `
  --region=us-central1

# Map www subdomain (www.ajaymiryala.com)  
gcloud beta run domain-mappings create `
  --service=ajay-portfolio `
  --domain=www.ajaymiryala.com `
  --region=us-central1
```

**IMPORTANT:** Copy the DNS records from the command output!

---

### Step 3: Update GoDaddy DNS

After the domain mapping commands, you'll get DNS records to add. Go to GoDaddy DNS settings:

**For ajaymiryala.com (apex domain):**
- Type: `A`
- Name: `@`
- Value: `<IP address from gcloud output>`
- TTL: `1 Hour`

**Additional A records (if provided):**
- Add all A/AAAA records shown in the output

**For www.ajaymiryala.com:**
- Type: `CNAME`
- Name: `www`
- Value: `ghs.googlehosted.com`
- TTL: `1 Hour`

---

### Step 4: Wait for DNS Propagation

- Initial propagation: 5-30 minutes
- Full global propagation: Up to 48 hours
- SSL certificate provisioning: 15-30 minutes after DNS propagates

**Check DNS propagation:**
```powershell
# Check if DNS is propagating
nslookup ajaymiryala.com

# Or use online tool
# Visit: https://dnschecker.org
```

---

### Step 5: Test Your Domain

Once DNS propagates, test:

```powershell
# Check if domain resolves
curl -I https://ajaymiryala.com/

# Test www subdomain
curl -I https://www.ajaymiryala.com/
```

---

## Troubleshooting

### "Domain not verified" error
- Make sure you completed verification in Search Console
- Wait a few minutes after verification
- Try running `gcloud domains list-user-verified` to confirm

### "DNS records not showing"
- DNS can take up to 48 hours to propagate globally
- Check using: https://dnschecker.org
- Verify records are correct in GoDaddy

### "SSL certificate not provisioning"
- Cloud Run automatically provisions Let's Encrypt certificates
- Can take 15-30 minutes after DNS points to Cloud Run
- Check Cloud Run console for certificate status

### "Domain mapping failed"
- Ensure domain is verified: `gcloud domains list-user-verified`
- Check if you have domain mapping quota
- Verify service name is correct: `ajay-portfolio`

---

## Next Actions

**Right now:**
1. Complete the verification in the browser that just opened
2. Come back here and run the domain mapping commands (Step 2)
3. Add the DNS records to GoDaddy (Step 3)

**After DNS propagates (1-48 hours):**
1. Test your site at https://ajaymiryala.com
2. Set up monitoring and alerts
3. Update all external links to use your custom domain

---

## Quick Reference Commands

```powershell
# Check verified domains
gcloud domains list-user-verified

# List domain mappings
gcloud beta run domain-mappings list --region=us-central1

# Check domain mapping status
gcloud beta run domain-mappings describe ajaymiryala.com --region=us-central1

# View Cloud Run service details
gcloud run services describe ajay-portfolio --region=us-central1
```
