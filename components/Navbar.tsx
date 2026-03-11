"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Residences", href: "#residences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-[#ab948a]/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className={`font-display text-xl transition-colors duration-700 ${scrolled ? "text-[#28362b]" : "text-white"}`}>ZENORA</span>
          <span className={`font-body text-[10px] uppercase transition-colors duration-700 ${scrolled ? "text-[#e1b258]" : "text-[#e1b258]"}`}>by ZenVistas</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-[11px] uppercase transition-all duration-500 relative group ${scrolled ? "text-[#594433] hover:text-[#28362b]" : "text-white/90 hover:text-white"}`}
            >
              {l.label}
              <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${scrolled ? "bg-[#e1b258]" : "bg-white"}`}></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center gap-2 border text-[10px] uppercase px-5 py-2.5 transition-all duration-500 hover:scale-105 hover:shadow-lg ${scrolled ? "border-[#e1b258]/60 text-[#e1b258] hover:bg-[#e1b258] hover:text-white" : "border-white/40 text-white hover:bg-white hover:text-[#28362b]"}`}
        >
          Enquire
        </a>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors duration-700 ${scrolled ? "text-[#28362b]" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#ab948a]/20 px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-[11px] uppercase text-[#594433] hover:text-[#28362b] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="border border-[#e1b258]/60 text-[#e1b258] text-[10px] uppercase px-5 py-3 text-center hover:bg-[#e1b258] hover:text-white transition-all duration-300"
          >
            Enquire
          </a>
        </div>
      )}
    </header>
  );
}
