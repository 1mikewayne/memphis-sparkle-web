import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Pressure Wash 901</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Professional pressure washing services for Memphis and surrounding areas. 
              Licensed, insured, and committed to bringing your property back to life.
            </p>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-blue-100">Neighborhood Favorite 2021-2023</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span>(901) 701-0005</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span>pressurewash901@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span>Memphis, TN + 25-mile radius</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span>Mon-Sat: 7AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Services Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="hover:text-white transition-colors cursor-pointer">
                • Driveway & Sidewalk Cleaning
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                • House Washing (Soft-Wash Safe)
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                • Fence & Deck Restoration
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                • Brick & Stone Cleaning
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                • Patio & Outdoor Spaces
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                • Gutter & Roof Cleaning
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © 2024 Pressure Wash 901. All rights reserved. Licensed & Insured.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <span className="text-sm text-blue-100">Featured on</span>
              <span className="bg-yellow-400 text-primary px-3 py-1 rounded text-sm font-semibold">
                ActionNews5
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;