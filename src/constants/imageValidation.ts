
/**
 * 🛡️ Uncle Bob's Image Validation System
 * Fail-fast validation with observable debugging
 */

// 🔧 AI-Proof Constants (No Magic Numbers)
export const IMAGE_CONFIG = {
  UUID_LENGTH: 36,
  UPLOAD_PATH_PREFIX: '/lovable-uploads/',
  VALID_EXTENSIONS: ['.png', '.jpg', '.jpeg'],
  MAX_VALIDATION_TIMEOUT: 5000,
} as const;

export interface ImageValidationResult {
  readonly isValid: boolean;
  readonly path: string;
  readonly errorReason?: string;
  readonly validatedAt: number;
}

/**
 * 🔍 Validates if an image path follows the correct format
 */
export const validateImagePathFormat = (path: string): ImageValidationResult => {
  const timestamp = Date.now();
  
  console.log(`🔍 VALIDATING PATH FORMAT: ${path}`);
  
  // Check if path starts with correct prefix
  if (!path.startsWith(IMAGE_CONFIG.UPLOAD_PATH_PREFIX)) {
    console.error(`❌ INVALID PREFIX: Expected "${IMAGE_CONFIG.UPLOAD_PATH_PREFIX}", got "${path.substring(0, 20)}..."`);
    return {
      isValid: false,
      path,
      errorReason: `Invalid prefix - expected ${IMAGE_CONFIG.UPLOAD_PATH_PREFIX}`,
      validatedAt: timestamp,
    };
  }
  
  // Extract UUID part
  const uuidPart = path.replace(IMAGE_CONFIG.UPLOAD_PATH_PREFIX, '').split('.')[0];
  
  // Check UUID length
  if (uuidPart.length !== IMAGE_CONFIG.UUID_LENGTH) {
    console.error(`❌ INVALID UUID LENGTH: Expected ${IMAGE_CONFIG.UUID_LENGTH}, got ${uuidPart.length}`);
    return {
      isValid: false,
      path,
      errorReason: `Invalid UUID length - expected ${IMAGE_CONFIG.UUID_LENGTH}, got ${uuidPart.length}`,
      validatedAt: timestamp,
    };
  }
  
  // Check for valid extension
  const hasValidExtension = IMAGE_CONFIG.VALID_EXTENSIONS.some(ext => path.endsWith(ext));
  if (!hasValidExtension) {
    console.error(`❌ INVALID EXTENSION: Path "${path}" doesn't end with ${IMAGE_CONFIG.VALID_EXTENSIONS.join(', ')}`);
    return {
      isValid: false,
      path,
      errorReason: `Invalid extension - must be one of ${IMAGE_CONFIG.VALID_EXTENSIONS.join(', ')}`,
      validatedAt: timestamp,
    };
  }
  
  console.log(`✅ PATH FORMAT VALID: ${path}`);
  return {
    isValid: true,
    path,
    validatedAt: timestamp,
  };
};

/**
 * 🧪 Tests if an image can actually be loaded
 */
export const testImageLoad = (path: string): Promise<ImageValidationResult> => {
  return new Promise((resolve) => {
    const timestamp = Date.now();
    console.log(`🧪 TESTING IMAGE LOAD: ${path}`);
    
    const img = new Image();
    const timeoutId = setTimeout(() => {
      console.error(`⏱️ LOAD TIMEOUT: ${path} took longer than ${IMAGE_CONFIG.MAX_VALIDATION_TIMEOUT}ms`);
      resolve({
        isValid: false,
        path,
        errorReason: `Load timeout after ${IMAGE_CONFIG.MAX_VALIDATION_TIMEOUT}ms`,
        validatedAt: timestamp,
      });
    }, IMAGE_CONFIG.MAX_VALIDATION_TIMEOUT);
    
    img.onload = () => {
      clearTimeout(timeoutId);
      console.log(`✅ IMAGE LOAD SUCCESS: ${path}`);
      resolve({
        isValid: true,
        path,
        validatedAt: timestamp,
      });
    };
    
    img.onerror = (error) => {
      clearTimeout(timeoutId);
      console.error(`❌ IMAGE LOAD FAILED: ${path}`, error);
      resolve({
        isValid: false,
        path,
        errorReason: 'Failed to load image',
        validatedAt: timestamp,
      });
    };
    
    img.src = path;
  });
};
