
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Team = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();

  const team = [
    {
      name: "Kiran Shah",
      title: "Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialization: "Overall Management & Strategy"
    },
    {
      name: "Sumit Sir",
      title: "PHYSICS TEACHER",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialization: "Advanced Physics & Problem Solving"
    },
    {
      name: "Prakash Sir",
      title: "BIOLOGY TEACHER",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialization: "Botany, Zoology & Medical Concepts"
    }
  ];

  const handleTeacherContact = (teacherName: string) => {
    console.log(`Contacting ${teacherName}`);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 animate-breathing ${
            titleVisible ? 'animate-scale-in' : 'opacity-0'
          }`}>
            Meet The Teacher's
          </h2>
          <p className={`text-gray-600 transition-all duration-700 animate-gentle-float ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '200ms', animationDuration: '5s' }}>
            Our provides our coaching systematic structure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" ref={teamRef}>
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-600 animate-gentle-sway ${
                teamVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationDuration: `${6 + index * 0.5}s`
              }}
            >
              <div className="relative w-48 h-64 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden transition-all duration-300 animate-breathing"
                   style={{ animationDuration: `${3 + index * 0.3}s` }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 animate-ken-burns" 
                  style={{ animationDuration: `${8 + index * 2}s` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button
                      onClick={() => handleTeacherContact(member.name)}
                      className="w-full bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition-all duration-300 animate-breathing"
                      style={{ animationDuration: `${2.5 + index * 0.2}s` }}
                    >
                      Contact
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer"
                     style={{ animationDelay: `${index * 0.7}s` }}></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1 transition-colors duration-300 animate-gentle-float"
                  style={{ animationDuration: `${4 + index * 0.2}s` }}>
                {member.name}
              </h3>
              <p className="text-gray-600 transition-colors duration-300 mb-2 animate-bob"
                 style={{ animationDuration: `${2.5 + index * 0.1}s` }}>
                {member.title}
              </p>
              <p className="text-sm text-gray-500 animate-gentle-sway"
                 style={{ animationDuration: `${7 + index * 0.3}s` }}>
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
