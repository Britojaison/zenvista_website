"use client";
import Image from "next/image";

const amenities = [
  { name: "Clubhouse", desc: "The social heart of Zenora. Refined interiors, curated spaces, and a community that shares your sensibility.", img: "/img/human-view-club-house.jpg" },
  { name: "Café", desc: "Where conversations flow as smoothly as your morning brew. A space designed for connection and quiet contemplation.", img: "/img/cafe-.jpg" },
  { name: "Private Theatre", desc: "Cinema-grade entertainment in the comfort of your community. Because evenings should be extraordinary.", img: "/img/private-theatre.jpg" },
  { name: "Spa & Salon", desc: "A dedicated space for movement, recovery, and ritual. Because well-being is not an afterthought.", img: "/img/spa--saloon-.jpg" },
  { name: "Paddle Court", desc: "Stay active, stay social. A premium court for those who value both fitness and finesse.", img: "/img/paddle-court.jpg" },
  { name: "Play Area", desc: "Thoughtfully designed spaces where the youngest residents can explore, play, and grow.", img: "/img/play-area.jpg" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-32 bg-white">
      <div className="px-6 md:px-20 max-w-screen-xl mx-auto">
        <div className="mb-20">
          <p className="font-body text-[#e1b258] text-xs uppercase mb-4">Lifestyle</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#28362b] max-w-lg">Spaces that shape how you live</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ab948a]/10">
          {amenities.map((a) => (
            <div key={a.name} className="group relative overflow-hidden bg-[#f5f1ed]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={a.img}
                  alt={a.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl text-[#28362b] mb-3">{a.name}</h3>
                <p className="font-body text-[#594433] text-xs leading-relaxed">{a.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-[#e1b258] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
