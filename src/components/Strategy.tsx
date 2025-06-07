
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Strategy = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();

  const strategySteps = [
    {
      number: "1",
      title: "Concept",
      description: "Creating conceptual clarity to solidify concepts and ensure strong foundation."
    },
    {
      number: "2",
      title: "Prepare",
      description: "Prepare Adequately for Exams with Smart Study Techniques."
    },
    {
      number: "3",
      title: "Revision",
      description: "Revise to get Good in Entrance with Smart Revision and Test Methods."
    },
    {
      number: "4",
      title: "Selection",
      description: "Continuous Active Plan That Sets Achieving Your Future by Making Steps."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 animate-breathing ${
            titleVisible ? 'animate-scale-in' : 'opacity-0'
          }`}>
            Our Strategy
          </h2>
          <p className={`text-gray-600 transition-all duration-700 animate-gentle-float ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '200ms', animationDuration: '5s' }}>
            Our Strategic Comprehensive NEET
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={stepsRef}>
          {strategySteps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-700 animate-gentle-sway ${
                stepsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationDuration: `${6 + index * 0.5}s`
              }}
            >
              <div className="relative w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 transition-all duration-500 animate-orbital overflow-hidden"
                   style={{ animationDuration: `${8 + index * 2}s` }}>
                <span className="transition-all duration-300 animate-breathing"
                      style={{ animationDuration: `${3 + index * 0.3}s` }}>
                  {step.number}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"
                     style={{ animationDelay: `${index * 0.5}s` }}></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300 animate-gentle-float"
                  style={{ animationDuration: `${4 + index * 0.2}s` }}>
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
