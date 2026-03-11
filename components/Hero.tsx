"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="https://qgulurniv017kjjt.public.blob.vercel-storage.com/zenora_main_video.mp4"
        muted
        loop
        playsInline
        poster="/img/street-view.jpg"
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-body text-[#e1b258] text-sm uppercase mb-6 opacity-90">
          Goldwins, Coimbatore
        </p>
        <h1 className="font-display text-[clamp(2rem,6vw,5rem)] leading-[1.05] text-white whitespace-nowrap" style={{ fontWeight: 300, fontStyle: 'italic' }}>
          Crafted for the Chosen
        </h1>
        <div className="w-16 h-px bg-[#e1b258] opacity-60 my-8" />
        <p className="font-body text-white text-sm md:text-base max-w-md leading-relaxed">
          This is not escape. This is elevation.
        </p>
        <a
          href="#residences"
          className="mt-12 border border-white/40 text-white text-[10px] uppercase px-8 py-4 hover:bg-white hover:text-[#28362b] transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          Discover Zenora
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-body text-[9px] uppercase text-white/80">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/80 to-transparent" />
      </div>
    </section>
  );
}
