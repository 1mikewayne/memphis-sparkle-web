
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
  // Primary featured transformation - the uploaded before/after comparison
  {
    id: 1,
    image: PRESSURE_WASH_IMAGES.DRIVEWAYS.CONCRETE_TRANSFORMATION,
    title: PROJECT_METADATA.DRIVEWAY_CONCRETE.title,
    description: PROJECT_METADATA.DRIVEWAY_CONCRETE.description,
    category: PROJECT_METADATA.DRIVEWAY_CONCRETE.category,
    projectType: PROJECT_METADATA.DRIVEWAY_CONCRETE.projectType,
  },

  // House washing projects
  {
    id: 2,
    image: PRESSURE_WASH_IMAGES.HOUSES.VINYL_SIDING_CLEANING,
    title: PROJECT_METADATA.HOUSE_VINYL.title,
    description: PROJECT_METADATA.HOUSE_VINYL.description,
    category: PROJECT_METADATA.HOUSE_VINYL.category,
    projectType: PROJECT_METADATA.HOUSE_VINYL.projectType,
  },
  {
    id: 3,
    image: PRESSURE_WASH_IMAGES.HOUSES.BRICK_HOUSE_RESTORATION,
    title: PROJECT_METADATA.HOUSE_BRICK.title,
    description: PROJECT_METADATA.HOUSE_BRICK.description,
    category: PROJECT_METADATA.HOUSE_BRICK.category,
    projectType: PROJECT_METADATA.HOUSE_BRICK.projectType,
  },

  // Fencing restoration projects
  {
    id: 4,
    image: PRESSURE_WASH_IMAGES.FENCING.WOODEN_FENCE_RENEWAL,
    title: PROJECT_METADATA.FENCE_WOODEN.title,
    description: PROJECT_METADATA.FENCE_WOODEN.description,
    category: PROJECT_METADATA.FENCE_WOODEN.category,
    projectType: PROJECT_METADATA.FENCE_WOODEN.projectType,
  },
  {
    id: 5,
    image: PRESSURE_WASH_IMAGES.FENCING.VINYL_FENCE_CLEANING,
    title: PROJECT_METADATA.FENCE_VINYL.title,
    description: PROJECT_METADATA.FENCE_VINYL.description,
    category: PROJECT_METADATA.FENCE_VINYL.category,
    projectType: PROJECT_METADATA.FENCE_VINYL.projectType,
  },

  // Brick work and specialty cleaning
  {
    id: 6,
    image: PRESSURE_WASH_IMAGES.BRICK_WORK.PATIO_RESTORATION,
    title: PROJECT_METADATA.PATIO_BRICK.title,
    description: PROJECT_METADATA.PATIO_BRICK.description,
    category: PROJECT_METADATA.PATIO_BRICK.category,
    projectType: PROJECT_METADATA.PATIO_BRICK.projectType,
  },
  {
    id: 7,
    image: PRESSURE_WASH_IMAGES.BRICK_WORK.BRICK_WALKWAY_CLEANING,
    title: PROJECT_METADATA.WALKWAY_BRICK.title,
    description: PROJECT_METADATA.WALKWAY_BRICK.description,
    category: PROJECT_METADATA.WALKWAY_BRICK.category,
    projectType: PROJECT_METADATA.WALKWAY_BRICK.projectType,
  },

  // Fallback examples using existing assets for split layout demo
  {
    id: 8,
    before: serviceActionImage,
    after: cleanHouseImage,
    title: "Commercial Property Cleaning",
    description: "Large-scale commercial building exterior cleaning and restoration",
    category: "Commercial Properties",
    projectType: "Commercial",
  },
  {
    id: 9,
    before: heroImage,
    after: serviceActionImage,
    title: "Multi-Surface Restoration",
    description: "Comprehensive cleaning of mixed materials - concrete, brick, and siding",
    category: "Specialty Cleaning",
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
