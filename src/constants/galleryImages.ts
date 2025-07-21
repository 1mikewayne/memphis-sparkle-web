
import cleanHouseImage from "@/assets/clean-house.jpg";
import serviceActionImage from "@/assets/service-action.jpg";
import heroImage from "@/assets/hero-before-after.jpg";

/**
 * Gallery image configuration with proper TypeScript definitions
 * Each image object contains either a single comparison image or before/after pair
 */
export interface GalleryImageItem {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly image?: string; // Single comparison image URL
  readonly before?: string; // Before image for split layout
  readonly after?: string; // After image for split layout
}

// Image path constants - no magic strings
const UPLOADED_IMAGE_PATHS = {
  DRIVEWAY_TRANSFORMATION: "/lovable-uploads/6d0a98e8-4548-43ed-b9ac-28c13e170f94.png",
} as const;

// Image titles and descriptions - centralized content
const IMAGE_CONTENT = {
  DRIVEWAY: {
    TITLE: "Residential Driveway Transformation",
    DESCRIPTION: "Complete driveway and walkway restoration - Before & After",
  },
  HOUSE_WASHING: {
    TITLE: "House Washing Project", 
    DESCRIPTION: "Vinyl siding and exterior cleaning",
  },
  COMMERCIAL: {
    TITLE: "Commercial Property",
    DESCRIPTION: "Large-scale commercial cleaning project",
  },
} as const;

/**
 * Gallery images configuration array
 * First image uses the uploaded comparison image, others use before/after split layout
 */
export const GALLERY_IMAGES: readonly GalleryImageItem[] = [
  {
    id: 1,
    image: UPLOADED_IMAGE_PATHS.DRIVEWAY_TRANSFORMATION,
    title: IMAGE_CONTENT.DRIVEWAY.TITLE,
    description: IMAGE_CONTENT.DRIVEWAY.DESCRIPTION,
  },
  {
    id: 2,
    before: serviceActionImage,
    after: cleanHouseImage,
    title: IMAGE_CONTENT.HOUSE_WASHING.TITLE,
    description: IMAGE_CONTENT.HOUSE_WASHING.DESCRIPTION,
  },
  {
    id: 3,
    before: heroImage,
    after: serviceActionImage,
    title: IMAGE_CONTENT.COMMERCIAL.TITLE,
    description: IMAGE_CONTENT.COMMERCIAL.DESCRIPTION,
  },
] as const;

// Gallery configuration constants
export const GALLERY_CONFIG = {
  TOTAL_IMAGES: GALLERY_IMAGES.length,
  DEFAULT_SLIDE_INDEX: 0,
} as const;
