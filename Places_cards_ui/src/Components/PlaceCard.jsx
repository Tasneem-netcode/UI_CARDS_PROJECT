import React from 'react'

const PlaceCard = ({ place }) => {
  return (
    <div className="relative w-[340px] h-[580px] rounded-[2.5rem] overflow-hidden">

      <img
        src={place.image}
        alt={place.name}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>

      <div className="absolute bottom-0 p-8">
        <span className="bg-indigo-500 px-2 py-1 rounded-full text-xs">
          {place.mood}
        </span>

        <h2 className="text-3xl mt-2">{place.name}</h2>
        <p className="text-white/60">{place.description}</p>
      </div>

    </div>
  )
}

export default PlaceCard