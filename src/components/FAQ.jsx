import React, { useState } from "react";

const faqs = [
  // { q: 'How are the Tea prepared?', a: 'Our kitchen partners follow strict hygiene protocols. Chapatis are rolled and cooked fresh each morning.' },
  {
    q: "Do you offer subscriptions?",
    a: "Yes — daily, alternate-day, and weekly subscription plans are available.",
  },
  {
    q: "What are your delivery areas?",
    a: "We currently serve select neighborhoods — enter your pin code on the contact form to check availability.",
  },
  {
    q: "Can I place bulk orders for events?",
    a: "Absolutely — contact us with requirements and delivery dates for a custom quote.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="container-max py-12">
      <h2 className="text-2xl font-semibold text-heading">
        Frequently Asked Questions
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="bg-surface border border-secondary/10 rounded-3xl shadow-sm"
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left p-4 flex items-center justify-between text-heading"
            >
              <span className="font-medium">{f.q}</span>
              <span className="text-secondary">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div className="p-4 border-t border-secondary/10 text-secondary">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
