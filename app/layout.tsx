import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenora — Crafted for the Chosen",
  description:
    "An affordable luxury villa community in Goldwins, Coimbatore. Sky Garden, Aqua Lounge, Star Deck — elevation without compromise.",
  openGraph: {
    title: "Zenora by ZenVistas",
    description: "This is not escape. This is elevation.",
    siteName: "Zenora",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://qgulurniv017kjjt.public.blob.vercel-storage.com/zenora_main_video.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/fonts/blacker-display-webfont/Blacker-Display-Light-Italic-trial.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/blacker-display-webfont/Blacker-Display-Regular-trial.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/bw-diagrid/BwDiagrid-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
