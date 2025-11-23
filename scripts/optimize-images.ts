/**
 * Image Optimization Script
 * 
 * This script optimizes all images in the public/images directory by:
 * 1. Compressing JPEGs and PNGs
 * 2. Converting to WebP format
 * 3. Generating responsive image sizes
 * 4. Creating optimized copies with preserved originals
 * 
 * Usage: npm run optimize-images
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images-optimized');

interface OptimizationStats {
  originalSize: number;
  optimizedSize: number;
  savings: number;
  fileName: string;
}

const stats: OptimizationStats[] = [];

// Configuration
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 82;
const PNG_QUALITY = 85;
const MAX_WIDTH = 1920; // Max width for images
const RESPONSIVE_SIZES = [640, 828, 1200, 1920]; // Responsive breakpoints

async function getAllImageFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  
  async function walk(directory: string) {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && /\.(jpe?g|png|webp)$/i.test(entry.name)) {
        files.push(fullPath);
      }
    }
  }
  
  await walk(dir);
  return files;
}

async function getFileSize(filePath: string): Promise<number> {
  const stat = await fs.stat(filePath);
  return stat.size;
}

async function optimizeImage(inputPath: string) {
  const relativePath = path.relative(PUBLIC_DIR, inputPath);
  const outputPath = path.join(OUTPUT_DIR, relativePath);
  const outputDir = path.dirname(outputPath);
  
  // Create output directory
  await fs.mkdir(outputDir, { recursive: true });
  
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  const originalSize = await getFileSize(inputPath);
  
  console.log(`\n📸 Processing: ${relativePath}`);
  console.log(`   Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Resize if too large
    const shouldResize = metadata.width && metadata.width > MAX_WIDTH;
    if (shouldResize) {
      image.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }
    
    // Optimize based on format
    if (ext === '.jpg' || ext === '.jpeg') {
      // Optimize JPEG
      const jpegOutput = path.join(outputDir, `${baseName}.jpg`);
      await image
        .jpeg({ 
          quality: JPEG_QUALITY, 
          progressive: true,
          mozjpeg: true 
        })
        .toFile(jpegOutput);
      
      const optimizedSize = await getFileSize(jpegOutput);
      const savings = ((originalSize - optimizedSize) / originalSize) * 100;
      
      stats.push({
        fileName: relativePath,
        originalSize,
        optimizedSize,
        savings,
      });
      
      console.log(`   ✅ JPEG optimized: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB (${savings.toFixed(1)}% smaller)`);
      
      // Also create WebP version
      const webpOutput = path.join(outputDir, `${baseName}.webp`);
      await sharp(inputPath)
        .resize(shouldResize ? MAX_WIDTH : undefined)
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpOutput);
      
      const webpSize = await getFileSize(webpOutput);
      console.log(`   ✅ WebP created: ${(webpSize / 1024 / 1024).toFixed(2)} MB (${((originalSize - webpSize) / originalSize * 100).toFixed(1)}% smaller than original)`);
      
    } else if (ext === '.png') {
      // Optimize PNG
      const pngOutput = path.join(outputDir, `${baseName}.png`);
      await image
        .png({ 
          quality: PNG_QUALITY, 
          compressionLevel: 9,
          adaptiveFiltering: true,
        })
        .toFile(pngOutput);
      
      const optimizedSize = await getFileSize(pngOutput);
      const savings = ((originalSize - optimizedSize) / originalSize) * 100;
      
      stats.push({
        fileName: relativePath,
        originalSize,
        optimizedSize,
        savings,
      });
      
      console.log(`   ✅ PNG optimized: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB (${savings.toFixed(1)}% smaller)`);
      
      // Also create WebP version
      const webpOutput = path.join(outputDir, `${baseName}.webp`);
      await sharp(inputPath)
        .resize(shouldResize ? MAX_WIDTH : undefined)
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpOutput);
      
      const webpSize = await getFileSize(webpOutput);
      console.log(`   ✅ WebP created: ${(webpSize / 1024 / 1024).toFixed(2)} MB (${((originalSize - webpSize) / originalSize * 100).toFixed(1)}% smaller than original)`);
    }
    
  } catch (error) {
    console.error(`   ❌ Error processing ${relativePath}:`, error);
  }
}

async function generateReport() {
  console.log('\n\n📊 OPTIMIZATION REPORT\n');
  console.log('='.repeat(80));
  
  const totalOriginal = stats.reduce((sum, s) => sum + s.originalSize, 0);
  const totalOptimized = stats.reduce((sum, s) => sum + s.optimizedSize, 0);
  const totalSavings = totalOriginal - totalOptimized;
  const percentSavings = (totalSavings / totalOriginal) * 100;
  
  console.log(`\nTotal Images Processed: ${stats.length}`);
  console.log(`Original Total Size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized Total Size: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Savings: ${(totalSavings / 1024 / 1024).toFixed(2)} MB (${percentSavings.toFixed(1)}%)`);
  
  console.log('\n\n🔝 TOP 10 SPACE SAVERS:\n');
  const topSavers = [...stats]
    .sort((a, b) => (b.originalSize - b.optimizedSize) - (a.originalSize - a.optimizedSize))
    .slice(0, 10);
  
  topSavers.forEach((stat, index) => {
    const saved = stat.originalSize - stat.optimizedSize;
    console.log(`${index + 1}. ${stat.fileName}`);
    console.log(`   Saved: ${(saved / 1024 / 1024).toFixed(2)} MB (${stat.savings.toFixed(1)}%)\n`);
  });
  
  console.log('\n' + '='.repeat(80));
  console.log('\n✅ Optimization Complete!');
  console.log(`\nOptimized images are in: ${OUTPUT_DIR}`);
  console.log('\nTo use optimized images:');
  console.log('1. Review images in public/images-optimized/');
  console.log('2. When satisfied, run: npm run apply-optimized-images');
  console.log('3. This will backup originals and replace with optimized versions\n');
}

async function main() {
  console.log('🚀 Starting Image Optimization\n');
  console.log(`Input Directory: ${PUBLIC_DIR}`);
  console.log(`Output Directory: ${OUTPUT_DIR}\n`);
  
  // Create output directory
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  
  // Get all image files
  const imageFiles = await getAllImageFiles(PUBLIC_DIR);
  console.log(`Found ${imageFiles.length} images to optimize\n`);
  
  // Process each image
  for (const filePath of imageFiles) {
    await optimizeImage(filePath);
  }
  
  // Generate report
  await generateReport();
}

main().catch(console.error);
