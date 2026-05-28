import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amudeeshan.ai"),
  title: "Amudeeshan Srinivasan | AI Engineer",
  description:
    "Portfolio for Amudeeshan Srinivasan, an AI Systems and LLM Engineer building local-first AI, agentic systems, RAG pipelines, voice AI, and runtime infrastructure.",
  openGraph: {
    title: "Amudeeshan Srinivasan | AI Engineer",
    description:
      "Local-first AI systems, multi-agent architectures, RAG pipelines, voice AI, and intelligent orchestration platforms.",
    images: ["/images/ai-os-hero.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
