"use client";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  quote?: string;
  author?: string;
}

export default function FullBleedImage({ src, alt, quote, author }: Props) {
  return (
    <section className="relative h-[70vh] md:h-screen overflow-hidden">
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#0e0c0b]/40" />
      {quote && (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <p className="font-display text-[clamp(1.5rem,3.5vw,2.8rem)] text-[#e1d5c9] leading-[1.3] italic">
              &ldquo;{quote}&rdquo;
            </p>
            {author && (
              <p className="font-body text-[#e1b258] text-xs uppercase mt-6">— {author}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
