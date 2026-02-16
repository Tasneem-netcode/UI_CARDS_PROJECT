import Header from "./Components/Header"
import MoodSelector from "./Components/MoodSelector"
import Carousel from "./Components/Carousel"
import FooterControls from "./Components/FooterControls"

function App() {
  return (
    <div className="bg-black text-white font-sans overflow-hidden min-h-screen relative">

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511739001486-6bfe10ce785f')] bg-cover bg-center opacity-40 blur-sm"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/60"></div>
      </div>

      <main className="relative z-10 h-screen flex flex-col items-center justify-between py-12 px-6">
        <Header />
        <MoodSelector />
        <Carousel />
        <FooterControls />
      </main>

    </div>
  )
}

export default App



