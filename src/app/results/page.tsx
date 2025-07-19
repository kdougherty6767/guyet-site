import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function ResultsPage() {
  const results = [
    {
      year: 2025,
      photoUrl: null,
    },
    {
      year: 2024,
      photoUrl: "/2024.jpg",
    },
    {
      year: 2023,
      photoUrl: "/2023.jpg",
    },
    {
      year: 2022,
      photoUrl: "/2022.jpg",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gray-900 text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/guyet-hero.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Results</h1>

        <div className="space-y-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white/10 rounded p-4 backdrop-blur-sm shadow-md"
            >
              <h2 className="text-2xl font-bold mb-2">{result.year}</h2>
              {result.photoUrl ? (
                <div className="w-full max-w-sm mx-auto">
                  <Image
                    src={result.photoUrl}
                    alt={`${result.year} winning team`}
                    width={400}
                    height={300}
                    className="rounded shadow-md w-full h-auto"
                  />
                </div>
              ) : (
                <p className="italic text-lg">Stay Tuned</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/">
            <span className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg shadow-md transition">
              <ArrowLeftIcon className="w-5 h-5" />
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
