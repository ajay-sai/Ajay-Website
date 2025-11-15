#!/usr/bin/env pwsh
# Domain Verification and Mapping Script

Write-Host "🌐 Domain Verification & Mapping Tool" -ForegroundColor Cyan
Write-Host "=" * 60
Write-Host ""

# Step 1: Check if domain is verified
Write-Host "Step 1: Checking domain verification status..." -ForegroundColor Yellow
$verifiedDomains = gcloud domains list-user-verified --format="value(id)"

if ($verifiedDomains -like "*ajaymiryala.com*") {
    Write-Host "✅ Domain ajaymiryala.com is verified!" -ForegroundColor Green
    $isVerified = $true
} else {
    Write-Host "❌ Domain ajaymiryala.com is NOT verified yet" -ForegroundColor Red
    Write-Host ""
    Write-Host "📋 To verify your domain:" -ForegroundColor Yellow
    Write-Host "1. The browser should have opened Google Search Console"
    Write-Host "2. Follow the instructions to add a TXT record to GoDaddy"
    Write-Host "3. Wait 5-15 minutes for DNS propagation"
    Write-Host "4. Click 'Verify' in Search Console"
    Write-Host ""
    Write-Host "Currently verified domains:" -ForegroundColor Cyan
    Write-Host $verifiedDomains
    Write-Host ""
    
    $continue = Read-Host "Have you completed verification? (y/n)"
    if ($continue -ne "y") {
        Write-Host ""
        Write-Host "⏸️  Please complete verification first, then run this script again." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Quick steps:"
        Write-Host "1. Go to: https://search.google.com/search-console"
        Write-Host "2. Verify ajaymiryala.com using TXT record method"
        Write-Host "3. Run this script again after verification"
        exit 0
    }
    
    # Recheck
    Write-Host "Rechecking verification status..." -ForegroundColor Yellow
    $verifiedDomains = gcloud domains list-user-verified --format="value(id)"
    if ($verifiedDomains -like "*ajaymiryala.com*") {
        Write-Host "✅ Verification confirmed!" -ForegroundColor Green
        $isVerified = $true
    } else {
        Write-Host "❌ Domain still not verified. Please wait a few more minutes." -ForegroundColor Red
        Write-Host "Run this script again after verification completes." -ForegroundColor Yellow
        exit 1
    }
}

Write-Host ""
Write-Host "=" * 60
Write-Host ""

# Step 2: Map domains to Cloud Run
Write-Host "Step 2: Mapping domains to Cloud Run..." -ForegroundColor Yellow
Write-Host ""

# Map apex domain
Write-Host "📍 Mapping ajaymiryala.com..." -ForegroundColor Cyan
$apexResult = gcloud beta run domain-mappings create `
    --service=ajay-portfolio `
    --domain=ajaymiryala.com `
    --region=us-central1 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully mapped ajaymiryala.com" -ForegroundColor Green
} else {
    Write-Host "⚠️  Error mapping apex domain:" -ForegroundColor Red
    Write-Host $apexResult
    Write-Host ""
    Write-Host "This might mean the domain is already mapped." -ForegroundColor Yellow
}

Write-Host ""

# Map www subdomain
Write-Host "📍 Mapping www.ajaymiryala.com..." -ForegroundColor Cyan
$wwwResult = gcloud beta run domain-mappings create `
    --service=ajay-portfolio `
    --domain=www.ajaymiryala.com `
    --region=us-central1 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully mapped www.ajaymiryala.com" -ForegroundColor Green
} else {
    Write-Host "⚠️  Error mapping www subdomain:" -ForegroundColor Red
    Write-Host $wwwResult
    Write-Host ""
    Write-Host "This might mean the domain is already mapped." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=" * 60
Write-Host ""

# Step 3: Get DNS records
Write-Host "Step 3: Getting DNS records to add to GoDaddy..." -ForegroundColor Yellow
Write-Host ""

Write-Host "📋 DNS RECORDS FOR GODADDY:" -ForegroundColor Cyan
Write-Host "=" * 60
Write-Host ""

# Get domain mapping details
$mappingDetails = gcloud beta run domain-mappings describe ajaymiryala.com `
    --region=us-central1 `
    --format="yaml" 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host $mappingDetails
    Write-Host ""
    Write-Host "=" * 60
    Write-Host ""
    Write-Host "📝 ACTION REQUIRED: Add these DNS records to GoDaddy" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Go to: https://dcc.godaddy.com/manage/ajaymiryala.com/dns"
    Write-Host ""
    Write-Host "Look for the 'resourceRecords' section above and add:" -ForegroundColor Cyan
    Write-Host "1. A records (Type: A, Name: @, Value: <IP addresses shown>)"
    Write-Host "2. AAAA records if shown (Type: AAAA, Name: @, Value: <IPv6 addresses>)"
    Write-Host ""
    Write-Host "For www subdomain, add:" -ForegroundColor Cyan
    Write-Host "- Type: CNAME"
    Write-Host "- Name: www"
    Write-Host "- Value: ghs.googlehosted.com"
    Write-Host "- TTL: 1 Hour"
} else {
    Write-Host "⚠️  Could not retrieve mapping details" -ForegroundColor Red
    Write-Host "You can manually check with:" -ForegroundColor Yellow
    Write-Host "gcloud beta run domain-mappings describe ajaymiryala.com --region=us-central1"
}

Write-Host ""
Write-Host "=" * 60
Write-Host ""
Write-Host "✅ Domain mapping process completed!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Add the DNS records shown above to GoDaddy"
Write-Host "2. Wait 5-30 minutes for DNS propagation (up to 48 hours globally)"
Write-Host "3. Test with: curl -I https://ajaymiryala.com/"
Write-Host "4. SSL certificate will auto-provision within 15-30 minutes"
Write-Host ""
Write-Host "Check DNS propagation: https://dnschecker.org" -ForegroundColor Cyan
Write-Host ""
