
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useContent } from "@/contexts/ContentContext";

const Team = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { content } = useContent();

  return (
    <section id="team" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Educational Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Mathematical Symbols */}
        <div className="absolute top-10 left-10 text-2xl text-blue-300/40 animate-math-symbol-float" style={{ animationDelay: '0s' }}>∫</div>
        <div className="absolute top-1/4 right-20 text-xl text-green-300/40 animate-math-symbol-float" style={{ animationDelay: '1s' }}>π</div>
        <div className="absolute top-1/2 left-1/4 text-lg text-purple-300/40 animate-math-symbol-float" style={{ animationDelay: '2s' }}>∑</div>
        <div className="absolute bottom-1/4 right-1/3 text-xl text-orange-300/40 animate-math-symbol-float" style={{ animationDelay: '3s' }}>∆</div>
        <div className="absolute top-1/3 left-1/2 text-lg text-red-300/40 animate-math-symbol-float" style={{ animationDelay: '4s' }}>∞</div>
        
        {/* Molecular Structures */}
        <div className="absolute top-20 right-10 w-8 h-8 border-2 border-blue-200/30 rounded-full animate-molecule-rotate" style={{ animationDelay: '0s' }}>
          <div className="absolute top-1 left-1 w-2 h-2 bg-blue-300/50 rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-300/50 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 left-10 w-6 h-6 border border-purple-200/30 rounded-full animate-molecule-rotate" style={{ animationDelay: '2s' }}>
          <div className="absolute top-0 left-2 w-1 h-1 bg-purple-300/50 rounded-full"></div>
          <div className="absolute bottom-0 right-2 w-1 h-1 bg-pink-300/50 rounded-full"></div>
        </div>
        
        {/* Circuit Patterns */}
        <div className="absolute top-1/2 right-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent animate-circuit-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-12 bg-gradient-to-b from-transparent via-yellow-300/30 to-transparent animate-circuit-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-sm animate-gradient-orb" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-full blur-sm animate-gradient-orb" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 left-1/5 w-6 h-6 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-sm animate-gradient-orb" style={{ animationDelay: '4s' }} />
        
        {/* Floating Books */}
        <div className="absolute top-16 right-1/3 w-4 h-6 bg-gradient-to-b from-red-300/30 to-red-400/30 rounded-sm animate-book-flip" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-3 h-5 bg-gradient-to-b from-blue-300/25 to-blue-400/25 rounded-sm animate-book-flip" style={{ animationDelay: '3s' }} />
        
        {/* DNA Helixes */}
        <div className="absolute top-1/3 right-10 w-2 h-16 relative animate-dna-helix" style={{ animationDelay: '0s' }}>
          <div className="absolute top-0 left-0 w-2 h-2 bg-green-300/40 rounded-full"></div>
          <div className="absolute top-4 right-0 w-2 h-2 bg-blue-300/40 rounded-full"></div>
          <div className="absolute top-8 left-0 w-2 h-2 bg-purple-300/40 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-orange-300/40 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/4 left-16 w-1.5 h-12 relative animate-dna-helix" style={{ animationDelay: '5s' }}>
          <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-pink-300/30 rounded-full"></div>
          <div className="absolute top-3 right-0 w-1.5 h-1.5 bg-cyan-300/30 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-yellow-300/30 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className={`text-center group transition-all duration-800 cursor-pointer hover:animate-luxury-team-reveal ${
                teamVisible ? 'animate-soothing-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative w-48 h-64 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {member.specialization}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1 transition-all duration-500 group-hover:text-blue-900 group-hover:scale-105">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-2 transition-all duration-500 group-hover:text-blue-700">
                {member.title}
              </p>
              <p className="text-sm text-gray-500 transition-all duration-500 group-hover:text-gray-700">
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
