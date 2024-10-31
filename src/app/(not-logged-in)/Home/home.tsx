import React from "react";
import Hero from "./hero";
import Feature from "./feature";
import Popular from "./popular";
import Trending from "./trending";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white ">
      <Hero />
      <Feature />
      <Popular />
      <Trending />
    </div>
  );
};

export default HomePage;
