const moods = ["All Vibes", "Cozy", "Energetic", "Romantic", "Modern"]

const MoodSelector = () => {
  return (
    <nav className="flex gap-3">
      {moods.map((mood, index) => (
        <button
          key={index}
          className="px-5 py-2 rounded-full text-xs font-semibold uppercase bg-white/10 hover:bg-white/20"
        >
          {mood}
        </button>
      ))}
    </nav>
  )
}

export default MoodSelector
