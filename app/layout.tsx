import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AETHER | AI Automation Agency",
  description: "Premium AI Automation & Agentic Solutions.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ... metadata ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

