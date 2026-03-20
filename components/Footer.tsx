export default function Footer() {
  return (
    <footer className="bg-[#28362b] border-t border-[#ab948a]/10 py-16 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img 
              src="/images/zenora_logo.svg" 
              alt="Zenora Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="font-body text-[#b9b4a8] text-base leading-relaxed max-w-xs">
              A luxury villa community in Goldwins, Coimbatore.
              Elevation without compromise.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <p className="font-body text-[9px] uppercase text-[#ab948a] mb-2">
              Navigate
            </p>
            {["Residences", "Amenities", "Gallery", "Location", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-body text-[#b9b4a8] text-xs hover:text-[#e1d5c9] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="font-body text-[9px] uppercase text-[#ab948a] mb-2">
              Contact
            </p>
            <a href="mailto:info@zenvistas.co.in" className="font-body text-[#e1b258] text-xs hover:underline">
              info@zenvistas.co.in
            </a>
            <a href="https://zenvistas.co.in" className="font-body text-[#e1b258] text-xs hover:underline">
              zenvistas.co.in
            </a>
            <p className="font-body text-[#b9b4a8] text-base leading-relaxed">
              Goldwins, Coimbatore<br />Tamil Nadu, India
            </p>
            
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#ab948a]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[#ab948a] text-[10px]">
            © {new Date().getFullYear()} ZenVistas. All rights reserved.
          </p>
          <p className="font-body text-[#ab948a] text-[10px]">
            RERA Registered · TN/XXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}
