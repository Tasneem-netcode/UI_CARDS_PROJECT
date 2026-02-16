import PlaceCard from "./PlaceCard"

const places = [
  {
    id: 1,
    name: "Lumiere Bistro",
    mood: "Romantic",
    description: "A starlit dinner experience.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  }
]

const Carousel = () => {
  return (
    <section className="flex items-center justify-center py-10">
      {places.map(place => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </section>
  )
}

export default Carousel
