import { Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <img 
              src="/lovable-uploads/55cd3d40-878c-46b7-8499-c69a292f216a.png" 
              alt="Pressure Wash 901 Logo" 
              className="h-8 w-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-primary">Pressure Wash 901</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Our Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            About Us
          </button>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>(901) 701-0005</span>
          </div>
          <Button size="sm" className="bg-[var(--gradient-hero)] hover:bg-primary-hover">
            Get FREE Quote
          </Button>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className="lg:hidden flex items-center space-x-2">
          <Button size="sm" className="bg-[var(--gradient-hero)] hover:bg-primary-hover">
            Quote
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t">
          <div className="container py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              About Us
            </button>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground py-2">
              <Phone className="h-4 w-4" />
              <span>(901) 701-0005</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground py-2">
              <Mail className="h-4 w-4" />
              <span>pressurewash901@gmail.com</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;