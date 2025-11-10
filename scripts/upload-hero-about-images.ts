// Upload hero and about section profile photos to Object Storage
import { objectStorageClient } from "../server/objectStorage";
import path from "path";

const BUCKET_NAME = "replit-objstore-115625ec-c30f-4fba-b127-b0b97d692d24";
const UPLOAD_DIR = "public/profile";

const images = [
  { file: "20240420_202714_1762722420285.jpg", contentType: "image/jpeg" },
  { file: "image_1756764365127.png", contentType: "image/png" }
];

async function uploadImages() {
  console.log("Uploading hero and about section photos to Object Storage...\n");
  
  const bucket = objectStorageClient.bucket(BUCKET_NAME);
  
  for (const img of images) {
    const localPath = path.join(process.cwd(), "attached_assets", img.file);
    const remotePath = `${UPLOAD_DIR}/${img.file}`;
    
    try {
      await bucket.upload(localPath, {
        destination: remotePath,
        metadata: {
          contentType: img.contentType,
          cacheControl: "public, max-age=31536000"
        }
      });
      
      console.log(`✅ Uploaded: ${img.file}`);
    } catch (error) {
      console.error(`❌ Failed to upload ${img.file}:`, error);
    }
  }
  
  console.log("\n✨ Profile photos uploaded successfully!");
  console.log("\nNew URLs:");
  console.log("  Hero: /public-objects/profile/image_1756764365127.png");
  console.log("  About: /public-objects/profile/20240420_202714_1762722420285.jpg");
}

uploadImages().catch(console.error);
