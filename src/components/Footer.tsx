
import { Zap, Info } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080e19]">
      <div className="mx-auto max-w-[1600px] px-5 py-10 md:px-8">

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-400" />

              <span className="text-lg font-bold">
                Power<span className="text-blue-400">Map</span>
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              An interactive visual atlas of Nepal's
              electricity infrastructure.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#map" className="hover:text-blue-400">
                Interactive Map
              </a>
              <a href="#statistics" className="hover:text-blue-400">
                Statistics
              </a>
              <a href="#about" className="hover:text-blue-400">
                About PowerMap
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Information
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a
                href="https://www.nea.org.np/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400"
              >
                Nepal Electricity Authority
              </a>

              <a
                href="https://doed.gov.np/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400"
              >
                Department of Electricity Development
              </a>

              <a
                href="https://github.com/naaavv/PowerMap"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400"
              >
                GitHub Repository
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} PowerMap Nepal. Built with purpose.
          </p>

          <p className="flex items-center gap-1">
            <Info className="h-3 w-3" />
            Independent visualization project
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
