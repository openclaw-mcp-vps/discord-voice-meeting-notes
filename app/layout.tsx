import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoteBot — Auto-transcribe Discord Voice Calls",
  description: "Records Discord voice channels, transcribes with AI, and generates structured meeting notes with action items. Perfect for gaming companies, Discord-first startups, and remote dev teams.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0620f669-4358-427d-8cf4-87000538f2b7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
