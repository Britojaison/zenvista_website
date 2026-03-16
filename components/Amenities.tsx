"use client";
import Image from "next/image";

const amenities = [
  {
    name: "Meditation Centre",
    desc: "A quiet sanctuary within Zenora. Designed for reflection, stillness, and moments away from the rhythm of the day.",
    img: "/images/AMENITIES/Meditation Centre.png",
  },
  {
    name: "Board Room",
    desc: "A private meeting space within the community. For discussions, decisions, and work that demands focus.",
    img: "/images/AMENITIES/Board Room.png",
  },
  {
    name: "Open Workstations",
    desc: "Workspaces that extend beyond the home. Thoughtfully placed to support productivity within a calm environment.",
    img: "/images/AMENITIES/Open Workstations.png",
  },
  {
    name: "Clubhouse",
    desc: "A shared address within Zenora. A place where conversations, quiet gatherings, and community moments naturally unfold.",
    img: "/images/AMENITIES/Clubhouse.png",
  },
  {
    name: "Swimming Pool",
    desc: "A calm water retreat within the landscape. Meant for slow laps, quiet afternoons, and a refreshing pause.",
    img: "/images/AMENITIES/Swimming Pool.png",
  },
  {
    name: "Walking Paths",
    desc: "Pathways that move gently through Zenora. Designed for morning walks, evening conversations, and unhurried movement.",
    img: "/images/AMENITIES/Walking Paths.png",
  },
  {
    name: "Multi Sport Court",
    desc: "A versatile court where recreation finds its place. From quick games to longer evenings of sport.",
    img: "/images/AMENITIES/Multi Sport Court.png",
  },
  {
    name: "Children's Play Garden",
    desc: "A lively corner of the community. Designed for exploration, imagination, and carefree play.",
    img: "/images/AMENITIES/Childrens-Play-Garden.png",
  },
  {
    name: "Community Lounge",
    desc: "An informal setting for conversation and connection. A place where neighbours meet beyond the everyday.",
    img: "/images/AMENITIES/Open Workstations.png",
  },
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
                <p className="font-body text-[#594433] text-base leading-relaxed">{a.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-[#e1b258] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
