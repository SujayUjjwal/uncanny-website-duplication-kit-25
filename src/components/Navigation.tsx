
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">SUMIT NEET COACHING</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-yellow-600 font-medium">HOME</a>
              <a href="#services" className="text-gray-700 hover:text-yellow-600">SERVICES</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600">WORKS</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600">REVIEWS</a>
              <a href="#team" className="text-gray-700 hover:text-yellow-600">OUR TEAM</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-600">CONTACT US</a>
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-yellow-600 font-medium">HOME</a>
            <a href="#services" className="block px-3 py-2 text-gray-700">SERVICES</a>
            <a href="#" className="block px-3 py-2 text-gray-700">WORKS</a>
            <a href="#" className="block px-3 py-2 text-gray-700">REVIEWS</a>
            <a href="#team" className="block px-3 py-2 text-gray-700">OUR TEAM</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700">CONTACT US</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
