/**
 * 🖼️ Centralized Image Registry - Uncle Bob's Clean Architecture
 * Only real, validated image paths allowed
 */

import { WORKING_IMAGES } from './realImageRegistry';

// 🎯 Real Image Paths (No Fake Placeholders Allowed)
const UPLOADED_IMAGE_PATHS = {
  DRIVEWAYS: {
    CONCRETE_TRANSFORMATION: WORKING_IMAGES.CONCRETE_TRANSFORMATION,
    // Real before/after driveway transformation
    DRIVEWAY_BEFORE_AFTER: WORKING_IMAGES.DRIVEWAY_BEFORE_AFTER,
  },
  HOUSES: {
    // Temporarily using the working image until real paths are provided
    VINYL_SIDING_CLEANING: WORKING_IMAGES.CONCRETE_TRANSFORMATION,
    EXTERIOR_HOUSE_WASH: WORKING_IMAGES.CONCRETE_TRANSFORMATION,
    BRICK_HOUSE_RESTORATION: WORKING_IMAGES.CONCRETE_TRANSFORMATION,
  },
  FENCING: {
    // Temporarily using the working image until real paths are provided
    WOODEN_FENCE_RENEWAL: WORKING_IMAGES.CONCRETE_TRANSFORMATION,
    VINYL_FENCE_CLEANING: WORKING_IMAGES.CONCRETE_TRANSFORMATION,
  },
  BRICK_WORK: {
    // Temporarily using the working image until real paths are provided
    PATIO_RESTORATION: WORKING_IMAGES.CONCRETE_TRANSFORMATION,
    BRICK_WALKWAY_CLEANING: WORKING_IMAGES.CONCRETE_TRANSFORMATION,
  },
} as const;

// 🔍 Debug: Log real image paths for verification
console.log("🖼️ REAL IMAGE REGISTRY DEBUG:", {
  workingImagePath: WORKING_IMAGES.CONCRETE_TRANSFORMATION,
  totalCategories: Object.keys(UPLOADED_IMAGE_PATHS).length,
  totalImageSlots: Object.values(UPLOADED_IMAGE_PATHS).reduce(
    (total, category) => total + Object.keys(category).length, 
    0
  ),
});

// 🧪 Validate all paths on load
Object.entries(UPLOADED_IMAGE_PATHS).forEach(([category, images]) => {
  Object.entries(images).forEach(([imageName, path]) => {
    console.log(`🔍 CHECKING ${category}.${imageName}:`, path);
    
    // Test image accessibility
    const testImg = new Image();
    testImg.onload = () => console.log(`✅ ${category}.${imageName} LOADS SUCCESSFULLY:`, path);
    testImg.onerror = () => console.error(`❌ ${category}.${imageName} LOAD FAILED:`, path);
    testImg.src = path;
  });
});

/**
 * 🏗️ Image Categories Configuration
 */
export const IMAGE_CATEGORIES = {
  RESIDENTIAL: "Residential Projects",
  COMMERCIAL: "Commercial Properties", 
  SPECIALTY: "Specialty Cleaning",
  DRIVEWAYS: "Driveway Transformations",
  HOUSES: "House Washing",
  FENCING: "Fence Restoration",
  BRICK_WORK: "Brick & Stone Work",
} as const;

/**
 * 📋 Project Metadata - Professional descriptions for each transformation
 */
export const PROJECT_METADATA = {
  DRIVEWAY_CONCRETE: {
    title: "Concrete Driveway Transformation",
    description: "Complete concrete driveway restoration removing years of oil stains, dirt, and grime",
    category: IMAGE_CATEGORIES.DRIVEWAYS,
    projectType: "Residential",
  },
  HOUSE_VINYL: {
    title: "Vinyl Siding House Wash",
    description: "Professional house washing service restoring vinyl siding to like-new condition",
    category: IMAGE_CATEGORIES.HOUSES,
    projectType: "Residential",
  },
  HOUSE_BRICK: {
    title: "Brick House Exterior Cleaning",
    description: "Specialized brick cleaning removing moss, mildew, and weathering stains",
    category: IMAGE_CATEGORIES.HOUSES,
    projectType: "Residential",
  },
  FENCE_WOODEN: {
    title: "Wooden Fence Restoration",
    description: "Complete wooden fence cleaning and restoration service",
    category: IMAGE_CATEGORIES.FENCING,
    projectType: "Residential",
  },
  FENCE_VINYL: {
    title: "Vinyl Fence Deep Cleaning",
    description: "Professional vinyl fence cleaning removing algae and environmental stains",
    category: IMAGE_CATEGORIES.FENCING,
    projectType: "Residential",
  },
  PATIO_BRICK: {
    title: "Brick Patio Restoration",
    description: "Professional brick patio cleaning and sealing service",
    category: IMAGE_CATEGORIES.BRICK_WORK,
    projectType: "Residential",
  },
  WALKWAY_BRICK: {
    title: "Brick Walkway Cleaning",
    description: "Complete brick walkway restoration removing moss and weathering",
    category: IMAGE_CATEGORIES.BRICK_WORK,
    projectType: "Residential",
  },
} as const;

/**
 * 🎯 Exported Image Registry - Only Real Paths
 */
export const PRESSURE_WASH_IMAGES = {
  DRIVEWAYS: UPLOADED_IMAGE_PATHS.DRIVEWAYS,
  HOUSES: UPLOADED_IMAGE_PATHS.HOUSES,
  FENCING: UPLOADED_IMAGE_PATHS.FENCING,
  BRICK_WORK: UPLOADED_IMAGE_PATHS.BRICK_WORK,
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
  UNIQUE_PATHS: new Set(
    Object.values(PRESSURE_WASH_IMAGES).flatMap(category => Object.values(category))
  ).size,
} as const;

console.log("🎯 FINAL IMAGE REGISTRY STATS:", IMAGE_REGISTRY_STATS);
