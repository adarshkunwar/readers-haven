import { buttonVariant } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className={buttonVariant({ variant: "secondary", size: "lg" })}
      >
        Return Home
      </Link>
    </div>
  );
}
