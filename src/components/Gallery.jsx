import React, { useState } from "react";
import Lightbox from "./Lightbox";

const images = [
  "https://images.pexels.com/photos/6136356/pexels-photo-6136356.jpeg",
  "https://images.pexels.com/photos/33908081/pexels-photo-33908081.jpeg",
  "https://images.pexels.com/photos/16246007/pexels-photo-16246007.jpeg",
  "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg",
];

export default function Gallery() {
  const [open, setOpen] = useState(null);
  return (
    <section id="gallery" className="container-max py-12">
      <h2 className="text-2xl font-semibold text-heading">Gallery</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpen(src)}
            className="overflow-hidden rounded-3xl border border-secondary/10 shadow-sm bg-surface"
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              className="w-full h-32 object-cover hover:scale-105 transform transition"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {open && (
        <Lightbox
          src={open}
          alt="gallery preview"
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
