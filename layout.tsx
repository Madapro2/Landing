import type { Metadata } from "next";
import { Fraunces, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

// Element 3: SEO-optimized title/description with keywords.
// Element 1 (keyword-bearing URL) is a routing/deployment concern —
// deploy this page at a slug like /masterclass or /the-only-voice-in-the-room.
export const metadata: Metadata = {
  title: "The Only Voice In The Room | A Masterclass In Authority",
  description:
    "A 30-minute live masterclass in authority and persuasion. Ninety-nine seats, opened once a week, every Saturday night.",
  keywords: [
    "authority masterclass",
    "public speaking masterclass",
    "executive communication training",
    "persuasion masterclass",
  ],
  openGraph: {
    title: "The Only Voice In The Room",
    description:
      "A 30-minute live masterclass in authority. Ninety-nine seats. Once a week.",
    images: ["/images/og-image.jpg"], // TODO: add a real 1200x630 OG image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${newsreader.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
