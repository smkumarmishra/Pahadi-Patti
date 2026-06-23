import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import heroImage from "../assets/hero1.jpeg";
import heroImageTwo from "../assets/hero2.jpeg";
import heroImage3 from "../assets/hero3.png";

const backgrounds = [heroImage, heroImageTwo, heroImage3,heroImage, heroImageTwo,heroImage, heroImageTwo,heroImage, heroImageTwo];

export default function Hero() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    // preload images first to avoid only-one-image display issues
    const loaders = backgrounds.map(
      (src) =>
        new Promise((res) => {
          const img = new Image();
          img.src = src;
          img.onload = () => res(true);
          img.onerror = () => res(false);
        }),
    );

    Promise.all(loaders).then(() => {
      if (!mounted) return;
      startTimer();
    });

    // fallback: ensure timer starts even if preload hangs
    const fallback = window.setTimeout(() => {
      if (mounted && !timerRef.current) startTimer();
    }, 1000);

    return () => {
      mounted = false;
      clearTimeout(fallback);
      stopTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startTimer() {
    stopTimer();
    timerRef.current = window.setInterval(() => {
      setActive((c) => (c + 1) % backgrounds.length);
    }, 3000);
  }

  function stopTimer() {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function prev() {
    stopTimer();
    setActive((c) => (c - 1 + backgrounds.length) % backgrounds.length);
    startTimer();
  }

  function next() {
    stopTimer();
    setActive((c) => (c + 1) % backgrounds.length);
    startTimer();
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
      className="relative overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${active}-${backgrounds[active]}`}
            src={backgrounds[active]}
            alt={`Fresh homemade chapatis background ${active + 1}`}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, x: "3%" }}
            animate={{ opacity: 1, x: ["0%", "-30%"] }}
            exit={{ opacity: 0, x: "-8%" }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 9, ease: "linear" },
            }}
            loading="lazy"
            draggable={false}
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(229,173,102,0.28),_transparent_25%),linear-gradient(180deg,_rgba(236,225,205,0.72),_rgba(90,64,30,0.28))]" />
      </div>

      {/* Controls */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-2">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={prev}
          aria-label="Previous background"
          className="pointer-events-auto bg-white/60 backdrop-blur rounded-full p-2 shadow hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <FiChevronLeft className="text-heading" size={22} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={next}
          aria-label="Next background"
          className="pointer-events-auto bg-white/60 backdrop-blur rounded-full p-2 shadow hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <FiChevronRight className="text-heading" size={22} />
        </motion.button>
      </div>

      <div className="container-max relative z-20 min-h-screen flex items-center py-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-heading">
            <b>Pahadi Patti</b> — Fresh Homemade Mountain Tea Delivered Daily
          </h1>
          <h4 className="text-2xl sm:text-5xl font-extrabold leading-tight text-heading mt-2">
            "अपनों वाली चाय "
          </h4>
          <p className="mt-4 text-lg text-black/90">
            Soft, warm, and made with premium wheat — prepared hygienically
            every morning and delivered to your doorstep. Subscribe for daily or
            weekly deliveries.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-block bg-green-500 text-background px-6 py-3 rounded-full shadow-lg shadow-secondary/20 hover:bg-green-600 cursor-pointer pointer-events-auto transition"
            >
              Order Now
            </a>
            <a
              href="#contact"
              className="inline-block border border-green-500 text-green-500 px-6 py-3 rounded-full hover:bg-green-500 hover:text-background cursor-pointer pointer-events-auto transition"
            >
              Contact
            </a>
          </div>
          <ul className="mt-6 space-y-2 text-2xl text-black">
            <li>• Daily-made Tea with consistent texture</li>
            <li>• Hygienic kitchen and sealed packaging</li>
            <li>• Flexible plans for families and bulk orders</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
