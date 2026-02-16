const Header = () => {
  return (
    <header className="w-full max-w-6xl flex justify-between items-center">
      <h1 className="text-xl tracking-widest uppercase">Explore</h1>

      <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md">
        Paris, France
      </div>

      <div className="flex gap-3">
        <button className="w-10 h-10 rounded-full bg-white/10"></button>
        <button className="w-10 h-10 rounded-full bg-white/10"></button>
      </div>
    </header>
  )
}

export default Header
