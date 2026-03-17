"use client";

import { motion, useMotionValue } from "framer-motion";

export default function MagneticButton({ children }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.button
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 300 }}
      className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
    >
      {children}
    </motion.button>
  );
}