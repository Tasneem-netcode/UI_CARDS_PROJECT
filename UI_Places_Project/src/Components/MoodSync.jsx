
import React from 'react';

const VibeType = {
  ALL: 'All Vibes',
  COZY: 'Cozy',
  ENERGETIC: 'Energetic',
  ROMANTIC: 'Romantic',
  MODERN: 'Modern',
};

const MoodSync = ({ selectedVibe, onSelectVibe }) => {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4 animate-fade-in delay-100 z-20 relative px-2 sm:px-0">
      {Object.values(VibeType).map((vibe) => (
        <button
          key={vibe}
          onClick={() => onSelectVibe(vibe)}
          className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-[14px] md:text-[16px] font-bold uppercase tracking-wider sm:tracking-widest transition-all glass-button whitespace-nowrap 
            ${selectedVibe === vibe 
              ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105' 
              : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
        >
          {vibe}
        </button>
      ))}
    </nav>
  );
};

export default MoodSync;
