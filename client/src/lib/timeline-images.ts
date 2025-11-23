import type { TimelineImageSource } from "@/data/timeline-image-map";
import { TIMELINE_IMAGE_MAP } from "@/data/timeline-image-map";

const FALLBACK_ASPECT_RATIO = 3 / 2;

const buildFallbackSource = (path: string): TimelineImageSource => {
  const normalizedPath = path.startsWith("/") ? path : `/images/${path}`;

  return {
    defaultSrc: normalizedPath,
    srcSet: `${normalizedPath} 1x`,
    placeholder: "",
    width: 960,
    height: 640,
    aspectRatio: FALLBACK_ASPECT_RATIO,
  };
};

export const getTimelineImageSource = (
  path: string,
): TimelineImageSource => {
  return TIMELINE_IMAGE_MAP[path] ?? buildFallbackSource(path);
};

export const TIMELINE_IMAGE_SIZES =
  "(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 480px";

export type { TimelineImageSource };
