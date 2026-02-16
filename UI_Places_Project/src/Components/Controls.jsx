import React from 'react'
import { ChevronLeft, ChevronRight, Maximize2, RotateCw } from 'lucide-react'

const Controls = ({ currentIndex, total, onPrev, onNext, onReload }) => {
  return (
    <footer className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in delay-200 mb-4 z-20 relative">
      <div className="flex items-center gap-8 border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full shadow-lg">
        <button 
          onClick={onPrev}
          className="text-white/40 hover:text-white hover:scale-110 active:scale-95 transition-all p-1"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>

        <button 
          onClick={onNext}
          className="text-white/40 hover:text-white hover:scale-110 active:scale-95 transition-all p-1"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex gap-4">
        <button className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-white/60 hover:text-white/90">
          <Maximize2 size={20} />
        </button>
        <button 
          onClick={onReload}
          className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-white/60 hover:text-white/90"
        >
          <RotateCw size={20} />
        </button>
      </div>
    </footer>
  )
}

export default Controls