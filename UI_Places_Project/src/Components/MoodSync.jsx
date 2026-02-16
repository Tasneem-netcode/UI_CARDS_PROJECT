
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
    <nav className="flex flex-wrap items-center justify-center gap-3 mt-4 animate-fade-in delay-100 z-20 relative">
      {Object.values(VibeType).map((vibe) => (
        <button
          key={vibe}
          onClick={() => onSelectVibe(vibe)}
          className={`px-6 py-2 rounded-full text-[16px] font-bold uppercase tracking-widest transition-all glass-button 
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
