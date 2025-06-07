
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Book, TestTube, Stethoscope } from "lucide-react";

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const services = [
    { name: "Complete Level of Learning", color: "bg-red-500", width: "w-full" },
    { name: "Science Test and Product Guidance", color: "bg-blue-500", width: "w-5/6" },
    { name: "Computational Modeling Aptitude", color: "bg-green-500", width: "w-4/5" },
    { name: "One-on-one Personalized Learning", color: "bg-yellow-500", width: "w-3/4" },
    { name: "Strength Improvement Focused Sessions in NEET", color: "bg-orange-500", width: "w-5/6" },
    { name: "Subject Test and Evaluation", color: "bg-purple-500", width: "w-4/5" },
    { name: "Best Education from Expert AIMS", color: "bg-teal-500", width: "w-full" }
  ];

  const cardData = [
    {
      title: "Physics",
      description: "Physics is extremely important and its topics as asked in NEET.",
      icon: Book
    },
    {
      title: "Chemistry", 
      description: "Chemistry is important because every thing in this body from face and blood, is made of chemicals.",
      icon: TestTube
    },
    {
      title: "Biology",
      description: "Biology as it important since giving access other that can in biology of science medicine which most important.",
      icon: Stethoscope
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
            titleVisible ? 'animate-gentle-scale-in' : 'opacity-0'
          }`}>
            What Do We Offer
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <div className="space-y-6" ref={servicesRef}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`space-y-2 transition-all duration-600 ${
                  servicesVisible ? 'animate-gentle-slide-in-left' : 'opacity-0 translate-x-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700 transition-colors duration-300">
                    {service.name}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden relative">
                  <div 
                    className={`${service.color} h-2 rounded-full transition-all duration-1000 ease-out transform ${
                      servicesVisible ? service.width : 'w-0'
                    }`}
                    style={{ 
                      transitionDelay: `${(index * 100) + 200}ms`,
                      '--target-width': service.width.replace('w-', '').replace('full', '100%').replace('5/6', '83.33%').replace('4/5', '80%').replace('3/4', '75%')
                    } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-8" ref={cardsRef}>
            {cardData.map((card, index) => (
              <Card 
                key={index}
                className={`transition-all duration-600 ${
                  cardsVisible ? 'animate-gentle-slide-in-right' : 'opacity-0 translate-x-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-transform duration-300">
                      <card.icon className="w-6 h-6 text-gray-600 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm transition-colors duration-300">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
