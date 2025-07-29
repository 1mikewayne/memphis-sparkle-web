import { Button } from "@/components/ui/button";
import { Phone, Star, Award, Shield } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src="/lovable-uploads/backyard1.jpg" alt="Real customer backyard transformation - pressure washing results" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bring Your Property Back to Life with{" "}
            <span className="text-yellow-300">Pressure Wash 901</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
            Residential & Commercial Power Washing | Memphis & Surrounding Areas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-warning-orange hover:bg-warning-orange/90 text-white font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl">
              Get a FREE Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 text-stone-950">
              <Phone className="mr-2 h-5 w-5" />
              Call Us: (901) 701-0005
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center animate-fade-in">
            <div className="flex flex-col items-center">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-sm text-blue-100">5-Star Reviews</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-yellow-400 mb-2" />
              <p className="text-sm text-blue-100">Neighborhood Favorite</p>
              <p className="text-xs text-blue-200">(2021-2023)</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-yellow-400 mb-2" />
              <p className="text-sm text-blue-100">Licensed • Insured</p>
              <p className="text-xs text-blue-200">Eco-Friendly</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;