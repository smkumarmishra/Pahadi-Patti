import React, { useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import logoName from "../assets/logoName2.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="backdrop-blur-sm sticky top-0 z-50 bg-background/95 border-b border-secondary/20">
      <nav className="container-max flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Pahadi Patti logo"
            className="w-16 h-16 rounded-full bg-surface shadow-sm"
          />
          <div className="flex flex-row justify-start">
            <img
              src={logoName}
              alt="Pahadi Patti wordmark"
              className="h-20 max-w-[100px] object-contain"
            />
            {/* <div className="text-xs text-secondary mt-0">
              Fresh Mountain Tea : "अपनों वाली चाय "
            </div> */}
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-heading hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 inline-flex items-center gap-2 bg-green-500 text-background px-4 py-2 rounded-lg shadow-sm shadow-secondary/20 hover:bg-green-600 transition"
          >
            Order Now <FiPhone />
          </a>
        </div>

        <button
          aria-label="menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-background/95 border-t border-secondary/20"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-heading"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center gap-2 bg-primary text-background px-4 py-2 rounded-lg"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
