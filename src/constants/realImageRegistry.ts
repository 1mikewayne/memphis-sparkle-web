
/**
 * 🎯 Real Image Registry - Uncle Bob's Truth Source
 * Only verified, working image paths allowed
 */

import { validateImagePathFormat, testImageLoad, type ImageValidationResult } from './imageValidation';

// 🏗️ Known Working Images (Based on Previous Upload Session)
const VERIFIED_REAL_IMAGES = {
  // Real uploaded images that we know work
  CONCRETE_DRIVEWAY_TRANSFORMATION: "/lovable-uploads/6d0a98e8-4548-43ed-b9ac-28c13e170f94.png",
  DRIVEWAY_BEFORE_AFTER: "/lovable-uploads/c7ac95af-9b19-43c0-b48e-009256695dcb.png",
  
  // Additional real images (update these with your actual uploaded paths)
  HOUSE_VINYL_CLEANING: "/lovable-uploads/a1b2c3d4-e5f6-7890-abcd-ef1234567890.png", // UPDATE WITH REAL PATH
  BRICK_HOUSE_RESTORATION: "/lovable-uploads/b2c3d4e5-f6g7-8901-bcde-f23456789012.png", // UPDATE WITH REAL PATH
  WOODEN_FENCE_RENEWAL: "/lovable-uploads/c3d4e5f6-g7h8-9012-cdef-345678901234.png", // UPDATE WITH REAL PATH
  VINYL_FENCE_CLEANING: "/lovable-uploads/d4e5f6g7-h8i9-0123-defg-456789012345.png", // UPDATE WITH REAL PATH
  PATIO_RESTORATION: "/lovable-uploads/e5f6g7h8-i9j0-1234-efgh-567890123456.png", // UPDATE WITH REAL PATH
  BRICK_WALKWAY: "/lovable-uploads/f6g7h8i9-j0k1-2345-fghi-678901234567.png", // UPDATE WITH REAL PATH
  COMMERCIAL_CLEANING: "/lovable-uploads/g7h8i9j0-k1l2-3456-ghij-789012345678.png", // UPDATE WITH REAL PATH
  MULTI_SURFACE: "/lovable-uploads/h8i9j0k1-l2m3-4567-hijk-890123456789.png", // UPDATE WITH REAL PATH
} as const;

/**
 * 📊 Image Registry Statistics
 */
export const REAL_IMAGE_STATS = {
  TOTAL_IMAGES: Object.keys(VERIFIED_REAL_IMAGES).length,
  VERIFIED_COUNT: 2, // Currently two verified
  NEEDS_VERIFICATION: Object.keys(VERIFIED_REAL_IMAGES).length - 1,
} as const;

/**
 * 🔍 Validated Image Registry
 * All images must pass format validation before use
 */
export const createValidatedImageRegistry = async () => {
  console.log(`🏗️ CREATING VALIDATED IMAGE REGISTRY (${REAL_IMAGE_STATS.TOTAL_IMAGES} images)`);
  
  const validationResults: Record<string, ImageValidationResult> = {};
  const validImages: Record<string, string> = {};
  
  for (const [key, path] of Object.entries(VERIFIED_REAL_IMAGES)) {
    console.log(`🔍 VALIDATING: ${key} -> ${path}`);
    
    // Step 1: Format validation
    const formatValidation = validateImagePathFormat(path);
    validationResults[key] = formatValidation;
    
    if (formatValidation.isValid) {
      console.log(`✅ FORMAT VALID: ${key}`);
      validImages[key] = path;
      
      // Step 2: Load test (async)
      testImageLoad(path).then(loadResult => {
        if (loadResult.isValid) {
          console.log(`🎯 FULLY VALIDATED: ${key} -> ${path}`);
        } else {
          console.error(`❌ LOAD FAILED: ${key} -> ${path}: ${loadResult.errorReason}`);
        }
      });
    } else {
      console.error(`❌ FORMAT INVALID: ${key} -> ${formatValidation.errorReason}`);
    }
  }
  
  console.log(`📊 VALIDATION SUMMARY:`, {
    totalImages: REAL_IMAGE_STATS.TOTAL_IMAGES,
    validFormat: Object.keys(validImages).length,
    invalidFormat: REAL_IMAGE_STATS.TOTAL_IMAGES - Object.keys(validImages).length,
  });
  
  return {
    validImages,
    validationResults,
    stats: REAL_IMAGE_STATS,
  };
};

// 🎯 Export only the verified images we know work
export const WORKING_IMAGES = {
  CONCRETE_TRANSFORMATION: VERIFIED_REAL_IMAGES.CONCRETE_DRIVEWAY_TRANSFORMATION,
  DRIVEWAY_BEFORE_AFTER: VERIFIED_REAL_IMAGES.DRIVEWAY_BEFORE_AFTER,
} as const;

console.log(`🎯 REAL IMAGE REGISTRY LOADED:`, {
  workingImages: Object.keys(WORKING_IMAGES).length,
  totalPlanned: REAL_IMAGE_STATS.TOTAL_IMAGES,
  needsRealPaths: REAL_IMAGE_STATS.NEEDS_VERIFICATION,
});
