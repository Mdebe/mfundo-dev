"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        I’m Mfundo Sithole, a mobile and web developer with a passion for
        building scalable applications, startup platforms, and immersive user
        experiences. I combine clean UI, solid architecture, and modern
        technologies to deliver high-quality products.
      </p>
    </section>
  );
}