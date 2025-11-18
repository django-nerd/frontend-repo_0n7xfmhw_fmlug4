import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 ring-1 ring-white/20">
          <div className="absolute -inset-1 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(59,130,246,0.25),transparent_40%)]" />
          <div className="relative p-10 sm:p-14">
            <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold text-white">
              Ready to plan your next adventure?
            </motion.h3>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-2 text-white/80 max-w-2xl">
              Tell us your dream destination, travel dates, and vibe—we’ll craft a personalized itinerary with transparent pricing and top-rated experiences.
            </motion.p>

            <form className="mt-8 grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="w-full rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-white/60" />
              <input type="email" placeholder="Email address" className="w-full rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-white/60" />
              <input type="text" placeholder="Destination" className="w-full rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-white/60" />
              <input type="text" placeholder="Travel dates" className="w-full rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-white/60" />
              <textarea placeholder="Tell us about your trip" rows="4" className="sm:col-span-2 w-full rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-white/60" />
              <div className="sm:col-span-2 flex justify-between items-center">
                <p className="text-white/70 text-sm">We’ll get back to you within 24 hours.</p>
                <button type="button" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-white text-slate-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Get a Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
