
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useContent } from "@/contexts/ContentContext";

const Strategy = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();
  const { content } = useContent();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
            titleVisible ? 'animate-gentle-scale-in' : 'opacity-0'
          }`}>
            {content.strategy.title}
          </h2>
          <p className={`text-gray-600 transition-all duration-700 ${
            titleVisible ? 'animate-gentle-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            {content.strategy.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={stepsRef}>
          {content.strategy.steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`text-center group transition-all duration-700 ${
                stepsVisible ? 'animate-gentle-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 transition-all duration-500 overflow-hidden">
                <span className="transition-all duration-300">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300">
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
