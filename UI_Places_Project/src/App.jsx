
import React, { useState, useEffect, useCallback } from 'react';
import { Plus } from 'lucide-react';
import Header from './Components/Header';
import MoodSync from './Components/MoodSync';
import Carousel from './Components/Carousel';
import Controls from './Components/Controls';
import SideBar from './Components/SideBar';
import { fetchPlacesByVibe } from './services/geminiService';
import { VibeType } from './data/places';

const App = () => {
  const [selectedVibe, setSelectedVibe] = useState(VibeType.ALL);
  const [places, setPlaces] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [location] = useState("Paris, France");

  const loadPlaces = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchPlacesByVibe(selectedVibe, location);
      setPlaces(data);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Discovery error:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedVibe, location]);

  useEffect(() => {
    loadPlaces();
  }, [selectedVibe, loadPlaces]);

  const nextCard = () => {
    if (places.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % places.length);
  };

  const prevCard = () => {
    if (places.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + places.length) % places.length);
  };

  const currentPlace = places.length > 0 ? places[currentIndex] : null;

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden select-none font-sans">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 blur-xl scale-110 opacity-60"
          style={{ backgroundImage: `url(${currentPlace?.imageUrl || 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=2000'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      </div>

      {/* Main UI Overlay */}
      <main className="relative z-10 h-full flex flex-col justify-between items-center py-8 px-6 lg:px-12">
        
        <Header location={location} />

        <MoodSync selectedVibe={selectedVibe} onSelectVibe={setSelectedVibe} />

        <div className="relative w-full flex-1 flex flex-col items-center justify-center">
            <Carousel 
                places={places} 
                currentIndex={currentIndex} 
                loading={loading}
                onPrev={prevCard}
                onNext={nextCard}
            />
            
            {/* Controls Overlay - Positioned to be integrated with the cards */}
            <div className="absolute bottom-10 z-40">
                <Controls 
                    currentIndex={currentIndex} 
                    total={places.length} 
                    onPrev={prevCard} 
                    onNext={nextCard}
                    onReload={loadPlaces}
                />
            </div>
        </div>

      </main>

      {/* Sidebars */}
      <SideBar />

      <div className="fixed bottom-10 right-10 z-50 animate-fade-in delay-500">
        <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:scale-110 active:scale-95 transition-all cursor-pointer">
          <Plus size={28} />
        </button>
      </div>

    </div>
  );
};

export default App;