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
        backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }} />
        <div className="absolute inset-0 bg-black bg-opacity-40 animate-gentle-fade-in" style={{
        animationDelay: '500ms'
      }} />
        
        <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
          {/* Mobile and Tablet View */}
          <div className="block lg:hidden">
            <h1 className="text-2xl font-bold mb-3 tracking-wide animate-gentle-fade-in-up sm:text-3xl md:text-4xl">
              WELCOME TO
            </h1>
            <h1 className="text-2xl font-bold mb-6 tracking-wide animate-gentle-fade-in-up sm:text-3xl md:text-4xl" style={{
            animationDelay: '500ms'
          }}>
              SUMIT NEET COACHING
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
          }, index) => <button key={index} onClick={() => handleSocialClick(platform)} className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center transition-all duration-300 animate-gentle-fade-in cursor-pointer`} style={{
            animationDelay: `${delay}ms`
          }}>
                <Icon className="w-5 h-5 text-white" />
              </button>)}
          </div>

          <div className="animate-gentle-fade-in-up" style={{
          animationDelay: '6600ms'
        }}>
            <Button onClick={handleRegisterClick} className="bg-yellow-500 text-black font-semibold px-8 py-3 text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
              Register for Seminar
            </Button>
          </div>
        </div>
      </section>

      {/* Fixed Enroll Button - Animation Removed */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={handleEnrollClick} className="bg-yellow-500 text-black font-bold px-6 py-4 text-lg rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110">
          Enroll Now
        </Button>
      </div>

      {/* Registration Form Modal */}
      <RegistrationForm open={registrationOpen} onOpenChange={setRegistrationOpen} />

      {/* Enrollment Form Modal */}
      <EnrollmentForm open={enrollmentOpen} onOpenChange={setEnrollmentOpen} />
    </>;
};

export default Hero;
