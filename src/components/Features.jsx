import { motion } from 'framer-motion'
import { Globe, Compass, CreditCard, Clock, ShieldCheck, Headphones } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Global Network',
    desc: 'Access exclusive deals and hidden gems in 120+ destinations worldwide.'
  },
  {
    icon: Compass,
    title: 'Tailored Itineraries',
    desc: 'We craft trips around your vibe: adventure, luxury, wellness, culture, and more.'
  },
  {
    icon: CreditCard,
    title: 'Flexible Payments',
    desc: 'Pay in milestones with secure checkout and transparent pricing.'
  },
  {
    icon: Clock,
    title: 'Instant Booking',
    desc: 'Real-time availability and confirmations. No back-and-forth.'
  },
  {
    icon: ShieldCheck,
    title: 'Travel Protection',
    desc: 'Insurance options and 24/7 support for true peace of mind.'
  },
  {
    icon: Headphones,
    title: 'Concierge Support',
    desc: 'Dedicated travel experts on chat, email, and phone—anytime.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(56,189,248,0.07),transparent_40%),radial-gradient(600px_circle_at_90%_30%,rgba(99,102,241,0.07),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
            Why travel with us
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-white/70">
            A seamless blend of technology and human touch for trips that feel effortless and unforgettable.
          </motion.p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center ring-1 ring-white/20 shadow-lg mb-4">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
