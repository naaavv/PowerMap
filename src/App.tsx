
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white">

      <Header />

      <main className="min-h-[500px]">

        {/* Hero */}
        <section className="flex min-h-[500px] flex-col items-center justify-center px-5 text-center">

          <h1 className="text-4xl font-bold sm:text-6xl">
            Explore Nepal's
            <span className="block text-blue-400">
              Power Grid
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-gray-400">
            Discover hydropower stations, transmission lines,
            substations and electricity infrastructure across Nepal.
          </p>

        </section>

        {/* Map */}
        <section id="map" className="mx-auto max-w-7xl px-5 py-10">
          <div className="rounded-2xl border border-white/10 bg-[#111c2e] p-8 text-center">
            <h2 className="text-xl font-semibold">
              Interactive Map
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Nepal's electricity map will appear here.
            </p>
          </div>
        </section>

      </main>

      <Footer />

    </div>
  )
}

export default App
