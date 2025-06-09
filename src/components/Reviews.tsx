
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Reviews = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      text: "I attended demo classes of almost all coaching but their faculties were very qualified and has experience. I missed initial week and found exceptionally excellent faculties.",
      author: "Best Client EVER",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      text: "The teaching methodology is excellent and the study material provided is comprehensive. Highly recommended for NEET preparation.",
      author: "Satisfied Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      text: "Amazing faculty and great support throughout the preparation. The mock tests really helped me improve my performance.",
      author: "NEET Achiever",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const goToPrevious = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Shooting Stars */}
        <div className="absolute top-10 left-0 w-1 h-1 bg-white rounded-full animate-shooting-star" style={{ animationDelay: '0s' }} />
        <div className="absolute top-20 left-0 w-1 h-1 bg-blue-300 rounded-full animate-shooting-star" style={{ animationDelay: '2s' }} />
        <div className="absolute top-32 left-0 w-1 h-1 bg-purple-300 rounded-full animate-shooting-star" style={{ animationDelay: '4s' }} />
        
        {/* Aurora Waves */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-purple-500/20 via-blue-500/30 to-green-500/20 animate-aurora-wave" style={{ animationDelay: '0s' }} />
        <div className="absolute top-16 left-0 w-full h-24 bg-gradient-to-r from-blue-500/15 via-purple-500/25 to-pink-500/15 animate-aurora-wave" style={{ animationDelay: '2s' }} />
        
        {/* Nebula Clouds */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-nebula-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/15 rounded-full blur-lg animate-nebula-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-pink-500/10 rounded-full blur-md animate-nebula-float" style={{ animationDelay: '5s' }} />
        
        {/* Constellation Patterns */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-constellation-twinkle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-constellation-twinkle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-blue-200 rounded-full animate-constellation-twinkle" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-purple-200 rounded-full animate-constellation-twinkle" style={{ animationDelay: '3.5s' }} />
        
        {/* Parallax Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%)] animate-parallax-drift" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,119,198,0.2),_transparent_50%)] animate-parallax-drift" style={{ animationDelay: '10s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div ref={titleRef}>
          <h2 className={`text-3xl font-bold mb-4 transition-all duration-700 ${
            titleVisible ? 'animate-gentle-scale-in' : 'opacity-0'
          }`}>
            Our Reviews
          </h2>
          <p className={`text-gray-400 mb-12 transition-all duration-700 ${
            titleVisible ? 'animate-gentle-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            Our Institute past students previous reviews
          </p>
        </div>
        
        <div className="mb-8 relative px-12 sm:px-16" ref={contentRef}>
          <button
            onClick={goToPrevious}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${
              contentVisible ? 'animate-gentle-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '600ms' }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
          
          <button
            onClick={goToNext}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${
              contentVisible ? 'animate-gentle-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '600ms' }}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          <div className={`w-16 h-16 bg-gray-600 rounded-full mx-auto mb-6 transition-all duration-600 overflow-hidden ${
            contentVisible ? 'animate-gentle-scale-in' : 'opacity-0'
          }`}>
            <img 
              src={reviews[currentReview].image} 
              alt={reviews[currentReview].author}
              className="w-full h-full object-cover"
            />
          </div>
          <blockquote className={`text-lg italic mb-6 transition-all duration-700 ${
            contentVisible ? 'animate-gentle-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '300ms' }}>
            "{reviews[currentReview].text}"
          </blockquote>
          <p className={`text-gray-400 transition-all duration-700 ${
            contentVisible ? 'animate-gentle-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '500ms' }}>
            - {reviews[currentReview].author}
          </p>
        </div>

        <div className={`flex justify-center space-x-2 transition-all duration-700 ${
          contentVisible ? 'animate-gentle-fade-in-up' : 'opacity-0'
        }`} style={{ animationDelay: '700ms' }}>
          {reviews.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentReview ? 'bg-yellow-500' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentReview(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
