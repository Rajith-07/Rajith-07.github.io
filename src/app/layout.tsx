import { ScrollControls } from "@/components/ScrollControls";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rajith S",
  description:
    "Portfolio of Rajith S — showcasing AI, ML, Cloud, DevOps, and full-stack projects, research, and experience.",
  openGraph: {
    title: "Rajith S",
    description:
      "Exploring the intersection of AI, ML, Cloud, DevOps, and web engineering through research-backed projects.",
    siteName: "Rajith S Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajith S",
    description:
      "Building clean interfaces and intelligent systems that bridge AI, ML, Cloud, DevOps, and web engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[color:var(--background)] text-[color:var(--foreground)]`}
      >
        <ScrollControls />
        <div className="relative flex min-h-screen justify-center px-4 py-10 sm:px-8 lg:px-12">
          <div className="z-10 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
