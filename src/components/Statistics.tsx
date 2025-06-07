
const Statistics = () => {
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

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-800">{stat.number}</span>
              </div>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
