
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

  // Auto-advance reviews every 5 seconds
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
    <section className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={titleRef}>
          <h2 className={`text-3xl font-bold mb-4 transition-all duration-700 ${
            titleVisible ? 'animate-scale-in' : 'opacity-0'
          }`}>
            Our Reviews
          </h2>
          <p className={`text-gray-400 mb-12 transition-all duration-700 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            Our Institute past students previous reviews
          </p>
        </div>
        
        <div className="mb-8 relative px-12 sm:px-16" ref={contentRef}>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              contentVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '600ms' }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
          
          <button
            onClick={goToNext}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              contentVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '600ms' }}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          <div className={`w-16 h-16 bg-gray-600 rounded-full mx-auto mb-6 transition-all duration-600 hover:scale-110 hover:bg-gray-500 overflow-hidden ${
            contentVisible ? 'animate-scale-in' : 'opacity-0'
          }`}>
            <img 
              src={reviews[currentReview].image} 
              alt={reviews[currentReview].author}
              className="w-full h-full object-cover"
            />
          </div>
          <blockquote className={`text-lg italic mb-6 transition-all duration-700 ${
            contentVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '300ms' }}>
            "{reviews[currentReview].text}"
          </blockquote>
          <p className={`text-gray-400 transition-all duration-700 ${
            contentVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '500ms' }}>
            - {reviews[currentReview].author}
          </p>
        </div>

        <div className={`flex justify-center space-x-2 transition-all duration-700 ${
          contentVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`} style={{ animationDelay: '700ms' }}>
          {reviews.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 cursor-pointer ${
                index === currentReview ? 'bg-yellow-500' : 'bg-gray-600 hover:bg-yellow-500'
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
