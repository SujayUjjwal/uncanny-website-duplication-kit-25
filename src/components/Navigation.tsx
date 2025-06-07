
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string, sectionName: string) => {
    console.log(`Navigating to ${sectionName}`);
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: "HOME", href: "#", active: true, section: "Hero" },
    { name: "SERVICES", href: "#services", active: false, section: "Services" },
    { name: "STRATEGY", href: "#strategy", active: false, section: "Strategy" },
    { name: "REVIEWS", href: "#reviews", active: false, section: "Reviews" },
    { name: "OUR TEAM", href: "#team", active: false, section: "Team" },
    { name: "CONTACT US", href: "#contact", active: false, section: "Contact" }
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 animate-gentle-slide-in-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span 
              className="text-xl font-bold text-gray-800 animate-gentle-fade-in cursor-pointer"
              style={{ animationDelay: '200ms' }}
              onClick={() => handleNavClick("#", "Home")}
            >
              SUMIT NEET COACHING
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.section)}
                  className={`relative transition-all duration-300 animate-gentle-fade-in ${
                    item.active ? "text-yellow-600 font-medium" : "text-gray-700"
                  }`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {item.name}
                  {item.active && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-600"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-transform duration-300 animate-gentle-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t transition-all duration-300 ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href, item.section)}
              className={`block w-full text-left px-3 py-2 transition-all duration-300 ${
                item.active ? "text-yellow-600 font-medium" : "text-gray-700"
              }`}
              style={{ 
                animationDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                animation: isMenuOpen ? `gentle-slide-in-right 0.3s ease-out forwards` : 'none'
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
