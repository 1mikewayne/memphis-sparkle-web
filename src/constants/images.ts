/**
 * 🖼️ Centralized Image Registry - Uncle Bob's Clean Architecture
 * Only real, validated image paths allowed
 */

import { WORKING_IMAGES } from './realImageRegistry';

// 🎯 Real Image Paths (All Customer Transformations)
const UPLOADED_IMAGE_PATHS = {
  DRIVEWAYS: {
    CONCRETE_TRANSFORMATION: WORKING_IMAGES.CONCRETE_TRANSFORMATION,
    DRIVEWAY_BEFORE_AFTER: WORKING_IMAGES.DRIVEWAY_BEFORE_AFTER,
  },
  BACKYARDS: {
    BACKYARD_TRANSFORMATION: WORKING_IMAGES.BACKYARD_TRANSFORMATION,
  },
  WALKWAYS: {
    WALKWAY_CLEANING: WORKING_IMAGES.WALKWAY_CLEANING,
    FLOOR_SURFACE_CLEANING: WORKING_IMAGES.FLOOR_SURFACE_CLEANING,
  },
  GATES: {
    GATE_RESTORATION: WORKING_IMAGES.GATE_RESTORATION,
  },
  SIDEWALKS: {
    SIDEWALK_CLEANING_1: WORKING_IMAGES.SIDEWALK_CLEANING_1,
    SIDEWALK_CLEANING_2: WORKING_IMAGES.SIDEWALK_CLEANING_2,
  },
  HOUSE_EXTERIOR: {
    HOUSE_WASH_1: WORKING_IMAGES.HOUSE_EXTERIOR_WASH_1,
    HOUSE_WASH_2: WORKING_IMAGES.HOUSE_EXTERIOR_WASH_2,
    HOUSE_WASH_3: WORKING_IMAGES.HOUSE_EXTERIOR_WASH_3,
  },
} as const;

/**
 * 🏗️ Image Categories Configuration
 */
export const IMAGE_CATEGORIES = {
  DRIVEWAYS: "Driveway Transformations",
  BACKYARDS: "Backyard Cleaning",
  WALKWAYS: "Walkway & Floor Cleaning",
  GATES: "Gate & Fence Restoration",
  SIDEWALKS: "Sidewalk Cleaning",
  HOUSE_EXTERIOR: "House Exterior Washing",
} as const;

/**
 * 📋 Project Metadata - Professional descriptions for each transformation
 */
export const PROJECT_METADATA = {
  DRIVEWAY_CONCRETE: {
    title: "Concrete Driveway Revival",
    description: "Complete driveway transformation removing years of oil stains and grime",
    category: IMAGE_CATEGORIES.DRIVEWAYS,
    projectType: "Residential",
  },
  BACKYARD_TRANSFORMATION: {
    title: "Backyard Patio Restoration",
    description: "Professional backyard cleaning revealing beautiful surfaces underneath",
    category: IMAGE_CATEGORIES.BACKYARDS,
    projectType: "Residential",
  },
  WALKWAY_CLEANING: {
    title: "Walkway Deep Clean",
    description: "Restored walkway surface with professional pressure washing techniques",
    category: IMAGE_CATEGORIES.WALKWAYS,
    projectType: "Residential",
  },
  GATE_RESTORATION: {
    title: "Gate & Fence Restoration",
    description: "Complete gate cleaning removing built-up dirt and weathering",
    category: IMAGE_CATEGORIES.GATES,
    projectType: "Residential",
  },
  SIDEWALK_CLEANING: {
    title: "Sidewalk Surface Renewal",
    description: "Professional sidewalk cleaning restoring original appearance",
    category: IMAGE_CATEGORIES.SIDEWALKS,
    projectType: "Residential",
  },
  HOUSE_EXTERIOR_WASH: {
    title: "House Exterior Deep Clean",
    description: "Complete exterior house washing removing dirt, mildew, and stains",
    category: IMAGE_CATEGORIES.HOUSE_EXTERIOR,
    projectType: "Residential",
  },
  FLOOR_SURFACE_CLEANING: {
    title: "Floor Surface Restoration",
    description: "Professional floor cleaning revealing original surface condition",
    category: IMAGE_CATEGORIES.WALKWAYS,
    projectType: "Residential",
  },
} as const;

/**
 * 🎯 Exported Image Registry - All Real Customer Transformations
 */
export const PRESSURE_WASH_IMAGES = {
  DRIVEWAYS: UPLOADED_IMAGE_PATHS.DRIVEWAYS,
  BACKYARDS: UPLOADED_IMAGE_PATHS.BACKYARDS,
  WALKWAYS: UPLOADED_IMAGE_PATHS.WALKWAYS,
  GATES: UPLOADED_IMAGE_PATHS.GATES,
  SIDEWALKS: UPLOADED_IMAGE_PATHS.SIDEWALKS,
  HOUSE_EXTERIOR: UPLOADED_IMAGE_PATHS.HOUSE_EXTERIOR,
} as const;

/**
 * 📊 Image Registry Statistics
 */
export const IMAGE_REGISTRY_STATS = {
  TOTAL_CATEGORIES: Object.keys(PRESSURE_WASH_IMAGES).length,
  TOTAL_IMAGES: Object.values(PRESSURE_WASH_IMAGES).reduce(
    (total, category) => total + Object.keys(category).length, 
    0
  ),
} as const;

console.log("🎯 EXPANDED IMAGE REGISTRY:", {
  totalCategories: IMAGE_REGISTRY_STATS.TOTAL_CATEGORIES,
  totalImages: IMAGE_REGISTRY_STATS.TOTAL_IMAGES,
  categories: Object.keys(PRESSURE_WASH_IMAGES),
});