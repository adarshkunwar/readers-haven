const Trending = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Trending Books
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Book Title
              </h3>
              <p className="text-gray-600">Author Name</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
