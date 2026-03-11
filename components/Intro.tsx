"use client";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="py-20 px-6 md:px-20 max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-body text-[#e1b258] text-xs uppercase mb-6">
            A New Standard
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-[#28362b] mb-8">
            More than a home.<br />A way of being.
          </h2>
          <hr className="rule-gold mb-8 w-16" />
          <p className="font-body text-[#594433] text-sm leading-[1.9] mb-6">
            Zenora is for those who want more from life — more comfort, more intention,
            and more elegance in everyday living. Designed as an affordable luxury community
            in the quiet corner of Goldwins, Zenora combines premium architecture with
            curated lifestyle spaces.
          </p>
          <p className="font-body text-[#594433] text-sm leading-[1.9]">
            Sky Garden, Aqua Lounge, and Star Deck — offering a calm, elevated way of living
            without leaving convenience behind.
          </p>
          <a
            href="#residences"
            className="inline-flex items-center gap-3 mt-10 font-body text-[10px] uppercase text-[#e1b258] hover:gap-5 transition-all duration-500 group"
          >
            Explore Residences
            <span className="w-8 h-px bg-[#e1b258] group-hover:w-12 transition-all duration-500" />
          </a>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/img/aerial-view-club-hosue.jpg"
            alt="Zenora architecture"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0b]/40 to-transparent" />
          <div className="absolute bottom-6 right-6 border border-[#e1b258]/30 w-16 h-16" />
        </div>
      </div>
    </section>
  );
}
