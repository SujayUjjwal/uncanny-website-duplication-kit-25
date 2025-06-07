
import { Facebook, Twitter, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center animate-scale-in" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }} />
      <div className="absolute inset-0 bg-black bg-opacity-40 animate-fade-in animation-delay-500" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
        {/* Mobile and Tablet View */}
        <div className="block lg:hidden">
          <h1 className="text-2xl font-bold mb-3 tracking-wide animate-fade-in-up sm:text-3xl md:text-4xl">
            WELCOME TO
          </h1>
          <h1 className="text-2xl font-bold mb-6 tracking-wide animate-fade-in-up animation-delay-500 sm:text-3xl md:text-4xl">
            SUMIT NEET COACHING
          </h1>
        </div>
        
        {/* Desktop View */}
        <div className="hidden lg:block">
          <h1 className="text-6xl font-bold mb-6 tracking-wide xl:text-8xl animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-yellow-500 mx-auto max-w-fit">
            WELCOME TO SUMIT NEET
          </h1>
          <h1 className="text-6xl font-bold mb-6 tracking-wide xl:text-8xl animate-fade-in-up animation-delay-3000">
            COACHING
          </h1>
        </div>
        
        <div className="flex items-center justify-center mb-8 animate-fade-in-up animation-delay-4000">
          <div className="h-0.5 w-8 bg-yellow-500 mr-4 animate-expand-width animation-delay-4500 sm:w-12 md:w-16" />
          <span className="text-yellow-500 font-medium text-sm tracking-wider animate-scale-in animation-delay-5000 sm:text-base md:text-lg">
            A COACHING FOR EXCELLENCE
          </span>
          <div className="h-0.5 w-8 bg-yellow-500 ml-4 animate-expand-width animation-delay-4500 sm:w-12 md:w-16" />
        </div>
        
        <div className="flex justify-center space-x-4 mb-12">
          {[
            { Icon: Facebook, bg: "bg-blue-600", delay: "6000" },
            { Icon: Twitter, bg: "bg-blue-400", delay: "6200" },
            { Icon: Instagram, bg: "bg-pink-600", delay: "6400" }
          ].map(({ Icon, bg, delay }, index) => (
            <div
              key={index}
              className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 animate-bounce-in cursor-pointer`}
              style={{ animationDelay: `${delay}ms` }}
            >
              <Icon className="w-5 h-5 text-white animate-float" style={{ animationDelay: `${delay}ms` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
