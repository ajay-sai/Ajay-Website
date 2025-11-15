# 🎯 DNS Records to Add to GoDaddy

## ✅ Status: Domain Mapping Complete!

Your domains are already mapped to Cloud Run. Now you just need to add these DNS records to GoDaddy.

---

## 📋 DNS Records for GoDaddy

### Go to: https://dcc.godaddy.com/manage/ajaymiryala.com/dns

---

### For ajaymiryala.com (Main Domain)

**Add these 4 A records:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 216.239.32.21 | 600 (or 1 Hour) |
| A | @ | 216.239.34.21 | 600 (or 1 Hour) |
| A | @ | 216.239.36.21 | 600 (or 1 Hour) |
| A | @ | 216.239.38.21 | 600 (or 1 Hour) |

**Add these 4 AAAA records (IPv6 - Optional but Recommended):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| AAAA | @ | 2001:4860:4802:32::15 | 600 (or 1 Hour) |
| AAAA | @ | 2001:4860:4802:34::15 | 600 (or 1 Hour) |
| AAAA | @ | 2001:4860:4802:36::15 | 600 (or 1 Hour) |
| AAAA | @ | 2001:4860:4802:38::15 | 600 (or 1 Hour) |

---

### For www.ajaymiryala.com (WWW Subdomain)

**Add this 1 CNAME record:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | ghs.googlehosted.com | 600 (or 1 Hour) |

---

## 📝 Step-by-Step Instructions

### 1. Log into GoDaddy
- Go to: https://account.godaddy.com/products
- Find `ajaymiryala.com` and click **DNS**

### 2. Delete Old Records (IMPORTANT!)
**Before adding new records, remove any conflicting ones:**
- Delete any existing A records for `@`
- Delete any existing CNAME records for `www`
- Delete any parking page redirects

### 3. Add A Records
Click **Add** and fill in:
- Type: `A`
- Name: `@`
- Value: `216.239.32.21`
- TTL: `1 Hour` (or 600 seconds)
- Click **Save**

Repeat for the other 3 A records with different IP addresses.

### 4. Add AAAA Records (Optional)
Same process as A records but:
- Type: `AAAA`
- Name: `@`
- Value: `2001:4860:4802:32::15` (etc.)

### 5. Add CNAME Record for www
- Type: `CNAME`
- Name: `www`
- Value: `ghs.googlehosted.com`
- TTL: `1 Hour`
- Click **Save**

### 6. Save Changes
Make sure to save all DNS changes in GoDaddy.

---

## ⏱️ DNS Propagation Timeline

- **Initial propagation:** 5-30 minutes
- **Full global propagation:** Up to 48 hours
- **SSL certificate:** 15-30 minutes after DNS propagates

---

## ✅ How to Verify

### Check DNS Propagation
```powershell
# Check if A records are propagating
nslookup ajaymiryala.com

# Check if CNAME is propagating
nslookup www.ajaymiryala.com
```

### Online Tools
- **DNS Checker:** https://dnschecker.org
  - Enter: `ajaymiryala.com`
  - Type: `A`
  - See if it shows the Google IPs above

### Test Your Site
After DNS propagates (wait 15-30 minutes):
```powershell
# Test main domain
curl -I https://ajaymiryala.com/

# Test www subdomain
curl -I https://www.ajaymiryala.com/
```

---

## 🔒 SSL Certificate

Cloud Run will automatically provision a **Let's Encrypt SSL certificate**:
- Happens after DNS points to Cloud Run
- Takes 15-30 minutes
- Renews automatically every 90 days
- No action needed from you!

---

## 🚨 Troubleshooting

### "Site can't be reached"
- DNS hasn't propagated yet - wait longer
- Check DNS with: `nslookup ajaymiryala.com`
- Verify records are correct in GoDaddy

### "Not Secure" warning
- SSL certificate is still provisioning
- Wait 15-30 minutes after DNS propagates
- Check certificate status in Cloud Console

### "This site can't provide a secure connection"
- Clear browser cache
- Try incognito/private mode
- Certificate might still be provisioning

---

## 📊 Current Status

✅ Domain verified in Search Console
✅ Domain mapped to Cloud Run service
✅ DNS records identified
🔄 Waiting for you to add DNS records to GoDaddy
⏳ SSL certificate will provision after DNS update

---

## 🎯 Next Actions

1. **Right Now:** Add the DNS records above to GoDaddy (takes 5-10 minutes)
2. **Wait 30 mins:** Check if `https://ajaymiryala.com` loads
3. **After working:** Test all features on your custom domain
4. **Then:** Update external links, set up monitoring, sunset Replit

---

## 📞 Need Help?

If you run into issues:
1. Check GoDaddy DNS settings match exactly
2. Use https://dnschecker.org to verify propagation
3. Check Cloud Run logs: `gcloud run services logs read ajay-portfolio --region=us-central1`
4. View domain mapping status: `gcloud beta run domain-mappings describe --domain=ajaymiryala.com --region=us-central1`
