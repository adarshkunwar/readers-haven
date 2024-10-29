import React from "react";
import { Search, BookOpen, BookmarkPlus, TrendingUp } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Reader&apos;s haven
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Browse
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Categories
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                My Library
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg">
                Start Reading
              </button>
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

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <Search className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold">Easy Discovery</h3>
              <p className="mt-2 text-gray-500">
                Find your next read with our smart recommendation system.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <BookmarkPlus className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold">Save For Later</h3>
              <p className="mt-2 text-gray-500">
                Bookmark your favorite books and create custom reading lists.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold">Track Progress</h3>
              <p className="mt-2 text-gray-500">
                Monitor your reading goals and track your achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
