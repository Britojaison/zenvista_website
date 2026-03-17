"use client";
import { useState } from "react";
import Image from "next/image";

const neighbourhoodData = {
  Travel: [
    { place: "Coimbatore International Airport", dist: "5.2 km (13 mins)" },
    { place: "Peelamedu Railway Station", dist: "10.8 km (24 mins)" },
    { place: "Coimbatore Central Railway Station", dist: "14.4 km (23 mins)" },
    { place: "Kaniyur Toll Gate", dist: "11.4 km (21 mins)" },
    { place: "Singanallur Bus Stand", dist: "10.4 km (24 mins)" },
    { place: "Gandhipuram Bus Stand", dist: "13.8 km (26 mins)" },
  ],
  Education: [
    { place: "KMCH Medical College", dist: "5.1 km (13 mins)" },
    { place: "Coimbatore Institute of Technology", dist: "6.0 km (13 mins)" },
    { place: "Dr.G.R.Damodaran College of Science", dist: "6.1 km (14 mins)" },
    { place: "GRD Public School", dist: "6.2 km (14 mins)" },
    { place: "PSG College of Arts and Science", dist: "6.3 km (13 mins)" },
    { place: "NGP Institution of Arts and Science", dist: "2.0 km (6 mins)" },
    { place: "Chandrakanti Public School", dist: "4.3 km (12 mins)" },
    { place: "Pallikoodam Rak", dist: "7.8 km (17 mins)" },
    { place: "Suguna PIP School", dist: "3.3 km (9 mins)" },
    { place: "Sri Vivekananda Matric", dist: "2.4 km (6 mins)" },
    { place: "CBSE School (Reeds)", dist: "1.3 km (3 mins)" },
  ],
  Work: [
    { place: "Tidel Park", dist: "9.4 km (22 mins)" },
    { place: "Cognizant", dist: "12.4 km (31 mins)" },
    { place: "Bosch Global Software", dist: "12.2 km (31 mins)" },
    { place: "KGISL Campus", dist: "8.9 km (23 mins)" },
  ],
  Shopping: [
    { place: "FUNMALL", dist: "8.2 km (17 mins)" },
    { place: "PROZONE", dist: "9.7 km (24 mins)" },
    { place: "BROADWAY Cinemas", dist: "3.8 km (9 mins)" },
    { place: "DMart Singanallur", dist: "9.0 km (21 mins)" },
    { place: "DMart Chinniyampalayam", dist: "4.8 km (9 mins)" },
    { place: "DMart Sulur", dist: "15.1 km (27 mins)" },
  ],
};

type Category = keyof typeof neighbourhoodData;
const categories = Object.keys(neighbourhoodData) as Category[];

export default function Location() {
  const [activeCategory, setActiveCategory] = useState<Category>("Travel");

  return (
    <section id="location" className="pt-16 pb-32">
      <div className="px-6 md:px-20 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-[#e1b258] text-xs uppercase mb-4">Location</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#28362b] mb-8">Know your<br />neighbourhood</h2>
            <p className="font-body text-[#594433] text-base leading-[1.9] mb-10">
              Goldwins offers calm neighbourhood living with direct access to essentials.
              Steady development, strong residential demand, and the quiet confidence of
              a location that has already arrived.
            </p>

            {/* Tabs */}
            <div className="relative flex w-full border-b border-[#ab948a]/20 mb-8 overflow-x-auto hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative flex-1 font-body text-xs sm:text-sm uppercase tracking-wider px-2 sm:px-6 py-3 transition-colors duration-400 text-center whitespace-nowrap ${
                    activeCategory === cat ? "text-[#28362b]" : "text-[#ab948a] hover:text-[#594433]"
                  }`}
                  style={{ fontFamily: "'BW Diagrid', sans-serif" }}
                >
                  {cat}
                </button>
              ))}
              {/* Sliding underline indicator */}
              <span
                className="absolute bottom-0 h-[2px] bg-[#e1b258] transition-all duration-500 ease-in-out"
                style={{
                  left: `${(categories.indexOf(activeCategory) * 100) / categories.length}%`,
                  width: `${100 / categories.length}%`,
                }}
              />
            </div>

            <div className="flex flex-col gap-0 max-h-[360px] overflow-y-auto sm:pr-4">
              {neighbourhoodData[activeCategory].map((p, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-[#ab948a]/20">
                  <span className="font-body text-[#594433] text-base" style={{ fontFamily: "'BW Diagrid', sans-serif" }}>{p.place}</span>
                  <span className="font-body text-[#e1b258] text-xs text-right ml-4 shrink-0" style={{ fontFamily: "'BW Diagrid', sans-serif" }}>{p.dist}</span>
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
