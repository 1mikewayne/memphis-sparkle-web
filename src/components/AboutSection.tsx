import { CheckCircle, MapPin, DollarSign, Clock } from "lucide-react";
import serviceActionImage from "@/assets/service-action.jpg";

const highlights = [
  {
    icon: MapPin,
    title: "Locally Owned & Operated",
    description: "Proud to serve Memphis and surrounding communities within a 25-mile radius."
  },
  {
    icon: DollarSign,
    title: "Transparent, Flat-Rate Pricing",
    description: "No hidden fees or surprise charges. You know exactly what you'll pay upfront."
  },
  {
    icon: Clock,
    title: "25-Mile Service Radius",
    description: "Convenient coverage throughout Memphis and the greater metropolitan area."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Team Behind the Sparkle
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Locally owned Pressure Wash 901 has been beautifying Memphis since our founding. 
              We bring pro-grade equipment and eco-safe detergents to every job—residential or commercial. 
              Licensed, insured, satisfaction guaranteed.
            </p>

            <div className="space-y-6 mb-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-success-green/10 border border-success-green/20 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-success-green flex-shrink-0" />
                <div>
                  <p className="font-semibold text-success-green">Featured on ActionNews5</p>
                  <p className="text-sm text-muted-foreground">
                    Recognized for gifting free pressure washing services to local small businesses
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={serviceActionImage}
              alt="Pressure washing service in action"
              className="rounded-lg shadow-[var(--shadow-hero)] w-full"
            />
            <div className="absolute -top-4 -left-4 bg-warning-orange text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
              Professional Equipment
            </div>
            <div className="absolute -bottom-4 -right-4 bg-success-green text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
              Eco-Safe Products
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;