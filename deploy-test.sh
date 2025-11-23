#!/bin/bash
# Quick deployment test
echo "Testing auto-deployment - $(date)"

# Add a test change
echo "<!-- Auto-deploy test: $(date) -->" >> README.md

# Commit and push
git add .
git commit -m "🧪 Test auto-deploy functionality - $(date +%Y-%m-%d)"
git push origin main

echo "✅ Test change pushed to main branch"
echo "🔍 Check GitHub Actions at: https://github.com/ajay-sai/Ajay-Website/actions"
echo "⏱️ Deployment typically takes 5-10 minutes"
echo "🌐 Verify at: https://ajay-portfolio-755976610848.us-central1.run.app"