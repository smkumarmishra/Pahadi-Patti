import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsappSquare,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="mt-12 bg-background border-t border-secondary/10">
      <div className="container-max py-8 flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Pahadi Patti logo" className="h-12 w-12 rounded-full object-cover" />
          <div>
            <div className="font-semibold text-heading">Pahadi Patti</div>
            <div className="text-sm text-secondary mt-1">
              Fresh Homemade Mountain Tea Delivered Daily
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-secondary">
          <a
            aria-label="instagram"
            href="https://www.instagram.com/pahadipatti_awc/"
          >
            <FaInstagram />
          </a>
          <a aria-label="what'sapp" href="https://wa.me/7541981247" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare />
          </a>
          <a aria-label="facebook" href="#">
            <FaFacebookF />
          </a>
          <a aria-label="youtube" href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="bg-surface py-4 text-center text-sm text-secondary">
        © {new Date().getFullYear()} Pahadi Patti . All rights reserved.
      </div>
    </footer>
  );
}
