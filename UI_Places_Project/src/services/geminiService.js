
import { places } from '../data/places';

export const fetchPlacesByVibe = async (vibe, location) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  if (vibe === 'All Vibes') {
    return places;
  }

  return places.filter(place => place.vibe.toLowerCase() === vibe.toLowerCase() || (vibe === 'Eclectic' && place.vibe === 'Eclectic'));
};
