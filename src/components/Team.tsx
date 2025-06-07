
const Team = () => {
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet The Teacher's</h2>
          <p className="text-gray-600">Our provides our coaching systematic structure</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-48 h-64 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden">
                <img src="/api/placeholder/200/250" alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
