
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Strategy = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();

  const strategySteps = [{
    number: "1",
    title: "Concept",
    description: "Creating conceptual clarity to solidify concepts and ensure strong foundation."
  }, {
    number: "2",
    title: "Prepare",
    description: "Prepare Adequately for Exams with Smart Study Techniques."
  }, {
    number: "3",
    title: "Revision",
    description: "Revise to get Good in Entrance with Smart Revision and Test Methods."
  }, {
    number: "4",
    title: "Selection",
    description: "Continuous Active Plan That Sets Achieving Your Future by Making Steps."
  }];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
            titleVisible ? 'animate-scale-in' : 'opacity-0'
          }`}>
            Our Strategy
          </h2>
          <p className={`text-gray-600 transition-all duration-700 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            Our Strategic Comprehensive NEET
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={stepsRef}>
          {strategySteps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-700 hover:transform hover:translate-y-[-8px] ${
                stepsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-600 group-hover:shadow-lg group-hover:shadow-yellow-500/30">
                <span className="transition-all duration-300 group-hover:font-extrabold">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300 group-hover:text-yellow-600 group-hover:font-bold">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-800">
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
