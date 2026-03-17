"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Richards Bay Airport",
    desc: "Modern airport website with public travel information",
    image: "/projects/airport.jpg",
    github: null,
    live: null,
    stacks: ["HTML", "CSS", "JavaScript", "PHP", "Joomla", "MySQL", "Firebase"],
  },
  {
    title: "uMkhanyakude District Municipality",
    desc: "Official municipal website for public services and announcements",
    image: "/projects/umkhanya.png",
    github: null,
    live: null,
    stacks: ["HTML", "CSS", "JavaScript", "PHP", "Joomla", "MySQL", "Firebase"],
  },
  {
    title: "Hluza iCulo AI",
    desc: "AI-powered isiZulu voice assistant for education and accessibility.",
    image: "/projects/hluza-iculo-ai.png",
    github: "https://github.com/Mdebe/Hluza-iCulo-AI",
    live: null,
    stacks: ["Python", "AI", "Speech Recognition", "NLP"],
  },
  {
    title: "Kopano Cleaning Solutions",
    desc: "Professional cleaning services website with booking & contact features.",
    image: "/projects/kopano.jpg",
    github: null,
    live: "https://kopano-cleaning-solutions.web.app/",
    stacks: ["Next.js", "Tailwind CSS", "Firebase", "SEO"],
  },
  
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
<section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">

 {/* 🖼️ Background Image */}
<Image
  src="/images/backgound.jpg"   // change to your image path
  alt="Hero background"
  fill
  priority
  className="absolute inset-0 object-cover -z-20"
/>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 -z-10" />

  {/* Gradient glow */}
  <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-3xl opacity-30 -z-10" />

  <div className="text-center max-w-3xl text-white">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
    >
      Mfundo Sithole
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-6 text-base sm:text-lg text-gray-200"
    >
      Mobile & Web Developer crafting high-performance applications,
      AI-powered solutions, and scalable digital products.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
    >
      <Link
        href="/projects"
        className="rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 font-medium shadow-lg hover:scale-105 transition"
      >
        View Projects
      </Link>

      <Link
        href="/contact"
        className="rounded-lg border border-white/30 text-white px-8 py-3 hover:bg-white/10 hover:scale-105 transition"
      >
        Contact Me
      </Link>
    </motion.div>
  </div>
</section>
      {/* ================= PROJECTS ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-10 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="rounded-xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="h-48 sm:h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.desc}
                </p>

                <div className="flex gap-3 flex-wrap">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-sm rounded-lg border px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                    >
                      GitHub
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="text-sm rounded-lg bg-black dark:bg-white text-white dark:text-black px-4 py-2 hover:scale-105 transition"
                    >
                      Live Site
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block rounded-lg border px-8 py-3 hover:scale-105 transition"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}