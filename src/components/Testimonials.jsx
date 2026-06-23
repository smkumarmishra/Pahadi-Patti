import React from 'react'
import { motion } from 'framer-motion'

const reviews = [
  { name: 'Anita Sharma', text: 'ChapatiX chapatis are soft and taste homemade. Reliable deliveries every morning!', stars: 5 },
  { name: 'Raj Patel', text: 'Great for offices — consistent quality and quick service.', stars: 5 },
  { name: 'Neha Gupta', text: 'Loved the multigrain option. Healthy and tasty.', stars: 4 }
]

function Stars({ n }) {
  return <div className="text-yellow-500">{'★'.repeat(n)}{'☆'.repeat(5-n)}</div>
}

export default function Testimonials() {
  return (
    <section className="container-max py-12">
      <h2 className="text-2xl font-semibold text-heading">Customer Testimonials</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="p-5 bg-surface border border-secondary/10 rounded-3xl shadow-sm">
            <Stars n={r.stars} />
            <p className="mt-3 text-secondary">“{r.text}”</p>
            <div className="mt-3 font-semibold text-heading">{r.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
