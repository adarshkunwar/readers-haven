import { Search, BookmarkPlus, TrendingUp } from "lucide-react";

const Feature = () => {
  return (
    <div className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-black">
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
  );
};

export default Feature;
