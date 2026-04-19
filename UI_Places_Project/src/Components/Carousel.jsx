import React from 'react';
import { Star } from 'lucide-react';

const Carousel = ({ places, currentIndex, loading, onPrev, onNext }) => {
  // Helper derived values
  const currentPlace = places.length > 0 ? places[currentIndex] : null;
  
  // Calculate neighbors based on currentIndex
  const prevIndex = (currentIndex - 1 + places.length) % places.length;
  const nextIndex = (currentIndex + 1) % places.length;
  
  const prevPlace = places.length > 0 ? places[prevIndex] : null;
  const nextPlace = places.length > 0 ? places[nextIndex] : null;

  // Handlers mapping to props
  const prevCard = onPrev;
  const nextCard = onNext;

  return (
    <div className="flex-1 w-full flex items-center justify-center overflow-visible py-2 sm:py-4">
      {loading ? (
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/10 border-t-white rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          <p className="text-[8px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] text-white/40 uppercase animate-pulse">Scanning frequencies...</p>
        </div>
      ) : places.length > 0 && currentPlace && (
        <div className="relative w-full max-w-6xl flex items-center justify-center gap-2 sm:gap-4 lg:gap-16 perspective-[2000px]">
          
          {/* Left Card */}
          {prevPlace && (
            <div 
              className="hidden lg:block w-48 xl:w-64 h-[300px] xl:h-[400px] rounded-2xl xl:rounded-[2rem] overflow-hidden glass-panel opacity-40 scale-[0.75] xl:scale-[0.85] -rotate-[15deg] translate-y-8 xl:translate-y-12 transition-all duration-500 cursor-pointer hover:opacity-60 hover:scale-[0.8] xl:hover:scale-[0.9] hover:-rotate-[12deg]"
              onClick={prevCard}
            >
              <img src={prevPlace.imageUrl} alt="" className="w-full h-full object-cover grayscale brightness-50" />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          )}

          {/* Center Card */}
          <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[480px] sm:h-[540px] md:h-[580px] lg:h-[620px] transition-all duration-700 animate-fade-in group z-20">
            {/* Badge Outside the Curve */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 z-40 bg-white text-black px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-[1.5rem] sm:rounded-bl-none text-[8px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center gap-1 sm:gap-2 animate-bounce-slow transform rotate-3">
              <Star size={10} className="sm:block hidden fill-black" />
              <Star size={8} className="sm:hidden fill-black" />
              <span>Recommended</span>
            </div>

            <div className="w-full h-full rounded-[2.5rem] overflow-hidden glass-panel border border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] relative bg-[#0a0a0a]">
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={currentPlace.imageUrl} 
                  alt={currentPlace.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Rating Tag Floating Left */}
              <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-20">
                 <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-1.5">
                    <Star size={8} className="sm:block hidden text-yellow-400 fill-yellow-400" />
                    <Star size={10} className="sm:hidden text-yellow-400 fill-yellow-400" />
                    <span className="text-[8px] sm:text-[10px] font-bold">{currentPlace.rating.toFixed(1)}</span>
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end h-1/2 bg-gradient-to-t from-black to-transparent">
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <span className="bg-white text-black text-[7px] sm:text-[9px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-black uppercase tracking-wider sm:tracking-widest">
                      {currentPlace.vibe}
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-white/60 font-medium tracking-wide uppercase">{currentPlace.distance}</span>
                  </div>
                  
                  <div>
                    <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light mb-1 sm:mb-2 leading-none tracking-tight line-clamp-2">{currentPlace.name}</h2>
                    <p className="text-[7px] sm:text-xs md:text-sm text-white/60 font-light italic leading-relaxed line-clamp-2">"{currentPlace.tagline}"</p>
                  </div>

                  {/* Bottom Pill Action */}
                  <div className="mt-2 sm:mt-3 md:mt-4 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-[1.5rem] p-1 sm:p-1.5 flex items-center justify-between border border-white/10 gap-2 sm:gap-0">
                    <div className="px-2 sm:px-4 flex flex-col">
                        <span className="text-[7px] sm:text-[10px] text-white/40 uppercase tracking-wider sm:tracking-widest font-bold">Status</span>
                        <span className="text-xs sm:text-[15px] text-white/90 font-medium">Open Now</span>
                    </div>
                    <button className="bg-white text-black px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-[1.2rem] text-[7px] sm:text-[10px] font-black hover:scale-105 active:scale-95 transition-all uppercase tracking-wider sm:tracking-widest shadow-lg whitespace-nowrap">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          {nextPlace && (
            <div 
              className="hidden lg:block w-48 xl:w-64 h-[300px] xl:h-[400px] rounded-2xl xl:rounded-[2rem] overflow-hidden glass-panel opacity-40 scale-[0.75] xl:scale-[0.85] rotate-[15deg] translate-y-8 xl:translate-y-12 transition-all duration-500 cursor-pointer hover:opacity-60 hover:scale-[0.8] xl:hover:scale-[0.9] hover:rotate-[12deg]"
              onClick={nextCard}
            >
              <img src={nextPlace.imageUrl} alt="" className="w-full h-full object-cover grayscale brightness-50" />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Carousel;