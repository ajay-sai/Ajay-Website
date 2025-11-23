# Update GitHub Secret: GCP_SA_KEY

## ✅ What's Been Done

1. **IAM Roles Verified** - The `github-actions-v2` service account now has all required permissions:
   - ✅ `roles/run.admin` - Deploy to Cloud Run
   - ✅ `roles/artifactregistry.writer` - Push Docker images
   - ✅ `roles/secretmanager.secretAccessor` - Read secrets (just added)

2. **Service Account Key Created** - A fresh JSON key has been generated:
   - File: `github-actions-v2-key.json` (in your project root)
   - Key ID: `7d5b49ced30477a4fec4f5cce9697cc233303358`

## 🔧 What You Need to Do Now

### Step 1: Copy the Service Account Key

The key JSON is already available in your terminal output above. Here's how to copy it:

```powershell
# Copy to clipboard (Windows)
Get-Content github-actions-v2-key.json | Set-Clipboard
```

Or manually open `github-actions-v2-key.json` and copy **all** the contents.

### Step 2: Update GitHub Secret

1. Go to your repository on GitHub:
   ```
   https://github.com/ajay-sai/Ajay-Website/settings/secrets/actions
   ```

2. Find the `GCP_SA_KEY` secret:
   - If it exists, click **Update**
   - If it doesn't exist, click **New repository secret** with name: `GCP_SA_KEY`

3. Paste the **entire JSON** from `github-actions-v2-key.json` as the value

4. Click **Add secret** or **Update secret**

### Step 3: Test the Workflow

1. Go to the Actions tab:
   ```
   https://github.com/ajay-sai/Ajay-Website/actions
   ```

2. Select the **"Deploy to Google Cloud Run"** workflow

3. Click **"Run workflow"** → **"Run workflow"**

4. Watch the logs - you should now see:
   - ✅ `Authenticate to Google Cloud` - SUCCESS
   - ✅ `Set up Cloud SDK` - SUCCESS (no more `invalid_grant` error)
   - ✅ `Build Docker image` - SUCCESS
   - ✅ `Push Docker image` - SUCCESS
   - ✅ `Deploy to Cloud Run` - SUCCESS

### Step 4: Verify Deployment

After the workflow succeeds:

1. Check your Cloud Run service:
   ```
   https://console.cloud.google.com/run/detail/us-central1/ajay-portfolio/revisions?project=gen-lang-client-0281776478
   ```

2. You should see a new revision deployed with the latest code

3. Visit your site and verify images load from Cloud Storage:
   - Open DevTools → Network tab
   - Look for images loading from: `https://storage.googleapis.com/ajay-portfolio-assets/`

## 🧹 Cleanup (Important!)

After you've successfully updated the GitHub secret and tested the workflow:

```powershell
# Delete the local key file for security
Remove-Item github-actions-v2-key.json
```

**Never commit this file to git!**

## 🔍 Troubleshooting

### If you still see `invalid_grant` error:
- Double-check you copied the **entire** JSON content (including the outer `{ }`)
- Make sure there are no extra spaces or line breaks added when pasting

### If you see permission errors:
The service account now has all required roles. If you see specific permission errors, let me know which resource it's trying to access.

### If the build fails:
Check the specific step that failed and share the error message.

## 📋 Summary

**Problem**: GitHub Actions was trying to use a deleted service account (`github-actions@...`)

**Solution**: 
1. ✅ Created new key for existing `github-actions-v2` service account
2. ✅ Granted required IAM roles
3. 🔄 You update `GCP_SA_KEY` secret in GitHub
4. 🔄 You test the workflow

Once you complete steps 3 and 4, your auto-deploy pipeline will be fully working!
