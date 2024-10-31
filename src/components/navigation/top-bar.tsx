import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Tabs from "./links";
import Link from "next/link";

const TopBar = () => {
  const companyName = " Reader's haven";

  return (
    <nav className="border-b bg-white fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                {companyName}
              </span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Tabs />
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
