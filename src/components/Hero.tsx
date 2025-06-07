
import { Facebook, Twitter, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center animate-scale-in" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }} />
      <div className="absolute inset-0 bg-black bg-opacity-40 animate-fade-in animation-delay-500" />
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-6 tracking-wide md:text-8xl animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-yellow-500">
          WELCOME TO SUMIT NEET
        </h1>
        <h1 className="text-4xl font-bold mb-6 tracking-wide md:text-8xl animate-fade-in-up animation-delay-3000">
          COACHING
        </h1>
        
        <div className="flex items-center justify-center mb-8 animate-fade-in-up animation-delay-4000">
          <div className="h-0.5 w-0 bg-yellow-500 mr-4 animate-expand-width animation-delay-4500" />
          <span className="text-yellow-500 font-medium text-lg tracking-wider animate-scale-in animation-delay-5000">
            A COACHING FOR EXCELLENCE
          </span>
          <div className="h-0.5 w-0 bg-yellow-500 ml-4 animate-expand-width animation-delay-4500" />
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
