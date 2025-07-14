import Link from "next/link";
import {
  UsersIcon,
  CalendarDaysIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gray-900 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/guyet-hero.jpg')",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center space-y-4 max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          11th Annual Guyet Invitational
        </h1>
        <p className="italic text-lg text-green-300">GUYET XI</p>

        <div className="space-y-2 text-sm md:text-base">
          <p>
            <span className="font-bold">Saturday, July 19th, 2025</span>
          </p>
          <p>Pine Valley Golf Club</p>
          <p>Registration: 9am – 9:45am</p>
          <p>Shotgun Start: 10:00am</p>
          <p className="font-bold text-yellow-400">$100 CASH ENTRY</p>
        </div>

        <div className="mt-4 space-y-1 text-sm md:text-base">
          <p className="font-bold underline text-yellow-300">Ground Rules</p>
          <p>4 Man Scramble (8 per hole)</p>
          <p>Blue Tees</p>
          <p>Skins Included</p>
        </div>

        <div className="mt-4 space-y-1 text-sm md:text-base">
          <p className="font-bold underline text-yellow-300">
            Cash Holes – 9 Total
          </p>
          <p>CTP (All Par 3’s) – Holes 3, 5, 9, 11, 14, 16, 17</p>
          <p>Longest Drive (In Fairway) – Hole 4</p>
          <p>Shootout After Tourney – Hole 10 (150 yards)</p>
        </div>

        <p className="text-xs italic mt-2">
          *Includes a BBQ Lunch to-go at the clubhouse*
        </p>

        <div className="mt-6 w-full max-w-sm mx-auto flex flex-col gap-4">
          {/* First row: XI Teams + Results side by side */}
          <div className="flex w-full gap-4">
            <Link
              href="/tournament"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg shadow-md transition"
            >
              <UsersIcon className="w-5 h-5" />
              XI Teams
            </Link>

            <Link
              href="/results"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg shadow-md transition"
            >
              <TrophyIcon className="w-5 h-5" />
              Results
            </Link>
          </div>

          {/* Second row: Add to Calendar full width */}
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Guyet+Invitational&dates=20250719T090000/20250719T160000&details=Guyet+Invitational+Golf+Tournament&location=Pine+Valley+Golf+Club%2C+Norfolk%2C+ON+N0E+1W0&ctz=America/Toronto"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-sky-700 hover:bg-sky-800 text-white px-5 py-2.5 rounded-lg shadow-md transition"
          >
            <CalendarDaysIcon className="w-5 h-5" />
            Add to Calendar
          </a>
        </div>
      </div>
    </main>
  );
}
