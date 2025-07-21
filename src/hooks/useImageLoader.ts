
import { useState, useCallback } from 'react';

export interface ImageLoadState {
  isLoading: boolean;
  hasError: boolean;
  errorMessage?: string;
}

export const useImageLoader = () => {
  const [loadState, setLoadState] = useState<ImageLoadState>({
    isLoading: true,
    hasError: false,
  });

  const handleImageLoad = useCallback((imagePath: string) => {
    console.log("✅ Image loaded successfully:", imagePath);
    setLoadState({
      isLoading: false,
      hasError: false,
    });
  }, []);

  const handleImageError = useCallback((imagePath: string, errorReason?: string) => {
    console.error("❌ Failed to load image:", imagePath, errorReason || "Unknown error");
    setLoadState({
      isLoading: false,
      hasError: true,
      errorMessage: errorReason || "Image failed to load",
    });
  }, []);

  const resetLoadState = useCallback(() => {
    console.log("🔄 Resetting image load state");
    setLoadState({
      isLoading: true,
      hasError: false,
    });
  }, []);

  return {
    loadState,
    handleImageLoad,
    handleImageError,
    resetLoadState,
  };
};
