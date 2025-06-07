
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Team = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();

  const team = [{
    name: "Kiran Shah",
    title: "Director",
    image: "/lovable-uploads/ab2cb6d5-bf7e-467e-8cef-dfaf2945b20a.png"
  }, {
    name: "Sumit Sir",
    title: "PHYSICS TEACHER",
    image: "/lovable-uploads/ab2cb6d5-bf7e-467e-8cef-dfaf2945b20a.png"
  }, {
    name: "Prakash Sir",
    title: "BIOLOGY",
    image: "/lovable-uploads/ab2cb6d5-bf7e-467e-8cef-dfaf2945b20a.png"
  }];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
            titleVisible ? 'animate-scale-in' : 'opacity-0'
          }`}>
            Meet The Teacher's
          </h2>
          <p className={`text-gray-600 transition-all duration-700 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            Our provides our coaching systematic structure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" ref={teamRef}>
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-600 hover:scale-105 ${
                teamVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative w-48 h-64 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <img 
                  src="/api/placeholder/200/250" 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-yellow-600">
                {member.name}
              </h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
