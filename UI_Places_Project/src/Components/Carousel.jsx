
import React from 'react';
import PlaceCard from './PlaceCard';

const Carousel = ({ places, currentIndex, loading, onPrev, onNext }) => {
  if (loading) {
    return (
      <div className="flex-1 w-full flex flex-col items-center justify-center gap-4 min-h-[500px]">
        <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        <p className="text-xs font-light tracking-widest text-white/50 animate-pulse">DISCOVERING VIBES...</p>
      </div>
    );
  }

  if (!places || places.length === 0) {
     return (
        <div className="flex-1 w-full flex items-center justify-center text-white/50">
            No places found for this vibe.
        </div>
     )
  }

  // Helper to get circular index, handling negative numbers correctly
  const getIndex = (offset) => {
    const len = places.length;
    return (currentIndex + offset + len) % len; // Ensure positive result
  };

  const farLeftIndex = getIndex(-2);
  const leftIndex = getIndex(-1);
  const centerIndex = getIndex(0);
  const rightIndex = getIndex(1);
  const farRightIndex = getIndex(2);

  return (
    <div className="flex-1 w-full flex items-center justify-center overflow-visible z-10 perspective-[1200px]"> 
      <div className="relative w-full max-w-[1400px] h-[600px] flex items-center justify-center">
        
        {/* Far Left Card (-2) */}
        <div 
          className="absolute left-[10%] z-0 scale-75 opacity-40 blur-[1px] -rotate-12 transition-all duration-700 ease-out origin-center hover:z-50 hover:opacity-100 hover:scale-90 hover:rotate-0"
           onClick={() => onPrev()} // Or onPrevPrev if implemented
        >
           <PlaceCard place={places[farLeftIndex]} isActive={false} />
        </div>

        {/* Left Card (-1) */}
        <div 
          className="absolute left-[22%] z-10 scale-90 opacity-80 -rotate-6 transition-all duration-700 ease-out origin-center cursor-pointer hover:z-50 hover:scale-95 hover:rotate-0"
          onClick={onPrev}
        >
          <PlaceCard place={places[leftIndex]} isActive={false} />
        </div>

        {/* Center Card (0) */}
        <div className="absolute z-30 scale-105 transition-all duration-700 ease-out origin-center shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)]">
            <PlaceCard place={places[centerIndex]} isActive={true} />
        </div>

        {/* Right Card (+1) */}
        <div 
          className="absolute right-[22%] z-10 scale-90 opacity-80 rotate-6 transition-all duration-700 ease-out origin-center cursor-pointer hover:z-50 hover:scale-95 hover:rotate-0"
          onClick={onNext}
        >
           <PlaceCard place={places[rightIndex]} isActive={false} />
        </div>

        {/* Far Right Card (+2) */}
        <div 
          className="absolute right-[10%] z-0 scale-75 opacity-40 blur-[1px] rotate-12 transition-all duration-700 ease-out origin-center hover:z-50 hover:opacity-100 hover:scale-90 hover:rotate-0"
           onClick={() => onNext()} // Or onNextNext
        >
           <PlaceCard place={places[farRightIndex]} isActive={false} />
        </div>

      </div>
    </div>
  );
};

export default Carousel;