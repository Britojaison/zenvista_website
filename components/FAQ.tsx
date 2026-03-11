"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What makes Zenora different from other villa communities?",
    a: "Zenora offers villas with rooftop lifestyle spaces and multiple premium amenities. With just 59 units, it is designed for upgrade buyers who want premium living in a quieter residential pocket, just 10–15 minutes from key city conveniences.",
  },
  {
    q: "Why is Goldwins the right location?",
    a: "Goldwins provides calm neighbourhood living with direct access to essentials like Shri Lakshmi Medical Center, Reliance Mart, KCT Tech Park, schools and retail zones. The area has steady development and strong residential demand.",
  },
  {
    q: "Is Zenora RERA registered?",
    a: "Yes. ZenVistas Zenora is fully RERA registered with planning and building approvals from local authorities, ensuring complete transparency and compliance.",
  },
  {
    q: "What is the investment potential?",
    a: "Zenora is a low-density luxury villa community offering exclusivity, privacy and premium planning. With a strong owner profile and location advantages like Nilgiri views and Ooty access, it offers strong rental and resale potential.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="px-6 md:px-20 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="font-body text-[#e1b258] text-xs uppercase mb-4">
              Questions
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#28362b]">
              Frequently<br />asked
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-0">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-[#ab948a]/20">
                <button
                  className="w-full flex items-start justify-between gap-4 py-6 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-body text-[#28362b] text-sm leading-relaxed">{f.q}</span>
                  <span className="text-[#e1b258] shrink-0 mt-0.5">
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {open === i && (
                  <p className="font-body text-[#594433] text-sm leading-[1.9] pb-6">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
