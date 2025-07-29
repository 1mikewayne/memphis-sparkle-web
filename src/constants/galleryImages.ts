
import cleanHouseImage from "@/assets/clean-house.jpg";
import serviceActionImage from "@/assets/service-action.jpg";
import heroImage from "@/assets/hero-before-after.jpg";
import { PRESSURE_WASH_IMAGES, PROJECT_METADATA } from "./images";

/**
 * Gallery image configuration with proper TypeScript definitions
 * Each image object contains either a single comparison image or before/after pair
 */
export interface GalleryImageItem {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly projectType: string;
  readonly image?: string; // Single comparison image URL
  readonly before?: string; // Before image for split layout
  readonly after?: string; // After image for split layout
}

/**
 * 🎨 Enhanced Gallery Images Configuration - All Real Projects
 * Includes all uploaded before/after transformations organized by category
 */
export const GALLERY_IMAGES: readonly GalleryImageItem[] = [
  // Primary featured transformation - the new uploaded image
  {
    id: 1,
    image: PRESSURE_WASH_IMAGES.DRIVEWAYS.DRIVEWAY_BEFORE_AFTER,
    title: PROJECT_METADATA.DRIVEWAY_CONCRETE.title,
    description: PROJECT_METADATA.DRIVEWAY_CONCRETE.description,
    category: PROJECT_METADATA.DRIVEWAY_CONCRETE.category,
    projectType: PROJECT_METADATA.DRIVEWAY_CONCRETE.projectType,
  },

  // Second verified working image
  {
    id: 2,
    image: PRESSURE_WASH_IMAGES.DRIVEWAYS.CONCRETE_TRANSFORMATION,
    title: "Concrete Driveway Restoration",
    description: "Professional concrete cleaning and restoration removing years of buildup",
    category: "Driveway Transformations",
    projectType: "Residential",
  },
] as const;

// Gallery configuration constants
export const GALLERY_CONFIG = {
  TOTAL_IMAGES: GALLERY_IMAGES.length,
  DEFAULT_SLIDE_INDEX: 0,
  CATEGORIES: [...new Set(GALLERY_IMAGES.map(img => img.category))],
  PROJECT_TYPES: [...new Set(GALLERY_IMAGES.map(img => img.projectType))],
} as const;

console.log("🎯 Gallery configuration loaded:", {
  totalImages: GALLERY_CONFIG.TOTAL_IMAGES,
  categories: GALLERY_CONFIG.CATEGORIES,
  projectTypes: GALLERY_CONFIG.PROJECT_TYPES,
});
