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
      <body>{children}</body>
    </html>
  );
}
