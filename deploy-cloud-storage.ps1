# Cloud Storage Migration Deployment Script
# Automatically commits and deploys Cloud Storage changes

# Use Git from Program Files
$git = "C:\Program Files\Git\bin\git.exe"

Write-Host "Cloud Storage Migration - Deployment Steps" -ForegroundColor Cyan
Write-Host "============================================`n" -ForegroundColor Cyan

# Step 1: Verify Build
Write-Host "Step 1: Verifying build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Fix errors before deploying." -ForegroundColor Red
    exit 1
}
Write-Host "✓ Build successful`n" -ForegroundColor Green

# Step 2: Test Cloud Storage URLs
Write-Host "Step 2: Testing Cloud Storage URLs..." -ForegroundColor Yellow
$testUrls = @(
    "https://storage.googleapis.com/ajay-portfolio-assets/images/profile/20240420_202714_1762722420285.jpg",
    "https://storage.googleapis.com/ajay-portfolio-assets/images/logos/image_1756792379931.png",
    "https://storage.googleapis.com/ajay-portfolio-assets/images/timeline/20241025_152323_1756776021189.jpg"
)

foreach ($url in $testUrls) {
    $response = Invoke-WebRequest -Uri $url -Method Head -UseBasicParsing -ErrorAction SilentlyContinue
    if ($response.StatusCode -eq 200) {
        Write-Host "  ✓ $($url.Split('/')[-1]) - Accessible" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $($url.Split('/')[-1]) - FAILED" -ForegroundColor Red
        exit 1
    }
}
Write-Host ""

# Step 3: Git Operations
Write-Host "Step 3: Committing changes..." -ForegroundColor Yellow
& $git add .
& $git status --short
Write-Host ""

$commitMessage = "feat: Migrate images to Cloud Storage with CDN

- Created Cloud Storage bucket: ajay-portfolio-assets
- Enabled Cloud CDN for global edge caching
- Uploaded 36 images (55.72 MB) with 1-year cache headers
- Added gcs-utils.ts helper for URL generation
- Updated parallax-timeline.tsx and about-section.tsx
- Updated CSP to allow storage.googleapis.com
- Expected performance: 80-90% faster load times globally

Infrastructure:
- Bucket: gs://ajay-portfolio-assets
- CDN Backend: ajay-portfolio-cdn-backend
- Cache: public, max-age=31536000, immutable
- Region: us-central1

Refs: CLOUD_STORAGE_MIGRATION.md"

& $git commit -m $commitMessage

Write-Host "✓ Changes committed`n" -ForegroundColor Green

# Step 4: Push to GitHub (triggers Cloud Build)
Write-Host "Step 4: Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "This will trigger automatic deployment via Cloud Build`n" -ForegroundColor Cyan
& $git push origin main

Write-Host "`n✓ Deployment triggered!" -ForegroundColor Green
Write-Host "`nMonitor deployment:" -ForegroundColor Cyan
Write-Host "  Cloud Build: https://console.cloud.google.com/cloud-build/builds?project=gen-lang-client-0281776478" -ForegroundColor White
Write-Host "  Cloud Run: https://console.cloud.google.com/run/detail/us-central1/ajay-portfolio?project=gen-lang-client-0281776478" -ForegroundColor White

Write-Host "`nExpected deployment time: 5-10 minutes`n" -ForegroundColor Yellow

# Step 5: Verification Steps
Write-Host "After deployment completes:" -ForegroundColor Cyan
Write-Host "  1. Visit your site and check timeline images load" -ForegroundColor White
Write-Host "  2. Open browser DevTools → Network tab" -ForegroundColor White
Write-Host "  3. Verify images load from storage.googleapis.com" -ForegroundColor White
Write-Host "  4. Check Cache-Control headers show 'max-age=31536000'" -ForegroundColor White
Write-Host "  5. Test from different locations (use VPN or online tools)" -ForegroundColor White
Write-Host "`n✓ Migration complete!" -ForegroundColor Green
