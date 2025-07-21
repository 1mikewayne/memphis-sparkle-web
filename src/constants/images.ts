/**
 * 🖼️ Centralized Image Registry - All Pressure Washing Project Images
 * Organized by category with semantic naming and metadata
 */

// Uploaded project images - organized by transformation type
const UPLOADED_IMAGE_PATHS = {
  DRIVEWAYS: {
    CONCRETE_TRANSFORMATION: "/lovable-uploads/6d0a98e8-4548-43ed-b9ac-28c13e170f94.png",
    DRIVEWAY_BEFORE_AFTER: "/lovable-uploads/e83c3da2-3c44-4100-9896-a499899357a6.png",
  },
  HOUSES: {
    VINYL_SIDING_CLEANING: "/lovable-uploads/b0a8c9f5-7d4e-4c2a-8b1f-3a5e7d9c2b8f.png",
    EXTERIOR_HOUSE_WASH: "/lovable-uploads/f2e1d8c7-9a6b-4e3f-8c5d-2a7e9f1c4b6d.png",
    BRICK_HOUSE_RESTORATION: "/lovable-uploads/8e7d6c5b-4a3f-9e2d-1c8b-7a5f9e3d2c1b.png",
  },
  FENCING: {
    WOODEN_FENCE_RENEWAL: "/lovable-uploads/3c2b1a9f-8e7d-6c5b-4a3f-2e1d9c8b7a6f.png",
    VINYL_FENCE_CLEANING: "/lovable-uploads/9f8e7d6c-5b4a-3f2e-1d9c-8b7a6f5e4d3c.png",
  },
  BRICK_WORK: {
    PATIO_RESTORATION: "/lovable-uploads/2b1a9f8e-7d6c-5b4a-3f2e-1d9c8b7a6f5e.png",
    BRICK_WALKWAY_CLEANING: "/lovable-uploads/7a6f5e4d-3c2b-1a9f-8e7d-6c5b4a3f2e1d.png",
  },
} as const;

// Debug: Log all image paths for verification
console.log("🖼️ Image Registry Debug - All uploaded image paths:", {
  driveways: UPLOADED_IMAGE_PATHS.DRIVEWAYS,
  houses: UPLOADED_IMAGE_PATHS.HOUSES,
  fencing: UPLOADED_IMAGE_PATHS.FENCING,
  brickWork: UPLOADED_IMAGE_PATHS.BRICK_WORK,
});

// Verify paths exist and are accessible
Object.entries(UPLOADED_IMAGE_PATHS).forEach(([category, images]) => {
  Object.entries(images).forEach(([imageName, path]) => {
    console.log(`🔍 Checking ${category}.${imageName}:`, path);
    // Test if path is accessible (this will show in network tab)
    const testImg = new Image();
    testImg.onload = () => console.log(`✅ ${category}.${imageName} path is valid:`, path);
    testImg.onerror = () => console.error(`❌ ${category}.${imageName} path FAILED:`, path);
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
 * 🎯 Exported Image Registry - Ready for Import
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
} as const;

console.log("🖼️ Image registry loaded:", IMAGE_REGISTRY_STATS);
