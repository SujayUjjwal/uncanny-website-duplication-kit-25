
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useContent } from "@/contexts/ContentContext";
import { Book, TestTube, Stethoscope } from "lucide-react";

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { content } = useContent();

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Book,
      TestTube,
      Stethoscope
    };
    return icons[iconName] || Book;
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
            titleVisible ? 'animate-gentle-scale-in' : 'opacity-0'
          }`}>
            {content.services.title}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <div className="space-y-6" ref={servicesRef}>
            {content.services.services.map((service, index) => (
              <div 
                key={service.id} 
                className={`space-y-2 transition-all duration-600 group cursor-pointer ${
                  servicesVisible ? 'animate-gentle-slide-in-left' : 'opacity-0 translate-x-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700 transition-all duration-500 group-hover:text-gray-900 group-hover:scale-105">
                    {service.name}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden relative group-hover:animate-premium-progress-glow">
                  <div 
                    className={`${service.color} h-2 rounded-full transition-all duration-1000 ease-out transform relative overflow-hidden group-hover:shadow-lg ${
                      servicesVisible ? service.width : 'w-0'
                    }`}
                    style={{ 
                      transitionDelay: `${(index * 100) + 200}ms`,
                      '--target-width': service.width.replace('w-', '').replace('full', '100%').replace('5/6', '83.33%').replace('4/5', '80%').replace('3/4', '75%')
                    } as React.CSSProperties}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full opacity-0 group-hover:opacity-100 group-hover:animate-luxury-progress-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-8" ref={cardsRef}>
            {content.services.subjects.map((card, index) => {
              const IconComponent = getIconComponent(card.icon);
              return (
                <Card 
                  key={card.id}
                  className={`transition-all duration-600 group cursor-pointer border hover:animate-luxury-card-lift hover:border-blue-200 ${
                    cardsVisible ? 'animate-gentle-slide-in-right' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:bg-blue-50 group-hover:scale-110 group-hover:shadow-lg">
                        <IconComponent className="w-6 h-6 text-gray-600 transition-all duration-500 group-hover:text-blue-600 group-hover:animate-premium-icon-bounce" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 transition-all duration-500 group-hover:text-blue-900 group-hover:scale-105 transform origin-left">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 text-sm transition-all duration-500 group-hover:text-gray-800">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
