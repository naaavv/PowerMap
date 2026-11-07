
import { useState } from 'react'
import { Zap, Menu, X, ArrowUpRight, Map } from 'lucide-react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080e19]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 shadow-[0_0_25px_rgba(59,130,246,0.12)] transition-all duration-300 group-hover:bg-blue-500/20">
            <Zap className="h-5 w-5 fill-blue-400 text-blue-400" />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white">
              Power<span className="text-blue-400">Map</span>
            </span>
            <span className="text-[9px] font-semibold tracking-[0.25em] text-gray-500">
              NEPAL ENERGY ATLAS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.025] p-1 md:flex">
          <a
            href="#map"
            className="flex items-center gap-2 rounded-full bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-400 transition hover:bg-blue-500/20"
          >
            <Map className="h-4 w-4" />
            Explore Map
          </a>

          <a
            href="#statistics"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            Statistics
          </a>

          <a
            href="#about"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            About
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.05] px-3 py-2 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-emerald-400">
              Infrastructure Atlas
            </span>
          </div>

          <a
            href="https://github.com/naaavv/PowerMap"
            target="_blank"
            rel="noreferrer"
            aria-label="View PowerMap on GitHub"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
          >
            <span className="font-bold">GH</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-gray-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-gray-300 transition hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-white/[0.08] bg-[#080e19] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-2">
            <a
              href="#map"
              onClick={closeMenu}
              className="rounded-xl bg-blue-500/10 px-4 py-3 text-sm font-medium text-blue-400"
            >
              Explore Map
            </a>

            <a
              href="#statistics"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/[0.05] hover:text-white"
            >
              Statistics
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/[0.05] hover:text-white"
            >
              About
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
