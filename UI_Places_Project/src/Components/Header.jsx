import React from 'react'
import { ChevronLeft, Search, Plus , MapPinPlus } from 'lucide-react'

const Header = ({ location }) => {
  return (
    <header className="w-full flex justify-between items-center max-w-7xl animate-fade-in z-20 relative gap-2 sm:gap-4">
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
          <ChevronLeft size={16} className="sm:block hidden text-white" />
          <ChevronLeft size={20} className="sm:hidden text-white" />
        </button>
        <h1 className="text-base sm:text-lg md:text-xl font-extralight tracking-[0.1em] sm:tracking-[0.2em] uppercase text-white whitespace-nowrap">Explore</h1>
      </div>
      
      <div className="hidden lg:flex border border-white/10 bg-white/5 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-lg font-medium tracking-wider text-white/80 items-center gap-2">
        <MapPinPlus size={16} className="sm:block hidden text-white/70" />
        <MapPinPlus size={14} className="sm:hidden text-white/70" />
        {location}
      </div>
      
      <div className="md:hidden text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 font-medium text-white/80 whitespace-nowrap">
        {location.split(',')[0]}
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
          <Search size={16} className="sm:block hidden text-white/70" />
          <Search size={18} className="sm:hidden text-white/70" />
        </button>
        <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
          <Plus size={16} className="sm:block hidden text-white/70" />
          <Plus size={18} className="sm:hidden text-white/70" />
        </button>
      </div>
    </header>
  )
}

export default Header