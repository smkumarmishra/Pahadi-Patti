import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container-max py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-heading">Our Story</h2>
        <p className="mt-3 text-secondary">
          Pahadi Patti began with a simple idea: Have two friends lead by Rounit
          : deliver the goodness of homemade mountain tea to busy households
          without compromising on taste or hygiene. We partner with experienced
          home-kitchen teams to craft tea with care.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-surface border border-secondary/10 rounded-3xl shadow-sm">
            <h3 className="font-semibold text-secondary">Mission</h3>
            <p className="text-sm text-muted mt-2">
              To make daily homemade-quality mountain tea accessible to
              everyone.
            </p>
          </div>
          <div className="p-4 bg-surface border border-secondary/10 rounded-3xl shadow-sm">
            <h3 className="font-semibold text-secondary">Values</h3>
            <p className="text-sm text-muted mt-2">
              Freshness, hygiene, transparency, and taste.
            </p>
          </div>
          <div className="p-4 bg-surface border border-secondary/10 rounded-3xl shadow-sm">
            <h3 className="font-semibold text-secondary">Why Choose Us</h3>
            <p className="text-sm text-muted mt-2">
              Premium wheat, skilled cooks, sealed delivery, and flexible plans.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
