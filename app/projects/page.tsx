import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-12 text-center">
        Selected Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group perspective block"
            >
              <div className="relative h-full rounded-2xl bg-white dark:bg-neutral-900 shadow-lg transition-transform duration-300 transform-gpu group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:rotate-y-1">
                
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image || "/projects/placeholder.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-xs text-cyan-500 font-medium">
                    {project.category}
                  </span>

                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}