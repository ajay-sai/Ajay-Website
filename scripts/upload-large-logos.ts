// Upload large logo files to Object Storage
import { objectStorageClient } from "../server/objectStorage";
import path from "path";

const BUCKET_NAME = "replit-objstore-115625ec-c30f-4fba-b127-b0b97d692d24";
const UPLOAD_DIR = "public/logos";

const images = [
  { file: "image_1756792379931.png", contentType: "image/png", description: "Stoned Santa logo" }
];

async function uploadImages() {
  console.log("Uploading large logo files to Object Storage...\n");
  
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
      
      console.log(`✅ Uploaded: ${img.file} (${img.description})`);
    } catch (error) {
      console.error(`❌ Failed to upload ${img.file}:`, error);
    }
  }
  
  console.log("\n✨ Large logos uploaded successfully!");
  console.log("\nNew URL:");
  console.log("  /public-objects/logos/image_1756792379931.png");
}

uploadImages().catch(console.error);
