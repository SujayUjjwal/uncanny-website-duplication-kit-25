
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
        const increment = targetNumber / 60; // Smoother counting
        
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
        }, 40); // Faster, smoother updates
      });
    }
  }, [isVisible, content.statistics.stats]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden" ref={ref}>
      {/* Financial Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Executive grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Premium chart lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-financial-chart" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-financial-chart" style={{ animationDelay: '2s' }} />
        
        {/* Luxury accent dots */}
        <div className="absolute top-16 right-16 w-3 h-3 bg-green-400 rounded-full opacity-40 animate-executive-glow" />
        <div className="absolute bottom-16 left-16 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-executive-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-400 rounded-full opacity-50 animate-executive-glow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {content.statistics.stats.map((stat, index) => (
            <div 
              key={stat.id}
              className={`group transition-all duration-1000 ${
                isVisible ? 'animate-luxury-counter' : 'opacity-0 scale-75'
              }`}
              style={{ animationDelay: `${index * 250}ms` }}
            >
              <div className="relative w-20 h-20 mx-auto mb-6">
                {/* Premium circular background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500" />
                
                {/* Executive progress ring */}
                <svg className="absolute inset-0 w-20 h-20 -rotate-90">
                  <circle 
                    cx="40" 
                    cy="40" 
                    r="30" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="2" 
                    fill="none"
                  />
                  <circle 
                    cx="40" 
                    cy="40" 
                    r="30" 
                    stroke="url(#gradient)" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                    className={`transition-all duration-2000 ${
                      isVisible ? 'animate-progress-ring' : ''
                    }`}
                    style={{ 
                      animationDelay: `${(index * 250) + 500}ms`,
                      strokeDasharray: '188.4',
                      strokeDashoffset: isVisible ? '47.1' : '188.4'
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Icon and number container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-green-400 mb-1 transition-all duration-300 group-hover:text-green-300" />
                  <span className="text-lg font-bold text-white transition-all duration-300 group-hover:text-green-100">
                    {isVisible ? counts[index] || 0 : 0}
                  </span>
                </div>
              </div>
              
              <p className={`text-sm text-gray-300 transition-all duration-700 group-hover:text-white ${
                isVisible ? 'animate-soothing-fade-in-up' : 'opacity-0'
              }`} 
              style={{ animationDelay: `${(index * 250) + 600}ms` }}>
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
