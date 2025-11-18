import { motion } from 'framer-motion'

const destinations = [
  { name: 'Bali, Indonesia', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop', tag: 'Tropical' },
  { name: 'Santorini, Greece', img: 'https://images.unsplash.com/photo-1509120295580-5ef436c03a1a?q=80&w=1200&auto=format&fit=crop', tag: 'Romantic' },
  { name: 'Kyoto, Japan', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop', tag: 'Culture' },
  { name: 'Reykjavík, Iceland', img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200&auto=format&fit=crop', tag: 'Adventure' },
  { name: 'Cappadocia, Turkey', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop', tag: 'Bucket List' },
  { name: 'Maui, Hawaii', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop', tag: 'Family' },
]

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
            Trending destinations
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-white/70">
            Curated by our travel experts and loved by our community.
          </motion.p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <motion.div key={d.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
              <img src={d.img} alt={d.name} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-5 w-full flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold drop-shadow">{d.name}</p>
                  <span className="mt-1 inline-flex items-center rounded-full bg-white/20 backdrop-blur px-2 py-1 text-xs text-white ring-1 ring-white/30">{d.tag}</span>
                </div>
                <span className="text-white/80 text-sm">Explore →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
