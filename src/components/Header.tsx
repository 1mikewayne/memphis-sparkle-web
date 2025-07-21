import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/55cd3d40-878c-46b7-8499-c69a292f216a.png" 
            alt="Pressure Wash 901 Logo" 
            className="h-10 w-auto"
          />
          <h1 className="text-2xl font-bold text-primary">Pressure Wash 901</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>(901) 701-0005</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>pressurewash901@gmail.com</span>
          </div>
          <Button size="sm" className="bg-[var(--gradient-hero)] hover:bg-primary-hover">
            Get FREE Quote
          </Button>
        </div>

        <div className="md:hidden">
          <Button size="sm" className="bg-[var(--gradient-hero)] hover:bg-primary-hover">
            Call Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;