// Upload image to Google Cloud Storage
// This script uploads Ajay-for-website-main.jpeg to GCS bucket

import { Storage } from "@google-cloud/storage";
import fs from "fs";
import path from "path";

const BUCKET_NAME = "ajay-portfolio-assets";
const IMAGE_PATH = "images/profile/Ajay-for-website-main.jpeg";
const LOCAL_FILE = path.join(process.cwd(), "public/images/profile/Ajay-for-website-main.jpeg");

async function uploadToGCS() {
  try {
    // Try to get credentials from environment or application default credentials
    const storage = new Storage({
      projectId: process.env.GCP_PROJECT_ID || "ajay-portfolio",
    });

    const bucket = storage.bucket(BUCKET_NAME);

    // Check if file exists
    if (!fs.existsSync(LOCAL_FILE)) {
      console.error(`❌ File not found: ${LOCAL_FILE}`);
      process.exit(1);
    }

    console.log(`📤 Uploading ${LOCAL_FILE} to gs://${BUCKET_NAME}/${IMAGE_PATH}...`);

    const file = bucket.file(IMAGE_PATH);
    
    await bucket.upload(LOCAL_FILE, {
      destination: IMAGE_PATH,
      metadata: {
        contentType: "image/jpeg",
        cacheControl: "public, max-age=31536000, immutable", // 1 year cache
      },
    });

    // Make file public
    await file.makePublic();

    const publicUrl = `https://storage.googleapis.com/${BUCKET_NAME}/${IMAGE_PATH}`;
    
    console.log(`✅ Successfully uploaded to GCS!`);
    console.log(`🔗 Public URL: ${publicUrl}`);
    console.log(`\nVerify the image loads at: ${publicUrl}`);

  } catch (error) {
    console.error("❌ Upload failed:", error);
    process.exit(1);
  }
}

uploadToGCS();
