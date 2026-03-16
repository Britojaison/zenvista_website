"use client";
import { useState } from "react";
import { X } from "lucide-react";

interface LeadFormProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadForm({ open, onClose }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0e0c0b]/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-[#f5f1ed] w-full max-w-md p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#594433] hover:text-[#28362b] transition-colors"
          aria-label="Close form"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-px bg-[#e1b258] mx-auto mb-6" />
            <h3 className="font-display text-2xl text-[#28362b] mb-4">Thank you</h3>
            <p className="font-body text-[#594433] text-base leading-relaxed">
              We'll be in touch shortly to help you discover Zenora.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-8">
              <p className="font-body text-[#e1b258] text-sm uppercase mb-3">
                Exclusive Access
              </p>
              <h3 className="font-display text-3xl text-[#28362b] mb-2">
                Discover Zenora
              </h3>
              <div className="w-10 h-px bg-[#e1b258] opacity-60" />
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-5"
            >
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                { id: "phone", label: "Contact Number", type: "tel", placeholder: "+91" },
                { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
              ].map((field) => (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label
                    htmlFor={field.id}
                    className="font-body text-xs uppercase text-[#594433]/70"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="bg-transparent border-b border-[#ab948a]/30 py-3 font-body text-base text-[#28362b] placeholder:text-[#ab948a]/50 focus:border-[#e1b258] focus:outline-none transition-colors"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="mt-4 bg-[#28362b] text-[#e1d5c9] font-body text-xs uppercase py-4 hover:bg-[#e1b258] hover:text-[#28362b] transition-all duration-500"
              >
                Download Brochure
              </button>

              <p className="font-body text-[#ab948a] text-[10px] text-center mt-1">
                By submitting, you agree to receive communication from ZenVistas.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
