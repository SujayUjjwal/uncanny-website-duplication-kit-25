
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { content } = useContent();

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

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 fixed w-full z-50 animate-soothing-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span 
              className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent animate-gentle-scale-in cursor-pointer transition-all duration-500 hover:from-yellow-600 hover:to-yellow-700"
              style={{ animationDelay: '200ms' }}
              onClick={() => handleNavClick("#", "Home")}
            >
              {content.navigation.brandName}
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {content.navigation.menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href, item.section)}
                  className={`relative transition-all duration-500 animate-soothing-fade-in group ${
                    item.name === "HOME" 
                      ? "text-yellow-600 font-semibold" 
                      : "text-gray-700 hover:text-gray-900 font-medium"
                  }`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
                    {item.name}
                  </span>
                  
                  {/* Executive underline animation */}
                  {item.name === "HOME" ? (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 animate-luxury-underline" />
                  ) : (
                    <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 w-0 group-hover:w-full transition-all duration-500 ease-out" />
                  )}
                  
                  {/* Premium hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 scale-110" />
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-all duration-500 animate-soothing-fade-in hover:bg-gray-100/80 relative overflow-hidden group"
              style={{ animationDelay: '300ms' }}
            >
              <div className="relative z-10 transition-all duration-300 group-hover:scale-110">
                {isMenuOpen ? <X /> : <Menu />}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Executive Mobile menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 transition-all duration-500 ${
        isMenuOpen ? 'max-h-80 opacity-100 animate-executive-menu' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {content.navigation.menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href, item.section)}
              className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-500 group relative overflow-hidden ${
                item.name === "HOME" 
                  ? "text-yellow-600 font-semibold bg-yellow-50/50" 
                  : "text-gray-700 hover:text-gray-900 font-medium hover:bg-gray-50/80"
              }`}
              style={{ 
                animationDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                animation: isMenuOpen ? `corporate-slide 0.5s ease-out forwards` : 'none'
              }}
            >
              <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                {item.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
