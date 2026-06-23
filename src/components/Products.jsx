import React from "react";
import { motion } from "framer-motion";
import pkt from "../assets/hero3.png";
import pkt1 from "../assets/pkt1.png";
import pkt2 from "../assets/pkt2.png";

const products = [
  {
    id: 1,
    name: "Plain Tea",
    desc: "Soft and fluffy chapatis made from whole wheat.",
    price: "₹30 / pc",
    img: pkt,
  },
  {
    id: 2,
    name: "Green Tea",
    desc: "Nutrient-rich multigrain chapatis for healthy meals.",
    price: "₹40 / pc",
    img: pkt1,
  },
  {
    id: 3,
    name: "Elachi Pahadi Tea",
    desc: "Smoky, crisp tandoori rotis with authentic texture.",
    price: "₹35 / pc",
    img: pkt2,
  },
  {
    id: 4,
    name: "Bulk Orders",
    desc: "Custom bulk orders for offices and restaurants. Contact us for quotes.",
    price: "Contact for pricing",
    img: pkt,
  },
];

export default function Products() {
  return (
    <section id="products" className="container-max py-12">
      <h2 className="text-2xl font-semibold">Our Products</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <motion.article
            key={p.id}
            whileHover={{ y: -6 }}
            className="bg-surface border border-secondary/10 rounded-2xl shadow-sm overflow-hidden"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-36 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-semibold text-heading">{p.name}</h3>
              <p className="text-sm text-secondary mt-2">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-secondary font-semibold">{p.price}</div>
                <a
                  href="#contact"
                  className="bg-green-500 text-background px-3 py-2 rounded-full hover:bg-green-600 transition"
                >
                  Order
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
