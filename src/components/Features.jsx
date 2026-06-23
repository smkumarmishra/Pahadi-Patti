import React from "react";
import {
  FiClock,
  FiShield,
  FiStar,
  FiDollarSign,
  FiTruck,
} from "react-icons/fi";

const items = [
  {
    icon: <FiClock />,
    title: "Fresh Daily",
    desc: "Prepared each morning and delivered fresh.",
  },
  {
    icon: <FiShield />,
    title: "100% Hygienic",
    desc: "Hygienic kitchens and sealed packaging.",
  },
  {
    icon: <FiStar />,
    title: "Premium Ingredients",
    desc: "Top-quality wheat and clean oils.",
  },
  {
    icon: <FiDollarSign />,
    title: "Affordable Pricing",
    desc: "Value plans for families and bulk.",
  },
  {
    icon: <FiTruck />,
    title: "Fast Delivery",
    desc: "Timely deliveries across service areas.",
  },
];

export default function Features() {
  return (
    <section className="container-max py-12">
      <h2 className="text-2xl font-semibold text-heading">Why Pahadi Patti</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="p-5 bg-surface border border-secondary/10 rounded-3xl shadow-sm text-center"
          >
            <div className="flex items-center justify-center text-accent text-4xl">{it.icon}</div>
            <h3 className="mt-3 font-semibold text-secondary">{it.title}</h3>
            <p className="text-sm text-muted mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
