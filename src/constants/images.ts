
/**
 * 🖼️ Centralized Image Registry - All Pressure Washing Project Images
 * Organized by category with semantic naming and metadata
 */

// Uploaded project images - organized by transformation type
const UPLOADED_IMAGE_PATHS = {
  DRIVEWAYS: {
    CONCRETE_TRANSFORMATION: "/lovable-uploads/6d0a98e8-4548-43ed-b9ac-28c13e170f94.png",
    DRIVEWAY_BEFORE_AFTER: "/lovable-uploads/b8f12345-1234-5678-9abc-def012345678.png", // Placeholder for actual paths
  },
  HOUSES: {
    VINYL_SIDING_CLEANING: "/lovable-uploads/a1b2c3d4-5678-9abc-def0-123456789abc.png",
    EXTERIOR_HOUSE_WASH: "/lovable-uploads/e5f6g7h8-9012-3456-7890-abcdef123456.png",
    BRICK_HOUSE_RESTORATION: "/lovable-uploads/i9j0k1l2-3456-7890-abcd-ef1234567890.png",
  },
  FENCING: {
    WOODEN_FENCE_RENEWAL: "/lovable-uploads/m3n4o5p6-7890-abcd-ef12-3456789abcde.png",
    VINYL_FENCE_CLEANING: "/lovable-uploads/q7r8s9t0-abcd-ef12-3456-789abcdef012.png",
  },
  BRICK_WORK: {
    PATIO_RESTORATION: "/lovable-uploads/u1v2w3x4-ef12-3456-789a-bcdef0123456.png",
    BRICK_WALKWAY_CLEANING: "/lovable-uploads/y5z6a7b8-3456-789a-bcde-f01234567890.png",
  },
} as const;

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
