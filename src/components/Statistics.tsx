
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

const Statistics = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { content } = useContent();
  const [counts, setCounts] = useState<number[]>([]);

  useEffect(() => {
    setCounts(new Array(content.statistics.stats.length).fill(0));
  }, [content.statistics.stats.length]);

  useEffect(() => {
    if (isVisible) {
      content.statistics.stats.forEach((stat, index) => {
        const targetNumber = parseInt(stat.number);
        let currentNumber = 0;
        const increment = targetNumber / 50;
        
        const timer = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(currentNumber);
            return newCounts;
          });
        }, 50);
      });
    }
  }, [isVisible, content.statistics.stats]);

  return (
    <section className="py-16 bg-gray-800 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {content.statistics.stats.map((stat, index) => (
            <div 
              key={stat.id}
              className={`group transition-all duration-600 ${
                isVisible ? 'animate-gentle-fade-in-up' : 'opacity-0 scale-75'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 overflow-hidden">
                <GraduationCap className="absolute top-1 w-4 h-4 text-gray-600 z-10" />
                <span className="text-2xl font-bold text-gray-800 transition-transform duration-300">
                  {isVisible ? counts[index] || 0 : 0}
                </span>
              </div>
              <p className={`text-sm text-gray-300 transition-all duration-500 ${
                isVisible ? 'animate-gentle-fade-in-up' : 'opacity-0'
              }`} 
              style={{ animationDelay: `${(index * 200) + 300}ms` }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
