/**
 * Google Cloud Storage utility for serving images via Cloud CDN
 * 
 * Images are stored in gs://ajay-portfolio-assets/images/
 * and served via Cloud Storage's public URL with CDN caching
 */

const GCS_BUCKET_URL = "https://storage.googleapis.com/ajay-portfolio-assets";

/**
 * Generate a Cloud Storage URL for an image
 * @param path - Image path relative to /images/ (e.g., "timeline/photo.jpg")
 * @returns Full Cloud Storage URL with CDN caching
 */
export function getImageUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Remove 'images/' prefix if already included in path
  const imagePath = cleanPath.startsWith('images/') 
    ? cleanPath 
    : `images/${cleanPath}`;
  
  return `${GCS_BUCKET_URL}/${imagePath}`;
}

/**
 * Generate Cloud Storage URLs for multiple images
 * @param paths - Array of image paths
 * @returns Array of full Cloud Storage URLs
 */
export function getImageUrls(paths: string[]): string[] {
  return paths.map(getImageUrl);
}

/**
 * Get the base URL for the GCS bucket (useful for debugging)
 */
export function getBucketUrl(): string {
  return GCS_BUCKET_URL;
}
