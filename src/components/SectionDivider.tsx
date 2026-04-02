import React from "react";

const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center py-8 w-full">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent flex-grow max-w-[300px]" />
      <div className="flex items-center gap-4 px-8">
        <span className="text-gold text-[12px] opacity-80">✦</span>
        <div className="relative w-10 h-10 flex items-center justify-center opacity-90">
          {/* Subtle cosmic glow */}
          <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full" />
          <svg 
            viewBox="0 0 24 24" 
            className="w-full h-full text-gold animate-slow-spin" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.2"
          >
            <circle cx="12" cy="12" r="10" strokeDasharray="3 3"/>
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        </div>
        <span className="text-gold text-[12px] opacity-80">✦</span>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent flex-grow max-w-[300px]" />
    </div>
  );
};

export default SectionDivider;
