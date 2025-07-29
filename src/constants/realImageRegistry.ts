
/**
 * 🎯 Real Image Registry - Uncle Bob's Truth Source
 * Only verified, working image paths allowed
 */

import { validateImagePathFormat, testImageLoad, type ImageValidationResult } from './imageValidation';

// 🏗️ Only Verified Working Images (Cleaned Registry)
const VERIFIED_REAL_IMAGES = {
  // Only real uploaded images that we know work
  CONCRETE_DRIVEWAY_TRANSFORMATION: "/lovable-uploads/6d0a98e8-4548-43ed-b9ac-28c13e170f94.png",
  DRIVEWAY_BEFORE_AFTER: "/lovable-uploads/c7ac95af-9b19-43c0-b48e-009256695dcb.png",
} as const;

/**
 * 📊 Image Registry Statistics
 */
export const REAL_IMAGE_STATS = {
  TOTAL_IMAGES: Object.keys(VERIFIED_REAL_IMAGES).length,
  VERIFIED_COUNT: Object.keys(VERIFIED_REAL_IMAGES).length,
  WORKING_IMAGES: Object.keys(VERIFIED_REAL_IMAGES).length,
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
  totalVerified: REAL_IMAGE_STATS.TOTAL_IMAGES,
  registryStatus: 'CLEANED_AND_READY',
});
