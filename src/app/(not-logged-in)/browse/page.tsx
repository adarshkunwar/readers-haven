import React from "react";
import { Search, ChevronRight } from "lucide-react";

const BrowsePage = () => {
  const categories = [
    { label: "Fiction", image: "/api/placeholder/400/300" },
    { label: "Non-Fiction", image: "/api/placeholder/400/300" },
    { label: "Science", image: "/api/placeholder/400/300" },
    { label: "Mystery", image: "/api/placeholder/400/300" },
    { label: "Biography", image: "/api/placeholder/400/300" },
    { label: "Business", image: "/api/placeholder/400/300" },
    { label: "Romance", image: "/api/placeholder/400/300" },
    { label: "History", image: "/api/placeholder/400/300" },
    { label: "Poetry", image: "/api/placeholder/400/300" },
    { label: "Travel", image: "/api/placeholder/400/300" },
    { label: "Self-Help", image: "/api/placeholder/400/300" },
    { label: "Technology", image: "/api/placeholder/400/300" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            className="bg-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            placeholder="Search books..."
          />
        </div>

        {/* Browse Categories */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Browse Books by Category
        </h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div
                className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <span className="text-gray-800 font-medium text-lg">
                {category.label}
              </span>
              <ChevronRight className="h-6 w-6 text-blue-600 mt-2" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
