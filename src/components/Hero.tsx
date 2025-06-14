
import { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import RegistrationForm from "./RegistrationForm";
import EnrollmentForm from "./EnrollmentForm";

const Hero = () => {
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);

  const handleSocialClick = (platform: string) => {
    console.log(`Opening ${platform}`);
    const urls = {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  const handleRegisterClick = () => {
    console.log('Register for Seminar clicked');
    setRegistrationOpen(true);
  };

  const handleEnrollClick = () => {
    console.log('Enroll button clicked');
    setEnrollmentOpen(true);
  };

  return <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center animate-gentle-fade-in" style={{
        backgroundImage: "url('/lovable-uploads/d09b805e-1b5a-406a-8fc2-5f19c01e481e.png')"
      }} />
        <div className="absolute inset-0 bg-black bg-opacity-40 animate-gentle-fade-in" style={{
        animationDelay: '500ms'
      }} />
        
        <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
          {/* Mobile and Tablet View - Now with typewriter animation */}
          <div className="block lg:hidden">
            <h1 className="text-2xl font-bold mb-3 tracking-wide animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-yellow-500 mx-auto max-w-fit sm:text-3xl md:text-4xl">
              WELCOME TO SUMIT NEET
            </h1>
            <h1 className="text-2xl font-bold mb-6 tracking-wide animate-gentle-fade-in-up sm:text-3xl md:text-4xl" style={{
            animationDelay: '3000ms'
          }}>
              COACHING
            </h1>
          </div>
          
          {/* Desktop View */}
          <div className="hidden lg:block">
            <h1 className="text-6xl font-bold mb-6 tracking-wide animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-yellow-500 mx-auto max-w-fit xl:text-7xl">
              WELCOME TO SUMIT NEET
            </h1>
            <h1 className="text-6xl font-bold mb-6 tracking-wide animate-gentle-fade-in-up xl:text-7xl" style={{
            animationDelay: '3000ms'
          }}>COACHING</h1>
          </div>
          
          <div className="flex items-center justify-center mb-8 animate-gentle-fade-in-up" style={{
          animationDelay: '4000ms'
        }}>
            <div className="h-0.5 w-8 bg-yellow-500 mr-4 animate-expand-width sm:w-12 md:w-16" style={{
            animationDelay: '4500ms'
          }} />
            <span className="text-yellow-500 font-medium text-sm tracking-wider animate-gentle-fade-in-up sm:text-base md:text-lg" style={{
            animationDelay: '5000ms'
          }}>
              A COACHING FOR EXCELLENCE
            </span>
            <div className="h-0.5 w-8 bg-yellow-500 ml-4 animate-expand-width sm:w-12 md:w-16" style={{
            animationDelay: '4500ms'
          }} />
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            {[{
            Icon: Facebook,
            bg: "bg-blue-600",
            delay: "6000",
            platform: "facebook"
          }, {
            Icon: Twitter,
            bg: "bg-blue-400",
            delay: "6200",
            platform: "twitter"
          }, {
            Icon: Instagram,
            bg: "bg-pink-600",
            delay: "6400",
            platform: "instagram"
          }].map(({
            Icon,
            bg,
            delay,
            platform
          }, index) => <button key={index} onClick={() => handleSocialClick(platform)} className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center transition-all duration-500 animate-gentle-fade-in cursor-pointer group relative overflow-hidden hover:animate-luxury-social-glow`} style={{
            animationDelay: `${delay}ms`
          }}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <Icon className="w-5 h-5 text-white relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              </button>)}
          </div>

          <div className="animate-gentle-fade-in-up" style={{
          animationDelay: '6600ms'
        }}>
            <Button onClick={handleRegisterClick} className="bg-yellow-500 text-black font-semibold px-8 py-3 text-lg transition-all duration-500 transform relative overflow-hidden group hover:animate-luxury-button-morph">
              <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
                Register for Seminar
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Fixed Enroll Button with Enhanced Hover */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={handleEnrollClick} className="bg-yellow-500 text-black font-bold px-6 py-4 text-lg rounded-full shadow-lg transition-all duration-500 transform relative overflow-hidden group hover:animate-luxury-button-morph">
          <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
            Enroll Now
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          <div className="absolute inset-0 rounded-full animate-premium-ripple opacity-0 group-hover:opacity-100 bg-yellow-400/30" />
        </Button>
      </div>

      {/* Registration Form Modal */}
      <RegistrationForm open={registrationOpen} onOpenChange={setRegistrationOpen} />

      {/* Enrollment Form Modal */}
      <EnrollmentForm open={enrollmentOpen} onOpenChange={setEnrollmentOpen} />
    </>;
};

export default Hero;
