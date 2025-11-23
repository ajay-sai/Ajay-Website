# Auto-Deploy Test Script
Write-Host "🚀 Testing Auto-Deploy Configuration" -ForegroundColor Green

# Check if git is configured
Write-Host "`n📁 Checking Git Configuration..." -ForegroundColor Yellow
$gitRemote = git remote get-url origin 2>$null
if ($gitRemote) {
    Write-Host "✅ Git remote: $gitRemote" -ForegroundColor Green
} else {
    Write-Host "❌ Git remote not configured" -ForegroundColor Red
    exit 1
}

# Check GitHub Actions workflow
Write-Host "`n🔧 Checking GitHub Actions Workflow..." -ForegroundColor Yellow
if (Test-Path ".github\workflows\deploy.yml") {
    Write-Host "✅ GitHub Actions workflow found" -ForegroundColor Green
    $workflow = Get-Content ".github\workflows\deploy.yml" | Select-String "GCP_SA_KEY"
    if ($workflow) {
        Write-Host "✅ Workflow configured to use GCP_SA_KEY secret" -ForegroundColor Green
    } else {
        Write-Host "❌ GCP_SA_KEY not found in workflow" -ForegroundColor Red
    }
} else {
    Write-Host "❌ GitHub Actions workflow not found" -ForegroundColor Red
}

# Check Cloud Build configuration
Write-Host "`n☁️ Checking Cloud Build Configuration..." -ForegroundColor Yellow
if (Test-Path "cloudbuild.yaml") {
    Write-Host "✅ Cloud Build configuration found" -ForegroundColor Green
} else {
    Write-Host "❌ Cloud Build configuration not found" -ForegroundColor Red
}

# Check if service account key exists
Write-Host "`n🔑 Checking Service Account Keys..." -ForegroundColor Yellow
if (Test-Path "new-github-actions-key.json") {
    Write-Host "✅ Service account key found (new-github-actions-key.json)" -ForegroundColor Green
    Write-Host "⚠️ Remember to add this to GitHub Secrets as GCP_SA_KEY" -ForegroundColor Yellow
} else {
    Write-Host "❌ Service account key not found" -ForegroundColor Red
}

# Test deployment endpoint
Write-Host "`n🌐 Testing Current Deployment..." -ForegroundColor Yellow
$deployUrl = "https://ajay-portfolio-755976610848.us-central1.run.app"
try {
    $response = Invoke-RestMethod -Uri $deployUrl -Method Head -TimeoutSec 10
    Write-Host "✅ Current deployment is live at: $deployUrl" -ForegroundColor Green
} catch {
    Write-Host "❌ Current deployment not accessible: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`n📝 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Add GCP_SA_KEY to GitHub Secrets if not done already" -ForegroundColor White
Write-Host "2. Make a test commit and push to main branch" -ForegroundColor White
Write-Host "3. Check GitHub Actions tab for deployment status" -ForegroundColor White
Write-Host "4. Verify deployment at the URL above" -ForegroundColor White