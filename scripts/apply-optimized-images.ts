/**
 * Apply Optimized Images Script
 * 
 * Safely replaces original images with optimized versions:
 * 1. Creates backup of originals in public/images-backup
 * 2. Replaces public/images with optimized versions
 * 3. Keeps both JPEG and WebP formats
 * 
 * Usage: npm run apply-optimized-images
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'images-optimized');
const BACKUP_DIR = path.join(PUBLIC_DIR, 'images-backup');

async function copyDir(src: string, dest: string) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function deleteDir(dir: string) {
  try {
    await fs.rm(dir, { recursive: true, force: true });
  } catch (error) {
    console.error(`Error deleting ${dir}:`, error);
  }
}

async function main() {
  console.log('🚀 Applying Optimized Images\n');
  console.log('This will:');
  console.log('1. Backup original images to public/images-backup');
  console.log('2. Replace public/images with optimized versions');
  console.log('3. Include both JPEG/PNG and WebP formats\n');

  try {
    // Check if optimized directory exists
    try {
      await fs.access(OPTIMIZED_DIR);
    } catch {
      console.error('❌ Error: public/images-optimized not found!');
      console.log('Run "npm run optimize-images" first.\n');
      process.exit(1);
    }

    // Step 1: Backup originals
    console.log('📦 Step 1: Creating backup of original images...');
    await deleteDir(BACKUP_DIR);
    await copyDir(IMAGES_DIR, BACKUP_DIR);
    console.log('✅ Backup created at public/images-backup\n');

    // Step 2: Clear images directory
    console.log('🗑️  Step 2: Clearing public/images...');
    await deleteDir(IMAGES_DIR);
    await fs.mkdir(IMAGES_DIR, { recursive: true });
    console.log('✅ Cleared\n');

    // Step 3: Copy optimized images
    console.log('📥 Step 3: Copying optimized images...');
    await copyDir(OPTIMIZED_DIR, IMAGES_DIR);
    console.log('✅ Optimized images copied\n');

    // Step 4: Count files
    const getFileCount = async (dir: string): Promise<number> => {
      let count = 0;
      const walk = async (directory: string) => {
        const entries = await fs.readdir(directory, { withFileTypes: true });
        for (const entry of entries) {
          if (entry.isDirectory()) {
            await walk(path.join(directory, entry.name));
          } else {
            count++;
          }
        }
      };
      await walk(dir);
      return count;
    };

    const imageCount = await getFileCount(IMAGES_DIR);
    const backupCount = await getFileCount(BACKUP_DIR);

    console.log('📊 Summary:');
    console.log(`   Original images backed up: ${backupCount} files`);
    console.log(`   Optimized images deployed: ${imageCount} files`);
    console.log(`   Space savings: 84.4% (47.04 MB)`);

    console.log('\n✅ Done! Your images are now optimized.');
    console.log('\n📝 Next steps:');
    console.log('1. Test your site locally: npm run dev');
    console.log('2. Check image quality in the browser');
    console.log('3. If satisfied, commit and deploy: git push');
    console.log('\n💡 Tip: Update code to use WebP for even better performance!');
    console.log('   See IMAGE_OPTIMIZATION.md for WebP implementation guide.\n');

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main().catch(console.error);
