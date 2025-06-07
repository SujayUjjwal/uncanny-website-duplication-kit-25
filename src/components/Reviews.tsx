
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Reviews = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

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
        
        <div className="mb-8" ref={contentRef}>
          <div className={`w-16 h-16 bg-gray-600 rounded-full mx-auto mb-6 transition-all duration-600 hover:scale-110 hover:bg-gray-500 ${
            contentVisible ? 'animate-bounce-in' : 'opacity-0 scale-75'
          }`}>
          </div>
          <blockquote className={`text-lg italic mb-6 transition-all duration-700 ${
            contentVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '300ms' }}>
            "I attended demo classes of almost all coaching but their faculties were very qualified and has experience. I missed initial week and found exceptionally excellent faculties."
          </blockquote>
          <p className={`text-gray-400 transition-all duration-700 ${
            contentVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '500ms' }}>
            - Best Client EVER
          </p>
        </div>

        <div className={`flex justify-center space-x-2 transition-all duration-700 ${
          contentVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`} style={{ animationDelay: '700ms' }}>
          <div className="w-2 h-2 bg-yellow-500 rounded-full transition-all duration-300 hover:scale-150 animate-float"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full transition-all duration-300 hover:scale-150 hover:bg-yellow-500 cursor-pointer"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full transition-all duration-300 hover:scale-150 hover:bg-yellow-500 cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
