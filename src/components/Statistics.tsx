
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const Statistics = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [{
    number: "9",
    label: "YEARS AND COUNTING"
  }, {
    number: "10", 
    label: "YEARS AND COUNTING"
  }, {
    number: "11",
    label: "PHYSICS, CHEMISTRY AND BIOLOGY"
  }, {
    number: "12",
    label: "PHYSICS, CHEMISTRY AND BIOLOGY"
  }];

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
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
  }, [isVisible]);

  return (
    <section className="py-16 bg-gray-800 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group transition-all duration-600 hover:scale-105 ${
                isVisible ? 'animate-bounce-in' : 'opacity-0 scale-75'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 overflow-hidden">
                <span className="text-2xl font-bold text-gray-800 transition-transform duration-300 group-hover:scale-125">
                  {isVisible ? counts[index] : 0}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <p className={`text-sm text-gray-300 transition-all duration-500 group-hover:text-white ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: `${(index * 200) + 300}ms` }}>
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
