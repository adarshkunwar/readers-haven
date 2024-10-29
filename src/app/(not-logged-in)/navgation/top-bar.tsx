"use client";
import { Button } from "@/components/button";
import { BookOpen } from "lucide-react";
import Link from "next/link";

type Ttabs = {
  name: string;
  link: string;
};

const Tabs = () => {
  const tabs: Ttabs[] = [
    { name: "Browse", link: "#" },
    { name: "Categories", link: "#" },
    { name: "My Library", link: "#" },
  ];
  return (
    <>
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.link}
          className="text-gray-900 hover:text-blue-600"
        >
          {tab.name}
        </Link>
      ))}
    </>
  );
};

const TopBar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              Reader&apos;s haven
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Tabs />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </div>
          <Button>k</Button>
          <div className="text-black"></div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
