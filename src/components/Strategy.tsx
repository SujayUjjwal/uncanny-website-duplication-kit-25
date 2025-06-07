
const Strategy = () => {
  const strategySteps = [{
    number: "1",
    title: "Concept",
    description: "Creating conceptual clarity to solidify concepts and ensure strong foundation."
  }, {
    number: "2",
    title: "Prepare",
    description: "Prepare Adequately for Exams with Smart Study Techniques."
  }, {
    number: "3",
    title: "Revision",
    description: "Revise to get Good in Entrance with Smart Revision and Test Methods."
  }, {
    number: "4",
    title: "Selection",
    description: "Continuous Active Plan That Sets Achieving Your Future by Making Steps."
  }];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategy</h2>
          <p className="text-gray-600">Our Strategic Comprehensive NEET</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategySteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
