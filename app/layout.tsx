import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = localFont({
  src: [
    {
      path: "../public/fonts/BebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bebas",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Witness Hub | The Ultimate LeBron & Cavs Shrine",
  description:
    "A tongue-in-cheek but genuinely useful Cleveland Cavaliers and LeBron James fan shrine. Why LeBron is the GOAT, live stats, and more.",
  icons: {
    icon: "/icons/witnesshub favicon.png",
  },
  openGraph: {
    title: "Witness Hub | The Ultimate LeBron & Cavs Shrine",
    description: "Why LeBron is the GOAT. Live stats, countdowns, and more.",
    images: ["/icons/witnesshub favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
