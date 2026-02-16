
import React from 'react';
import { Edit3, Heart, User } from 'lucide-react';

const SideBar = () => {
  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2 glass-panel p-2 rounded-2xl z-50 animate-fade-in delay-300 border border-white/10 bg-white/5 backdrop-blur-md">
      <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 text-white/40 hover:text-white transition-all">
        <Edit3 size={18} />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 text-white/40 hover:text-white transition-all">
        <Heart size={18} />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 text-white/40 hover:text-white transition-all">
        <User size={18} />
      </button>
    </aside>
  );
};

export default SideBar;
