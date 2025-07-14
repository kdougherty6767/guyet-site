import Link from "next/link";

export default function TournamentPage() {
  const teams = [
    {
      hole: "Hole #1 - A",
      players: [
        "Pep Pasinek",
        "Norm Stefan",
        "Lenny Poirier",
        "Brian Jamieson",
      ],
    },
    {
      hole: "Hole #1 - B",
      players: [
        "Randy Benninger",
        "Dan Benninger",
        "Steve O'Brien",
        "Kevin Boudreault",
      ],
    },
    {
      hole: "Hole #2 - A",
      players: [
        "Steve Wall",
        "Jodi Dropko",
        "Josh Partington",
        "Mitchell Dawson",
      ],
    },
    {
      hole: "Hole #2 - B",
      players: ["JB Picard", "Drew Thompson", "Nick Rutterton", "Jeremy Cloet"],
    },
    {
      hole: "Hole #4 - A",
      players: [
        "Spencer Frystak",
        "Joe Kozicki",
        "Brandon Legere",
        'Benny "The Stapler" Lalonde',
      ],
    },
    {
      hole: "Hole #4 - B",
      players: ["James Seraphin", "Sean Morrow", "Eric Goodwin", "Mike Legere"],
    },
    {
      hole: "Hole #5 - A",
      players: ["Rem Benninger", "AJ Zelem", "Brendon Walsh", "Mark Stortini"],
    },
    {
      hole: "Hole #5 - B",
      players: ["Phil Poss", "Mike Gallo", "Jamie Adams", "Nick Calvesbert"],
    },
    {
      hole: "Hole #7 - A",
      players: [
        "Sean Jamieson",
        "Mike Tonkin",
        "Mike Belkoski",
        "Jordan Dougherty",
      ],
    },
    {
      hole: "Hole #7 - B",
      players: [
        "Nick Branderhorst",
        "Shea Armstrong",
        "Brock Steinheoff",
        "Johnny Rutter",
      ],
    },
    {
      hole: "Hole #9 - A",
      players: [
        "Taylor Dick",
        "Kyle Poirier",
        "Nick Heffernan",
        "Kelsey Dougherty",
      ],
    },
    {
      hole: "Hole #9 - B",
      players: ["Ted Smith", "Sandor Macsai", "Ian Dickson", "Mike Church"],
    },
    {
      hole: "Hole #10 - A",
      players: ["Cal Pasinek", "Ryan Kozicki", "Eric Harrison", "Mikey Aucoin"],
    },
    {
      hole: "Hole #10 - B",
      players: [
        "Kyle Hewson",
        "Jeremy Shortt",
        "Brady Barnard",
        "Timmer Logan",
      ],
    },
    {
      hole: "Hole #11 - A",
      players: ["Simon Frystak", "Noah Seymour", "Ty Goodwin", "Shawn Knelsen"],
    },
    {
      hole: "Hole #11 - B",
      players: ["Austin Lamb", "Devin Holmes", "Ty Wall", "Ern Fisher"],
    },
    {
      hole: "Hole #12 - A",
      players: ["Aiden Cloet", "Tommo O'Neill", "Joe Renton", "Ben Rempel"],
    },
    {
      hole: "Hole #12 - B",
      players: [
        "Connor Mackenzie",
        "Josh Johnson",
        "Alex Heimbuch",
        "Mark Lalonde",
      ],
    },
    {
      hole: "Hole #14 - A",
      players: [
        "Ben Chmiel",
        "Ryan Rewutzsky",
        "Rick Knelsen",
        "Corey MacLean",
      ],
    },
    {
      hole: "Hole #14 - B",
      players: ["Derek Waite", "JJ Fasching", "Joel Young", "Jay Knelsen"],
    },
    {
      hole: "Hole #16 - A",
      players: [
        "Mat Vanderheyden",
        "Devon MacLean",
        "Brett Pasinek",
        "Trevor Stickl",
      ],
    },
    {
      hole: "Hole #16 - B",
      players: [
        "Jon Saporsantos",
        "Kyle Kirktown",
        "Sam Bailey",
        "Joey Ferguson",
      ],
    },
    {
      hole: "Hole #18 - A",
      players: ["Doug Slack", "Steve Anger", "Wes O'Neill", "Matt Dyjack"],
    },
    {
      hole: "Hole #18 - B",
      players: [
        "Johnny Pearson",
        "Johnny Kozicki",
        "Steve Sonnenberg",
        "Rob Poss",
      ],
    },
  ];

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
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Tournament Teams
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-white/10 rounded p-3 backdrop-blur-sm"
            >
              <h2 className="font-bold mb-2">{team.hole}</h2>
              <ul className="space-y-1 text-sm">
                {team.players.map((player, idx) => (
                  <li key={idx}>{player}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/">
            <span className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
