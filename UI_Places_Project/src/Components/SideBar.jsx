
import React, { useState } from 'react';
import { Edit3, Heart, User } from 'lucide-react';

const SideBar = ({ currentPlace, favorites = [], onToggleFavorite }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [showNotification, setShowNotification] = useState('');

  const isFavorited = currentPlace && favorites.includes(currentPlace.id);

  const handleEdit = () => {
    setActiveButton('edit');
    setShowNotification('Edit mode activated');
    setTimeout(() => setActiveButton(null), 600);
    setTimeout(() => setShowNotification(''), 2000);
  };

  const handleFavorite = () => {
    if (currentPlace) {
      onToggleFavorite(currentPlace.id);
      setActiveButton('favorite');
      setShowNotification(isFavorited ? 'Removed from favorites' : 'Added to favorites');
      setTimeout(() => setActiveButton(null), 600);
      setTimeout(() => setShowNotification(''), 2000);
    }
  };

  const handleProfile = () => {
    setActiveButton('profile');
    setShowNotification('Opening profile...');
    setTimeout(() => setActiveButton(null), 600);
    setTimeout(() => setShowNotification(''), 2000);
  };

  return (
    <>
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed bottom-24 md:bottom-20 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-white animate-pulse z-50 transition-all duration-300">
          {showNotification}
        </div>
      )}

      {/* Desktop Sidebar - Left */}
      <aside className="fixed left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2 glass-panel p-2 rounded-lg md:rounded-2xl z-50 animate-fade-in delay-300 border border-white/10 bg-white/5 backdrop-blur-md">
        <button 
          onClick={handleEdit}
          className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
            activeButton === 'edit' 
              ? 'bg-white/20 text-white scale-110 shadow-lg shadow-white/20' 
              : 'hover:bg-white/10 text-white/40 hover:text-white'
          }`}
          title="Edit"
        >
          <Edit3 size={16} className="md:block hidden" />
          <Edit3 size={18} className="md:hidden" />
        </button>
        <button 
          onClick={handleFavorite}
          className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
            isFavorited || activeButton === 'favorite'
              ? 'bg-red-500/20 text-red-400 scale-110 shadow-lg shadow-red-500/20' 
              : 'hover:bg-white/10 text-white/40 hover:text-white'
          }`}
          title="Favorites"
        >
          <Heart size={16} className={`md:block hidden ${isFavorited ? 'fill-red-400' : ''}`} />
          <Heart size={18} className={`md:hidden ${isFavorited ? 'fill-red-400' : ''}`} />
        </button>
        <button 
          onClick={handleProfile}
          className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
            activeButton === 'profile' 
              ? 'bg-blue-500/20 text-blue-400 scale-110 shadow-lg shadow-blue-500/20' 
              : 'hover:bg-white/10 text-white/40 hover:text-white'
          }`}
          title="Profile"
        >
          <User size={16} className="md:block hidden" />
          <User size={18} className="md:hidden" />
        </button>
      </aside>
      
      {/* Mobile Bottom Navigation - hidden on desktop */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden flex justify-around items-center gap-2 border-t border-white/10 bg-black/95 backdrop-blur-md px-4 py-3 z-40">
        <button 
          onClick={handleEdit}
          className={`flex-1 flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
            activeButton === 'edit' 
              ? 'bg-white/20 text-white scale-105 shadow-lg' 
              : 'hover:bg-white/10 text-white/40 hover:text-white'
          }`}
          title="Edit"
        >
          <Edit3 size={20} />
          <span className="text-[8px] uppercase tracking-wider font-bold">Edit</span>
        </button>
        <button 
          onClick={handleFavorite}
          className={`flex-1 flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
            isFavorited || activeButton === 'favorite'
              ? 'bg-red-500/20 text-red-400 scale-105 shadow-lg' 
              : 'hover:bg-white/10 text-white/40 hover:text-white'
          }`}
          title="Favorites"
        >
          <Heart size={20} className={isFavorited ? 'fill-red-400' : ''} />
          <span className="text-[8px] uppercase tracking-wider font-bold">Save</span>
        </button>
        <button 
          onClick={handleProfile}
          className={`flex-1 flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
            activeButton === 'profile' 
              ? 'bg-blue-500/20 text-blue-400 scale-105 shadow-lg' 
              : 'hover:bg-white/10 text-white/40 hover:text-white'
          }`}
          title="Profile"
        >
          <User size={20} />
          <span className="text-[8px] uppercase tracking-wider font-bold">Profile</span>
        </button>
      </nav>
    </>
  );
};

export default SideBar;
