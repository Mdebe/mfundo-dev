"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        <Link href="/" className="font-bold text-lg">
          Mfundo.dev
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {["Projects", "Resume", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            exit={{ y: -300 }}
            className="md:hidden bg-black text-white px-6 py-6 space-y-4"
          >
            {["Projects", "Resume", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-lg"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}