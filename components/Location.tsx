"use client";
import Image from "next/image";

const proximities = [
  { place: "Coimbatore Airport", dist: "5 km" },
  { place: "KCT Tech Park", dist: "10 min" },
  { place: "Shri Lakshmi Medical Center", dist: "10 min" },
  { place: "Reliance Mart", dist: "10 min" },
  { place: "Top Schools", dist: "10 min" },
  { place: "Ooty Access", dist: "Nilgiri foothills" },
];

export default function Location() {
  return (
    <section id="location" className="py-32">
      <div className="px-6 md:px-20 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-[#e1b258] text-xs uppercase mb-4">Location</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#28362b] mb-8">Know your<br />neighbourhood</h2>
            <p className="font-body text-[#594433] text-sm leading-[1.9] mb-10">
              Goldwins offers calm neighbourhood living with direct access to essentials.
              Steady development, strong residential demand, and the quiet confidence of
              a location that has already arrived.
            </p>
            <div className="flex flex-col gap-0">
              {proximities.map((p, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-[#ab948a]/20">
                  <span className="font-body text-[#594433] text-sm">{p.place}</span>
                  <span className="font-body text-[#e1b258] text-xs">{p.dist}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/img/street-view.jpg"
              alt="Goldwins, Coimbatore"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#28362b]/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="font-display text-2xl text-white">Goldwins</p>
              <p className="font-body text-[#e1d5c9] text-xs uppercase mt-1">Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
