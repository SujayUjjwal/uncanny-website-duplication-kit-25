
const Reviews = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Reviews</h2>
        <p className="text-gray-400 mb-12">Our Institute past students previous reviews</p>
        
        <div className="mb-8">
          <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-6"></div>
          <blockquote className="text-lg italic mb-6">
            "I attended demo classes of almost all coaching but their faculties were very qualified and has experience. I missed initial week and found exceptionally excellent faculties."
          </blockquote>
          <p className="text-gray-400">- Best Client EVER</p>
        </div>

        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
