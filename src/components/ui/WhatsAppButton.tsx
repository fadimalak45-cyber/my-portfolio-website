import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/923221971632?text=Hello%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20project";

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center gap-2">
      {/* Editorial Tooltip in Mono */}
      <div 
        role="tooltip"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none px-2.5 py-1 rounded bg-editorial-ink text-editorial-bg font-mono text-[11px] uppercase tracking-wider shadow-sm whitespace-nowrap"
      >
        WhatsApp // Direct
      </div>

      {/* 52px Clean Circle Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct message on WhatsApp"
        className="relative w-[52px] h-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform duration-150 focus:outline-none"
      >
        {/* Subtle pulse ring (no glow) */}
        <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-40 pointer-events-none" />
        <FaWhatsapp className="relative z-10 w-6 h-6 text-white" />
      </a>
    </div>
  );
};
