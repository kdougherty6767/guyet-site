import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function ResultsPage() {
  return (
    <main className="relative min-h-screen bg-gray-900 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/guyet-hero.jpg')" }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Results</h1>
        <p className="text-lg mb-8">Coming soon!</p>

        <Link href="/">
          <span className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg shadow-md transition">
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Home
          </span>
        </Link>
      </div>
    </main>
  );
}
