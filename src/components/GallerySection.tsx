
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cleanHouseImage from "@/assets/clean-house.jpg";
import serviceActionImage from "@/assets/service-action.jpg";
import heroImage from "@/assets/hero-before-after.jpg";

const galleryImages = [
  {
    id: 1,
    image: "/lovable-uploads/0cde2a90-3462-46b7-9533-a2fa415c6386.png",
    title: "Residential Driveway Transformation",
    description: "Complete driveway and walkway restoration - Before & After"
  },
  {
    id: 2,
    before: serviceActionImage,
    after: cleanHouseImage,
    title: "House Washing Project",
    description: "Vinyl siding and exterior cleaning"
  },
  {
    id: 3,
    before: heroImage,
    after: serviceActionImage,
    title: "Commercial Property",
    description: "Large-scale commercial cleaning project"
  }
];

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    setImageError(false);
    setImageLoading(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setImageError(false);
    setImageLoading(true);
  };

  const currentImage = galleryImages[currentSlide];

  const handleImageLoad = () => {
    console.log("Image loaded successfully:", currentImage.image);
    setImageLoading(false);
  };

  const handleImageError = () => {
    console.error("Failed to load image:", currentImage.image);
    setImageError(true);
    setImageLoading(false);
  };

  console.log("Current image data:", currentImage);
  console.log("Image path being used:", currentImage.image);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See the Dramatic Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our before and after gallery showcases the transformative power of professional pressure washing.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative rounded-lg overflow-hidden shadow-[var(--shadow-hero)]">
            <div className="relative h-[400px] md:h-[500px]">
              {currentImage.image ? (
                // Single before/after comparison image
                <div className="relative w-full h-full">
                  {imageLoading && (
                    <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                      <p className="text-muted-foreground">Loading image...</p>
                    </div>
                  )}
                  {imageError ? (
                    <div className="absolute inset-0 bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-muted-foreground mb-2">Failed to load image</p>
                        <p className="text-sm text-muted-foreground">Path: {currentImage.image}</p>
                        {/* Fallback to a working image */}
                        <img 
                          src={heroImage}
                          alt="Fallback image"
                          className="w-full h-full object-cover mt-4"
                        />
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={currentImage.image}
                      alt={currentImage.title}
                      className="w-full h-full object-cover"
                      onLoad={handleImageLoad}
                      onError={handleImageError}
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
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
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

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
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
            Ready to see your property transformed?
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
