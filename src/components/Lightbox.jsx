import React from 'react'
import { motion } from 'framer-motion'

export default function Lightbox({ src, alt, onClose }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose} role="dialog" aria-label="Image preview">
      <motion.img src={src} alt={alt} className="max-h-[80%] max-w-[90%] rounded shadow-lg" onClick={(e) => e.stopPropagation()} />
    </motion.div>
  )
}
