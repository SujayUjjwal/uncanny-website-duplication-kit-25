
import { Facebook, Twitter, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }} />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-6 tracking-wide md:text-8xl">
          WELCOME TO SUMIT NEET<br /><br />COACHING
        </h1>
        <div className="flex items-center justify-center mb-8">
          <div className="h-0.5 w-16 bg-yellow-500 mr-4" />
          <span className="text-yellow-500 font-medium text-lg tracking-wider">A COACHING FOR EXCELLENCE</span>
          <div className="h-0.5 w-16 bg-yellow-500 ml-4" />
        </div>
        
        <div className="flex justify-center space-x-4 mb-12">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <Facebook className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
            <Twitter className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
            <Instagram className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
