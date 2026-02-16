const FooterControls = () => {
  return (
    <footer className="w-full max-w-6xl flex justify-between items-center text-white/50">
      <div className="flex gap-4">
        <span>01</span>
        <div className="w-24 h-23 bg-white/20 self-center"></div>
        <span>05</span>
      </div>

      <button className="px-6 py-3 bg-white text-black rounded-full font-semibold">
        Book Now
      </button>
    </footer>
  )
}

export default FooterControls
