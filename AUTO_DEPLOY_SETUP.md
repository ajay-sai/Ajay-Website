# 🔄 Auto-Deploy Setup Guide

Since the repository needs to be connected to Google Cloud Build for security reasons, you need to enable the trigger manually once.

## 1. Connect GitHub Repository

1. Go to the **Cloud Build Triggers** page:
   [https://console.cloud.google.com/cloud-build/triggers?project=gen-lang-client-0281776478](https://console.cloud.google.com/cloud-build/triggers?project=gen-lang-client-0281776478)

2. Click **"Connect Repository"** (or "Create Trigger" if prompted).

3. Select **GitHub** (Cloud Build GitHub App).

4. Authenticate with GitHub and select your repository: `ajay-sai/Ajay-Website`.

5. Click **Connect**.

## 2. Create the Trigger

1. Click **"Create Trigger"**.

2. Fill in the details:
   - **Name**: `ajay-portfolio-deploy`
   - **Region**: `us-central1` (Important!)
   - **Event**: Push to a branch
   - **Source**: 
     - Repository: `ajay-sai/Ajay-Website` (select the one you just connected)
     - Branch: `^main$`
   - **Configuration**: Cloud Build configuration file (yaml or json)
   - **Location**: `cloudbuild.yaml` (default)

3. Click **Create**.

## 3. Test It

1. Make a small change to `README.md` or any file.
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "test: Verify auto-deploy"
   git push origin main
   ```
3. Watch the build start automatically in the Cloud Build console!

---

## ✅ Current Status

- **Code**: Fixed and pushed to GitHub (Hero photo issue resolved).
- **Manual Deployment**: Verified working.
- **Auto-Deploy**: Ready to be enabled (follow steps above).
