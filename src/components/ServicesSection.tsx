import { 
  Car, 
  Home, 
  Trees, 
  Building2, 
  Mountain, 
  Droplets 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Car,
    title: "Driveway & Sidewalk Cleaning",
    description: "Transform your concrete surfaces from grimy to gorgeous with our powerful cleaning techniques."
  },
  {
    icon: Home,
    title: "House Washing",
    description: "Soft-wash safe cleaning for vinyl, brick, and stucco. Restore your home's curb appeal."
  },
  {
    icon: Trees,
    title: "Fence & Deck Restoration",
    description: "Bring new life to weathered wood and vinyl fencing with our specialized restoration process."
  },
  {
    icon: Building2,
    title: "Brick & Stone Cleaning",
    description: "Professional cleaning for walkways, patios, steps, and architectural stone features."
  },
  {
    icon: Mountain,
    title: "Patio & Outdoor Space Refresh",
    description: "Create the perfect outdoor entertaining space with our thorough patio cleaning service."
  },
  {
    icon: Droplets,
    title: "Gutter & Roof Brightening",
    description: "Safe, effective cleaning for gutters and roof surfaces to protect and beautify your property."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential driveways to commercial buildings, we bring professional-grade 
            equipment and eco-safe solutions to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-[var(--shadow-card)] bg-[var(--gradient-card)]">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Don't see your specific need? We handle all types of pressure washing projects!
          </p>
          <button className="text-primary hover:text-primary-hover font-semibold underline underline-offset-4 hover:underline-offset-8 transition-all">
            Contact us for a custom quote →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;