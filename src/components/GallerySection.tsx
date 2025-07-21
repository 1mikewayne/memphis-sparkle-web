import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES, GALLERY_CONFIG, type GalleryImageItem } from "@/constants/galleryImages";
import GalleryImageLoader from "./GalleryImageLoader";
import heroImage from "@/assets/hero-before-after.jpg";

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(GALLERY_CONFIG.DEFAULT_SLIDE_INDEX);
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<number, string>>({});

  console.log("🎯 GALLERY INITIALIZED:", {
    totalImages: GALLERY_CONFIG.TOTAL_IMAGES,
    categories: GALLERY_CONFIG.CATEGORIES.length,
    currentSlide,
  });

  const navigateToSlide = (slideIndex: number) => {
    const project = GALLERY_IMAGES[slideIndex];
    console.log(`🔄 NAVIGATING TO SLIDE ${slideIndex}:`, {
      title: project.title,
      category: project.category,
      hasImage: !!project.image,
      hasSplit: !!(project.before && project.after),
    });
    setCurrentSlide(slideIndex);
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

  const handleImageLoadSuccess = () => {
    console.log(`✅ GALLERY IMAGE LOADED:`, currentImage.title);
    // Remove any existing error for this slide
    if (imageLoadErrors[currentSlide]) {
      setImageLoadErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[currentSlide];
        return newErrors;
      });
    }
  };

  const handleImageLoadError = (errorMsg: string) => {
    console.error(`❌ GALLERY IMAGE FAILED:`, {
      slide: currentSlide,
      title: currentImage.title,
      error: errorMsg,
    });
    setImageLoadErrors(prev => ({
      ...prev,
      [currentSlide]: errorMsg,
    }));
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
                // Single before/after comparison image with Uncle Bob's loader
                <div className="relative w-full h-full">
                  <GalleryImageLoader
                    imagePath={currentImage.image}
                    alt={`${currentImage.title} - ${currentImage.category}`}
                    className="w-full h-full object-cover"
                    title={currentImage.title}
                    category={currentImage.category}
                    onLoadSuccess={handleImageLoadSuccess}
                    onLoadError={handleImageLoadError}
                  />
                </div>
              ) : (
                // Split before/after layout for fallback images
                <div className="absolute inset-0 grid grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <img 
                      src={currentImage.before}
                      alt="Before pressure washing"
                      className="w-full h-full object-cover"
                      onLoad={() => console.log("✅ BEFORE IMAGE LOADED:", currentImage.before)}
                      onError={(e) => console.error("❌ BEFORE IMAGE FAILED:", currentImage.before, e)}
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
                      onLoad={() => console.log("✅ AFTER IMAGE LOADED:", currentImage.after)}
                      onError={(e) => console.error("❌ AFTER IMAGE FAILED:", currentImage.after, e)}
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
              
              {/* Enhanced Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    {currentImage.category}
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                    {currentImage.projectType}
                  </span>
                  {currentImage.image && (
                    <span className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                      🎯 Real Upload
                    </span>
                  )}
                  {imageLoadErrors[currentSlide] && (
                    <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs">
                      ❌ Load Error
                    </span>
                  )}
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

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.id}
                onClick={() => navigateToSlide(index)}
                title={`${image.title} - ${image.category} ${image.image ? '(Real Upload)' : '(Demo)'}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                } ${image.image ? 'ring-2 ring-success' : ''} ${imageLoadErrors[index] ? 'ring-2 ring-destructive' : ''}`}
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
