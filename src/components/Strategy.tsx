
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useContent } from "@/contexts/ContentContext";

const Strategy = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();
  const { content } = useContent();

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Executive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luxury connection lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-connection-line" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent animate-connection-line" style={{ animationDelay: '2s' }} />
        
        {/* Premium geometric patterns */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-gray-100 rotate-45 opacity-30 animate-premium-glow" />
        <div className="absolute bottom-10 left-10 w-16 h-16 border border-gray-100 rotate-12 opacity-20 animate-premium-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Executive accent elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-40 animate-executive-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-yellow-500 rounded-full opacity-30 animate-executive-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            titleVisible ? 'animate-gentle-scale-in' : 'opacity-0'
          }`}>
            {content.strategy.title}
          </h2>
          <p className={`text-gray-600 transition-all duration-1000 ${
            titleVisible ? 'animate-soothing-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            {content.strategy.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={stepsRef}>
          {content.strategy.steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`text-center group transition-all duration-1000 ${
                stepsVisible ? 'animate-luxury-reveal' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 transition-all duration-500 overflow-hidden group-hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className={`relative z-10 transition-all duration-700 ${
                  stepsVisible ? 'animate-executive-badge' : 'opacity-0'
                }`} style={{ animationDelay: `${(index * 200) + 300}ms` }}>
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-500 group-hover:text-yellow-600">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed transition-all duration-500 group-hover:text-gray-700">
                {step.description}
              </p>
              
              {/* Connection line to next step */}
              {index < content.strategy.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-px bg-gradient-to-r from-yellow-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
