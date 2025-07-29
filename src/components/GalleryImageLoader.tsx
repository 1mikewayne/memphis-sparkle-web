
/**
 * 🖼️ Gallery Image Loader - Uncle Bob's Single Responsibility Component
 * Handles image loading with fail-fast validation and observable debugging
 */

import { useState, useCallback } from 'react';
import { validateImagePathFormat, testImageLoad, IMAGE_CONFIG } from '@/constants/imageValidation';

interface ImageLoaderProps {
  imagePath: string;
  alt: string;
  className?: string;
  title: string;
  category: string;
  onLoadSuccess?: () => void;
  onLoadError?: (error: string) => void;
}

const GalleryImageLoader = ({ 
  imagePath, 
  alt, 
  className = "", 
  title, 
  category,
  onLoadSuccess,
  onLoadError 
}: ImageLoaderProps) => {
  const [loadState, setLoadState] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorDetails, setErrorDetails] = useState<string>('');

  const handleImageLoad = useCallback(() => {
    console.log(`✅ IMAGE LOAD SUCCESS: ${title} (${category}) -> ${imagePath}`);
    setLoadState('success');
    onLoadSuccess?.();
  }, [title, category, onLoadSuccess, imagePath]);

  const handleImageError = useCallback((event: any) => {
    const errorMsg = `Failed to load: ${imagePath}`;
    console.error(`❌ IMAGE LOAD FAILED: ${title} (${category})`, {
      path: imagePath,
      fullURL: `${window.location.origin}${imagePath}`,
      errorEvent: event,
      errorTarget: event?.target?.src,
      networkError: event?.type,
      timestamp: new Date().toISOString()
    });
    
    // Test direct image access
    console.log(`🔍 TESTING DIRECT ACCESS: ${window.location.origin}${imagePath}`);
    
    setLoadState('error');
    setErrorDetails(errorMsg);
    onLoadError?.(errorMsg);
  }, [imagePath, title, category, onLoadError]);

  // 🔍 Pre-validate image path format
  const pathValidation = validateImagePathFormat(imagePath);
  
  if (!pathValidation.isValid) {
    console.error(`❌ INVALID PATH FORMAT: ${title}`, pathValidation.errorReason);
    return (
      <div className={`bg-destructive/10 border border-destructive/20 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <p className="text-destructive text-sm font-semibold">❌ Invalid Image Path</p>
          <p className="text-xs text-muted-foreground mt-1">{title}</p>
          <p className="text-xs text-destructive/70 mt-1 break-all">{pathValidation.errorReason}</p>
        </div>
      </div>
    );
  }

  if (loadState === 'loading') {
    return (
      <div className={`bg-muted animate-pulse flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="animate-spin text-2xl mb-2">🔄</div>
          <p className="text-muted-foreground text-sm">Loading {category}...</p>
          <p className="text-xs text-muted-foreground/70 mt-1">{title}</p>
        </div>
      </div>
    );
  }

  if (loadState === 'error') {
    return (
      <div className={`bg-destructive/10 border border-destructive/20 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <p className="text-destructive text-sm font-semibold">❌ Load Failed</p>
          <p className="text-xs text-muted-foreground mt-1">{title}</p>
          <p className="text-xs text-destructive/70 mt-1 break-all">{errorDetails}</p>
          <div className="mt-2 text-xs text-muted-foreground">
            <span className="bg-blue-500 text-white px-1 rounded">Real Upload Required</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <img 
        src={imagePath}
        alt={alt}
        className={className}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {loadState === 'success' && (
        <div className="absolute top-2 left-2 bg-success/90 text-success-foreground px-2 py-1 rounded text-xs font-medium">
          ✅ Real Upload
        </div>
      )}
    </>
  );
};

export default GalleryImageLoader;
