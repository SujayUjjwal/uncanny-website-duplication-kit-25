
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 animate-slide-in-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800 animate-slide-in-left animation-delay-200">
              SUMIT NEET COACHING
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: "HOME", href: "#", active: true },
                { name: "SERVICES", href: "#services" },
                { name: "WORKS", href: "#" },
                { name: "REVIEWS", href: "#" },
                { name: "OUR TEAM", href: "#team" },
                { name: "CONTACT US", href: "#contact" }
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative transition-all duration-300 hover:scale-105 animate-fade-in ${
                    item.active ? "text-yellow-600 font-medium" : "text-gray-700 hover:text-yellow-600"
                  }`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-transform duration-300 hover:scale-110 animate-fade-in animation-delay-300"
            >
              <div className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <X /> : <Menu />}
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t transition-all duration-300 ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {[
            { name: "HOME", href: "#", active: true },
            { name: "SERVICES", href: "#services" },
            { name: "WORKS", href: "#" },
            { name: "REVIEWS", href: "#" },
            { name: "OUR TEAM", href: "#team" },
            { name: "CONTACT US", href: "#contact" }
          ].map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 transition-all duration-300 hover:bg-gray-100 hover:translate-x-2 ${
                item.active ? "text-yellow-600 font-medium" : "text-gray-700"
              }`}
              style={{ 
                animationDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                animation: isMenuOpen ? 'slide-in-right 0.3s ease-out forwards' : 'none'
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
