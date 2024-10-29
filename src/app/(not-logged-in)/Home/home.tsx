import React from "react";
import { Search, BookmarkPlus, TrendingUp } from "lucide-react";
import Hero from "./hero";
import Feature from "./feature";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Feature />
    </div>
  );
};

export default HomePage;
