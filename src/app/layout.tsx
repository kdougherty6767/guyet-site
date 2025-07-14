import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guyet Invitational",
  description: "Official website of the Guyet Invitational golf tournament",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-gray-100 border-b">
          <nav className="flex space-x-4">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
