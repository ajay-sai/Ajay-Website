# Asset Management Policy

## Overview
This project uses a hybrid approach for asset management to optimize deployment size and performance.

## Asset Storage Strategy

### Object Storage (Replit Cloud Storage)
**Use for:** Large images, photos, workplace images, profile pictures (>200KB)

**Why:** 
- Keeps deployment bundle size under Cloud Run's 8 GiB limit
- Images served from Google Cloud Storage with CDN caching
- Faster global delivery with proper cache headers
- Reduces build time and deployment size

**Implementation:**
- Upload images to Object Storage using upload scripts in `scripts/` directory
- Images stored in bucket: `replit-objstore-115625ec-c30f-4fba-b127-b0b97d692d24`
- Served via `/public-objects/` route (configured in `server/routes.ts`)
- Cache headers: `public, max-age=31536000` (1 year)

**Current Object Storage Assets:**
- Timeline workplace photos: `/public-objects/timeline/` (34 images, ~70MB)
- Profile photos: `/public-objects/profile/` (2 images, ~6.4MB)

### @assets Alias (Bundled with Build)
**Use for:** Small logos, icons, SVGs (<200KB)

**Why:**
- Small files don't significantly impact bundle size
- Needed at build time for proper bundling and optimization
- Vite can optimize these assets (compression, hashing)

**Implementation:**
- Import from `@assets/` alias (configured in `vite.config.ts`)
- Files stored in `attached_assets/` directory (excluded from Docker via `.dockerignore`)
- Vite copies to `dist/public/assets/` during build

**Current @assets Usage:**
- Company logos in `parallax-timeline.tsx` (~10 small PNG/SVG files)
- All files < 200KB

## Adding New Assets

### Large Images/Photos (>200KB)
1. Place file in `attached_assets/` directory
2. Create upload script in `scripts/` (or use existing ones)
3. Upload to Object Storage bucket under appropriate directory
4. Use URL string in component: `const image = "/public-objects/directory/filename.jpg";`
5. Never import large images with `import` statement

### Small Logos/Icons (<200KB)
1. Place file in `attached_assets/` directory
2. Import in component: `import logo from "@assets/filename.png";`
3. Use in JSX: `<img src={logo} />`

## Migration History

### November 10, 2024
- Migrated 34 timeline workplace photos to Object Storage (~70MB)
- Migrated 2 profile photos to Object Storage (~6.4MB)
- Total build size reduction: ~76MB
- Deployment now under Cloud Run 8 GiB limit

## Troubleshooting

### "Deployment image size exceeds 8 GiB limit"
- Check for large images imported via `@assets` alias
- Run: `find attached_assets/ -type f -size +1M` to find large files
- Migrate large files to Object Storage

### "Image not loading from Object Storage"
- Verify file uploaded: Check bucket in Replit Object Storage pane
- Verify route configured: Check `server/routes.ts` for `/public-objects/` handler
- Check browser network tab for 404 or 500 errors

### "Build includes large assets in dist/public/assets"
- Search for `@assets` imports: `grep -r "@assets" client/`
- Remove imports for large files, use Object Storage URLs instead
- Keep only small logos as `@assets` imports
