import React from 'react'
import { ChevronLeft, ChevronRight, Maximize2, RotateCw } from 'lucide-react'

const Controls = ({ currentIndex, total, onPrev, onNext, onReload }) => {
  return (
    <footer className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6 animate-fade-in delay-200 mb-2 sm:mb-4 z-20 relative">
      <div className="flex items-center gap-3 sm:gap-6 md:gap-8 border border-white/10 bg-white/5 backdrop-blur-md px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-lg">
        <button 
          onClick={onPrev}
          className="text-white/40 hover:text-white hover:scale-110 active:scale-95 transition-all p-1"
        >
          <ChevronLeft size={18} className="sm:block hidden" />
          <ChevronLeft size={20} className="sm:hidden" />
        </button>
        
        <div className="flex gap-1.5 sm:gap-2">
          {Array.from({ length: total }).map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-6 sm:w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-1.5 sm:w-2 bg-white/20'}`}
            />
          ))}
        </div>

        <button 
          onClick={onNext}
          className="text-white/40 hover:text-white hover:scale-110 active:scale-95 transition-all p-1"
        >
          <ChevronRight size={18} className="sm:block hidden" />
          <ChevronRight size={20} className="sm:hidden" />
        </button>
      </div>

      <div className="flex gap-2 sm:gap-3 md:gap-4">
        <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-white/60 hover:text-white/90">
          <Maximize2 size={16} className="sm:block hidden" />
          <Maximize2 size={18} className="sm:hidden" />
        </button>
        <button 
          onClick={onReload}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-white/60 hover:text-white/90"
        >
          <RotateCw size={16} className="sm:block hidden" />
          <RotateCw size={18} className="sm:hidden" />
        </button>
      </div>
    </footer>
  )
}

export default Controls