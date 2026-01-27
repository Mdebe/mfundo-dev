"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string | null;
  live?: string | null;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="group relative rounded-xl overflow-hidden
                 border border-gray-200 dark:border-gray-800
                 bg-white dark:bg-neutral-900 shadow-xl
                 [transform-style:preserve-3d]"
    >
      {/* IMAGE */}
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">
          {project.description}
        </p>

        {/* TECH STACK TAGS */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full
                         bg-gradient-to-r from-purple-500/10 to-cyan-500/10
                         text-purple-700 dark:text-cyan-400
                         border border-purple-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3 flex-wrap">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="text-sm rounded-lg border px-4 py-2
                         hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
            >
              GitHub
            </Link>
          )}
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              className="text-sm rounded-lg
                         bg-black dark:bg-white
                         text-white dark:text-black
                         px-4 py-2 hover:scale-105 transition"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}