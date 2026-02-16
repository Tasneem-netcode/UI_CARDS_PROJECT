import React from 'react'
import { ChevronLeft, Search, Plus } from 'lucide-react'

const Header = ({ location }) => {
  return (
    <header className="w-full flex justify-between items-center max-w-7xl animate-fade-in z-20 relative">
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
          <ChevronLeft size={20} className="text-white" />
        </button>
        <h1 className="text-xl font-extralight tracking-[0.2em] uppercase text-white">Explore</h1>
      </div>
      
      <div className="hidden md:flex border border-white/10 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full text-xs font-medium tracking-wider text-white/80">
        {location}
      </div>

      <div className="flex items-center gap-3">
        <button className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
          <Search size={18} className="text-white/70" />
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
          <Plus size={18} className="text-white/70" />
        </button>
      </div>
    </header>
  )
}

export default Header