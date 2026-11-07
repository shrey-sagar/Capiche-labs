import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ScrollProgress from "@/components/effects/ScrollProgress";
import PageLoader from "@/components/effects/PageLoader";
import SmoothScroll from "@/components/effects/SmoothScroll";
import FloatingBlobs from "@/components/effects/FloatingBlobs";
import ChatWidget from "@/components/chatbot/ChatWidget";

import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capiche Labs",
  description: "Building Digital Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Loading Screen */}
        <PageLoader />

        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Animated Background */}
        <FloatingBlobs />

        {/* Smooth Scroll Wrapper */}
        <SmoothScroll>
          {children}
          <ChatWidget />
        </SmoothScroll>

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={4000}
        />
      </body>
    </html>
  );
}