
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
 * 🎨 Complete Gallery Images Configuration - All Real Customer Projects
 * Showcasing diverse pressure washing transformations across all categories
 */
export const GALLERY_IMAGES: readonly GalleryImageItem[] = [
  // Featured backyard transformation (main hero image)
  {
    id: 1,
    image: PRESSURE_WASH_IMAGES.BACKYARDS.BACKYARD_TRANSFORMATION,
    title: PROJECT_METADATA.BACKYARD_TRANSFORMATION.title,
    description: PROJECT_METADATA.BACKYARD_TRANSFORMATION.description,
    category: PROJECT_METADATA.BACKYARD_TRANSFORMATION.category,
    projectType: PROJECT_METADATA.BACKYARD_TRANSFORMATION.projectType,
  },

  // Sidewalk cleaning (moved from driveways)
  {
    id: 2,
    image: PRESSURE_WASH_IMAGES.DRIVEWAYS.SIDEWALK_1,
    title: PROJECT_METADATA.SIDEWALK_CLEANING.title,
    description: PROJECT_METADATA.SIDEWALK_CLEANING.description,
    category: PROJECT_METADATA.SIDEWALK_CLEANING.category,
    projectType: PROJECT_METADATA.SIDEWALK_CLEANING.projectType,
  },

  {
    id: 3,
    image: PRESSURE_WASH_IMAGES.DRIVEWAYS.SIDEWALK_2,
    title: "Sidewalk Surface Restoration",
    description: "Professional sidewalk cleaning revealing original concrete condition",
    category: "Sidewalk Cleaning",
    projectType: "Residential",
  },

  // House exterior washing
  {
    id: 4,
    image: PRESSURE_WASH_IMAGES.HOUSE_EXTERIOR.HOUSE_WASH_1,
    title: PROJECT_METADATA.HOUSE_EXTERIOR_WASH.title,
    description: PROJECT_METADATA.HOUSE_EXTERIOR_WASH.description,
    category: PROJECT_METADATA.HOUSE_EXTERIOR_WASH.category,
    projectType: PROJECT_METADATA.HOUSE_EXTERIOR_WASH.projectType,
  },

  {
    id: 5,
    image: PRESSURE_WASH_IMAGES.HOUSE_EXTERIOR.HOUSE_WASH_2,
    title: "House Siding Deep Clean",
    description: "Complete house exterior cleaning removing years of dirt and mildew",
    category: "House Exterior Washing",
    projectType: "Residential",
  },

  {
    id: 6,
    image: PRESSURE_WASH_IMAGES.HOUSE_EXTERIOR.HOUSE_WASH_3,
    title: "Exterior House Restoration",
    description: "Professional house washing service restoring original appearance",
    category: "House Exterior Washing",
    projectType: "Residential",
  },

  // Walkways and floors
  {
    id: 7,
    image: PRESSURE_WASH_IMAGES.WALKWAYS.WALKWAY_CLEANING,
    title: PROJECT_METADATA.WALKWAY_CLEANING.title,
    description: PROJECT_METADATA.WALKWAY_CLEANING.description,
    category: PROJECT_METADATA.WALKWAY_CLEANING.category,
    projectType: PROJECT_METADATA.WALKWAY_CLEANING.projectType,
  },

  {
    id: 8,
    image: PRESSURE_WASH_IMAGES.WALKWAYS.FLOOR_SURFACE_CLEANING,
    title: PROJECT_METADATA.FLOOR_SURFACE_CLEANING.title,
    description: PROJECT_METADATA.FLOOR_SURFACE_CLEANING.description,
    category: PROJECT_METADATA.FLOOR_SURFACE_CLEANING.category,
    projectType: PROJECT_METADATA.FLOOR_SURFACE_CLEANING.projectType,
  },

  // Sidewalk cleaning
  {
    id: 9,
    image: PRESSURE_WASH_IMAGES.SIDEWALKS.SIDEWALK_CLEANING_1,
    title: PROJECT_METADATA.SIDEWALK_CLEANING.title,
    description: PROJECT_METADATA.SIDEWALK_CLEANING.description,
    category: PROJECT_METADATA.SIDEWALK_CLEANING.category,
    projectType: PROJECT_METADATA.SIDEWALK_CLEANING.projectType,
  },

  {
    id: 10,
    image: PRESSURE_WASH_IMAGES.SIDEWALKS.SIDEWALK_CLEANING_2,
    title: "Sidewalk Surface Restoration",
    description: "Professional sidewalk cleaning revealing original concrete condition",
    category: "Sidewalk Cleaning",
    projectType: "Residential",
  },

  // Gate restoration
  {
    id: 11,
    image: PRESSURE_WASH_IMAGES.GATES.GATE_RESTORATION,
    title: PROJECT_METADATA.GATE_RESTORATION.title,
    description: PROJECT_METADATA.GATE_RESTORATION.description,
    category: PROJECT_METADATA.GATE_RESTORATION.category,
    projectType: PROJECT_METADATA.GATE_RESTORATION.projectType,
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
