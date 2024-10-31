import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Discover Your Next
            <span className="block text-blue-600">Favorite Book</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
            Access thousands of books, from classics to contemporary
            bestsellers. Read anywhere, anytime, on any device.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button className="px-8">Start Reading</Button>
            <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 text-lg">
              Browse Library
            </button>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="w-full h-32 bg-gray-200 rounded-md mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2 mt-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
