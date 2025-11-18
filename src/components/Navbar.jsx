import { useState } from 'react'
import { Menu, X, Plane, Map, Phone, Info } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Destinations', href: '#destinations', icon: Map },
    { label: 'Packages', href: '#packages', icon: Plane },
    { label: 'About', href: '#about', icon: Info },
    { label: 'Contact', href: '#contact', icon: Phone },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-md flex items-center justify-center ring-1 ring-white/30">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-white/90 font-semibold tracking-tight">AeroGlide</p>
                <p className="text-xs text-white/60">Tours & Travel</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {links.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm text-white/80 hover:text-white">
                  <Icon className="h-4 w-4 text-white/60 group-hover:text-white transition-colors" />
                  <span>{label}</span>
                  <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-white/40">
                Book a Trip
              </a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:bg-white/10" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-1">
                {links.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} className="flex items-center gap-3 rounded-xl px-3 py-3 text-white/90 hover:bg-white/10">
                    <Icon className="h-4 w-4 text-white/70" />
                    <span>{label}</span>
                  </a>
                ))}
                <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
                  Book a Trip
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
