"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  tech?: string[];
  url?: string;
  year?: string;
  category?: string;
  tag?: string; // added tag support
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.04,
      }}
      transition={{ type: "spring", stiffness: 160, damping: 14 }}
      className="relative perspective"
    >
      <div
        className="group h-full rounded-2xl overflow-hidden
                   bg-white dark:bg-neutral-900
                   border border-gray-200 dark:border-gray-800
                   shadow-xl
                   [transform-style:preserve-3d]"
      >
        {/* IMAGE */}
        <div className="relative h-48 sm:h-52 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col h-full">
          <div>
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>

            {(project.category || project.year || project.tag) && (
              <p className="text-xs text-gray-500 mb-3">
                {project.category || project.tag}{" "}
                {project.year && `• ${project.year}`}
              </p>
            )}

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* TECH TAGS */}
          {project.tech && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs
                             bg-gray-100 dark:bg-gray-800
                             text-gray-700 dark:text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* LINK */}
          {project.url && (
            <div className="mt-6">
              <Link
                href={project.url}
                target="_blank"
                className="inline-block text-sm text-cyan-500 hover:underline"
              >
                Visit Project →
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}