import { ChevronRight } from "lucide-react";

const Popular = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Popular Categories
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            "Fiction",
            "Non-Fiction",
            "Science",
            "Mystery",
            "Biography",
            "Business",
          ].map((category, index) => (
            <a
              key={index}
              href="#"
              className="bg-white hover:bg-gray-100 p-6 rounded-lg flex justify-between items-center shadow-md transition-colors duration-300"
            >
              <span className="text-lg font-medium text-gray-800">
                {category}
              </span>
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
