"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const images = [
  { src: "/img/aerial-view-club-hosue.jpg", span: "col-span-2 row-span-2" },
  { src: "/img/master-bedroom-view-1.jpg", span: "" },
  { src: "/img/bedroom01.jpg", span: "" },
  { src: "/img/human-view-club-house.jpg", span: "col-span-2" },
  { src: "/img/bathroom.jpg", span: "" },
  { src: "/img/cafe-.jpg", span: "" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 px-6 md:px-20 max-w-screen-xl mx-auto">
      <div className="mb-16">
        <p className="font-body text-[#e1b258] text-xs uppercase mb-4">Gallery</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#28362b]">See it to believe it</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[200px]">
        {images.map((img, i) => (
          <div key={i} className={`${img.span} relative overflow-hidden cursor-pointer group`} onClick={() => setLightbox(img.src)}>
            <Image
              src={img.src}
              alt={`Zenora gallery ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[#28362b]/0 group-hover:bg-[#28362b]/10 transition-all duration-500" />
          </div>
        ))}
      </div>
      <p className="font-body text-[#594433] text-[10px] uppercase mt-6">* Images are for representation purpose</p>
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-[#28362b]/95 flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-[#e1b258] transition-colors" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={24} />
          </button>
          <div className="relative w-full max-w-5xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox} alt="Gallery" fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      )}
    </section>
  );
}
