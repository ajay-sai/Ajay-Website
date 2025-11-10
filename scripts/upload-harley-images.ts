// Upload remaining Harley-Davidson timeline images to Object Storage
import { objectStorageClient } from "../server/objectStorage";
import path from "path";

const BUCKET_NAME = "replit-objstore-115625ec-c30f-4fba-b127-b0b97d692d24";
const UPLOAD_DIR = "public/timeline";

const images = [
  "image_1756765291859.png",
  "image_1756766255322.png"
];

async function uploadImages() {
  console.log("Uploading Harley-Davidson images...\n");
  
  const bucket = objectStorageClient.bucket(BUCKET_NAME);
  
  for (const img of images) {
    const localPath = path.join(process.cwd(), "attached_assets", img);
    const remotePath = `${UPLOAD_DIR}/${img}`;
    
    try {
      await bucket.upload(localPath, {
        destination: remotePath,
        metadata: {
          contentType: "image/png",
          cacheControl: "public, max-age=31536000"
        }
      });
      
      console.log(`✅ Uploaded: ${img}`);
    } catch (error) {
      console.error(`❌ Failed to upload ${img}:`, error);
    }
  }
  
  console.log("\n✨ Harley-Davidson images uploaded successfully!");
}

uploadImages().catch(console.error);
