import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-950/80" />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-white/80">Limited-time spring offers now live</span>
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Discover the world with a modern travel experience
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
                Curated destinations, seamless bookings, and stunning visuals. We craft journeys that feel effortless and unforgettable.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="#packages" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-white text-slate-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Explore Packages
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-transparent text-white ring-1 ring-white/30 hover:ring-white/60 backdrop-blur">
                  Plan My Trip
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-white/70">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">120+</div>
                  <div className="text-xs">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-xs">Customer rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs">Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="lg:justify-self-end"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 blur-2xl rounded-3xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-xl">
                    <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop" alt="Mountain" className="h-full w-full object-cover" />
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-square rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-xl">
                      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop" alt="Beach" className="h-full w-full object-cover" />
                    </div>
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-xl">
                      <img src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop" alt="City" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
