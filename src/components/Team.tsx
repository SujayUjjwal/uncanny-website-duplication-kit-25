
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useContent } from "@/contexts/ContentContext";

const Team = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { content } = useContent();

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-800 ${
            titleVisible ? 'animate-soothing-fade-in' : 'opacity-0'
          }`}>
            {content.team.title}
          </h2>
          <p className={`text-gray-600 transition-all duration-800 ${
            titleVisible ? 'animate-soothing-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            {content.team.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center" ref={teamRef}>
          {content.team.members.map((member, index) => (
            <div 
              key={member.id} 
              className={`text-center group transition-all duration-800 ${
                teamVisible ? 'animate-soothing-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative w-48 h-64 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-2">
                {member.title}
              </p>
              <p className="text-sm text-gray-500">
                {member.specialization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
