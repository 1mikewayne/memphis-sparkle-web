
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useImageLoader } from "@/hooks/useImageLoader";
import { GALLERY_IMAGES, GALLERY_CONFIG, type GalleryImageItem } from "@/constants/galleryImages";
import heroImage from "@/assets/hero-before-after.jpg";

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(GALLERY_CONFIG.DEFAULT_SLIDE_INDEX);
  const { loadState, handleImageLoad, handleImageError, resetLoadState } = useImageLoader();

  console.log("🎯 Gallery initialized with", GALLERY_CONFIG.TOTAL_IMAGES, "images across", GALLERY_CONFIG.CATEGORIES.length, "categories");

  const navigateToSlide = (slideIndex: number) => {
    console.log("🔄 Navigating to slide:", slideIndex, "- Project:", GALLERY_IMAGES[slideIndex].title);
    setCurrentSlide(slideIndex);
    resetLoadState();
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % GALLERY_CONFIG.TOTAL_IMAGES;
    navigateToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + GALLERY_CONFIG.TOTAL_IMAGES) % GALLERY_CONFIG.TOTAL_IMAGES;
    navigateToSlide(prevIndex);
  };

  const currentImage: GalleryImageItem = GALLERY_IMAGES[currentSlide];

  console.log("📸 Current project details:", {
    id: currentImage.id,
    title: currentImage.title,
    category: currentImage.category,
    projectType: currentImage.projectType,
    hasImage: !!currentImage.image,
    hasSplit: !!(currentImage.before && currentImage.after),
  });

  const onImageLoadSuccess = () => {
    console.log("✅ Successfully loaded:", currentImage.title);
    handleImageLoad(currentImage.image || currentImage.title);
  };

  const onImageLoadError = () => {
    console.error("❌ Failed to load project image:", currentImage.title);
    handleImageError(currentImage.image || currentImage.title, 'Network or file access error');
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See the Dramatic Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our before and after gallery showcases the transformative power of professional pressure washing 
            across {GALLERY_CONFIG.CATEGORIES.length} different project categories.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative rounded-lg overflow-hidden shadow-[var(--shadow-hero)]">
            <div className="relative h-[400px] md:h-[500px]">
              {currentImage.image ? (
                // Single before/after comparison image
                <div className="relative w-full h-full">
                  {loadState.isLoading && (
                    <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                      <p className="text-muted-foreground">🔄 Loading {currentImage.category} project...</p>
                    </div>
                  )}
                  {loadState.hasError ? (
                    <div className="absolute inset-0 bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-muted-foreground mb-2">❌ Failed to load project image</p>
                        <p className="text-sm text-muted-foreground mb-2">Project: {currentImage.title}</p>
                        <p className="text-xs text-muted-foreground mb-4">Error: {loadState.errorMessage}</p>
                        {/* Fallback to a working image */}
                        <img 
                          src={heroImage}
                          alt="Fallback pressure washing example"
                          className="w-full h-full object-cover mt-4"
                        />
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={currentImage.image}
                      alt={`${currentImage.title} - ${currentImage.category}`}
                      className="w-full h-full object-cover"
                      onLoad={onImageLoadSuccess}
                      onError={onImageLoadError}
                    />
                  )}
                </div>
              ) : (
                // Split before/after layout for other images
                <div className="absolute inset-0 grid grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <img 
                      src={currentImage.before}
                      alt="Before pressure washing"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md font-semibold text-sm">
                      BEFORE
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative">
                    <img 
                      src={currentImage.after}
                      alt="After pressure washing"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-success-green text-white px-3 py-1 rounded-md font-semibold text-sm">
                      AFTER
                    </div>
                  </div>
                </div>
              )}

              {/* Center Divider - only show for split layout */}
              {!currentImage.image && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white shadow-lg"></div>
              )}
              
              {/* Enhanced Project Info Overlay with Category */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    {currentImage.category}
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                    {currentImage.projectType}
                  </span>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {currentImage.title}
                </h3>
                <p className="text-white/90">
                  {currentImage.description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            onClick={nextSlide}
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Enhanced Dots Indicator with Project Info */}
          <div className="flex justify-center space-x-2 mt-8">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.id}
                onClick={() => navigateToSlide(index)}
                title={`${image.title} - ${image.category}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see your property transformed? We specialize in {GALLERY_CONFIG.CATEGORIES.join(", ").toLowerCase()}.
          </p>
          <Button 
            size="lg" 
            className="bg-warning-orange hover:bg-warning-orange/90 text-white font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300"
          >
            Schedule Your FREE Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
