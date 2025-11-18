import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Destinations from './components/Destinations'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_-10%,rgba(56,189,248,0.08),transparent_60%),radial-gradient(800px_circle_at_80%_-10%,rgba(99,102,241,0.08),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Destinations />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} AeroGlide Travel. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
