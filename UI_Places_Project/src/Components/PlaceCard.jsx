import React from "react";

const PlaceCard = ({ place, isActive }) => {
  return (
    // ✅ OUTER WRAPPER (NO overflow, NO rounding)
    <div
      className={`relative w-[340px] md:w-[420px] h-[580px]  group transition-all duration-700 z-30
        ${isActive
          ? "scale-100 opacity-100"
          : "scale-95 opacity-60 grayscale-[0.5] hover:opacity-100 hover:grayscale-0"}
      `}
    >

      {/* ✅ FLOATING RECOMMENDED BADGE (OUTSIDE CARD) */}
      {isActive && (
        <div className="absolute -top-3 -right-3 pointer-events-none">
          {/* Badge Body */}
          <div className="bg-white px-4 py-5 rounded-[2.5rem] shadow-lg">
            <span className="text-black text-[14px] font-black uppercase tracking-[0.2em]">
              Recommended
            </span>
          </div>

          {/* Smooth liquid connectors */}
          <div className="absolute top-0 -left-[20px] w-[20px] h-[20px]
            bg-[radial-gradient(circle_at_top_left,transparent_70%,white_71%)]" />

          <div className="absolute -bottom-[20px] right-0 w-[20px] h-[20px]
            bg-[radial-gradient(circle_at_bottom_right,transparent_70%,white_71%)]" />
        </div>
      )}

      {/* ✅ ACTUAL CARD (rounded + overflow here ONLY) */}
      <div className="relative w-full h-full rounded-tr-[10rem] rounded-br-[2.5rem]  overflow-hidden glass-panel border-white/20 shadow-2xl">

        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={place.imageUrl}
            alt={place.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t
              ${isActive
                ? "from-black/95 via-black/40 to-transparent"
                : "from-black/90 via-black/50 to-transparent"}
            `}
          />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-1 z-30 transition-all duration-500">

          {isActive ? (
            <>
              {/* Vibe & Distance */}
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#5B4DFF] text-white text-[11px] px-4 py-1.5 rounded-full font-bold uppercase tracking-wider shadow-md">
                  {place.vibe}
                </span>
                <span className="text-sm text-white/90 font-bold tracking-wide drop-shadow-md">
                  {place.distance} away
                </span>
              </div>

              {/* Title */}
              <div className="mb-4">
                <h2 className="text-[3.5rem] font-bold mb-1 leading-[0.9] text-white tracking-tight drop-shadow-xl">
                  {place.name}
                </h2>
                <p className="text-sm text-white/80 italic leading-relaxed pl-1">
                  "{place.tagline}"
                </p>
              </div>

              <div className="w-full h-px bg-white/20 mb-1" />

              {/* Action Row */}
              <div className="flex items-center justify-between h-20 -mb-8 -mr-8 pr-8 pb-8">

                {/* Rating */}
                <div className="flex items-center gap-2 pl-1">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-2xl font-bold tracking-tight text-white">
                    {place.rating.toFixed(1)}
                  </span>
                </div>

                {/* Book Button */}
                <div className="relative cursor-pointer group/btn">
                  <div className="bg-white px-10 py-6 rounded-tl-[2.5rem] hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <span className="text-black text-[11px] font-black uppercase tracking-[0.2em]">
                      Book Table
                    </span>
                  </div>

                  <div className="absolute -top-[20px] right-0 w-[20px] h-[20px]
                    bg-[radial-gradient(circle_at_top_right,transparent_70%,white_71%)]
                    group-hover/btn:bg-[radial-gradient(circle_at_top_right,transparent_70%,#f3f4f6_71%)]
                    transition-colors" />

                  <div className="absolute bottom-0 -left-[20px] w-[20px] h-[20px]
                    bg-[radial-gradient(circle_at_bottom_left,transparent_70%,white_71%)]
                    group-hover/btn:bg-[radial-gradient(circle_at_bottom_left,transparent_70%,#f3f4f6_71%)]
                    transition-colors" />
                </div>
              </div>
            </>
          ) : (
            <div className="mb-6">
              <h2 className="text-3xl font-light text-white/80 mb-2">
                {place.name}
              </h2>
              <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                {place.vibe}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
