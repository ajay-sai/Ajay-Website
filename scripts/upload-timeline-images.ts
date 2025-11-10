// Script to upload timeline images to Replit Object Storage
// Run with: npx tsx scripts/upload-timeline-images.ts

import { objectStorageClient } from "../server/objectStorage";
import fs from "fs";
import path from "path";

// Extract bucket name from PUBLIC_OBJECT_SEARCH_PATHS
// Format: /bucket-name/public
const searchPaths = process.env.PUBLIC_OBJECT_SEARCH_PATHS || "";
const BUCKET_NAME = searchPaths.split('/')[1]; // Get bucket name from path
const UPLOAD_DIR = "public/timeline"; // Directory in bucket where images will be stored

// List of all timeline images from attached_assets
const TIMELINE_IMAGES = [
  "20250515_110951(0) (1)_1756775594777.jpg",
  "IMG_2329-EDIT_1756777352943.jpg",
  "20241023_132525_1756776021189.jpg",
  "20240427_120651_1756788379977.jpg",
  "IMG_20180811_194748_1756789697281.jpg",
  "IMG-20191110-WA0025_1756789697282.jpg",
  "Screenshot_20180831-101808__01_1756789720602.jpg",
  "20210521_131718_1756788953660.jpg",
  "IMG_20190509_180536_1756789644236.jpg",
  "IMG-20190908-WA0038_1756789644237.jpg",
  "IMG_20161106_212705_1756789364617.jpg",
  "IMG_20161030_232457_1756789364618.jpg",
  "Screenshot_20181124-163448__01_1756789364618.jpg",
  "IMG_20160620_123802_1756789570118.jpg",
  "IMG_2331_1756789866665.JPG",
  "20241025_152323_1756776021189.jpg",
  "20240508_203952_1756776021190.jpg",
  "20231215_095639_1756775804398.jpg",
  "IMG-20220807-WA0018_1756776767995.jpg",
  "20220805_214208_1756776778383.jpg",
  "IMG_1219_1756777552748.jpg",
  "20240424_161717_1756780061878.jpg",
  "Screenshot_20190129-080233_1756780061880.jpg",
  "Generated Image September 01, 2025 - 10_25PM (1)_1756780361828.jpeg",
  "IMG-20191122-WA0013_1756780506778.jpg",
  "IMG-20181105-WA0008_1756780506780.jpg",
  "IMG-20200111-WA0007_1756780521102.jpg",
  "20210521_213843_1756780555219.jpg",
  "IMG_20170820_163622_1756780825081.jpg",
  "IMG-20170814-WA0017_1756780825082.jpg",
  "IMG-20170814-WA0013_1756780825082.jpg",
  "IMG-20170811-WA0004_1756789814799.jpg",
];

async function uploadImages() {
  console.log(`Starting upload of ${TIMELINE_IMAGES.length} timeline images...`);
  console.log(`Target bucket: ${BUCKET_NAME}`);
  console.log(`Target directory: ${UPLOAD_DIR}\n`);

  const bucket = objectStorageClient.bucket(BUCKET_NAME);
  let successCount = 0;
  let failCount = 0;

  for (const imageName of TIMELINE_IMAGES) {
    const localPath = path.join(process.cwd(), "attached_assets", imageName);
    const remotePath = `${UPLOAD_DIR}/${imageName}`;

    try {
      // Check if file exists locally
      if (!fs.existsSync(localPath)) {
        console.log(`❌ File not found: ${imageName}`);
        failCount++;
        continue;
      }

      // Upload to bucket
      await bucket.upload(localPath, {
        destination: remotePath,
        metadata: {
          contentType: getContentType(imageName),
          cacheControl: "public, max-age=31536000", // 1 year cache
        },
      });

      console.log(`✅ Uploaded: ${imageName}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Failed to upload ${imageName}:`, error);
      failCount++;
    }
  }

  console.log(`\n✨ Upload complete!`);
  console.log(`   Success: ${successCount}`);
  console.log(`   Failed: ${failCount}`);
  console.log(`\nImages are now accessible at: /public-objects/timeline/{filename}`);
}

function getContentType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const contentTypes: Record<string, string> = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".webp": "image/webp",
  };
  return contentTypes[ext] || "application/octet-stream";
}

// Run the upload
uploadImages().catch(console.error);
