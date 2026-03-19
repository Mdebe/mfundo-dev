"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-12">
        Selected Projects
      </h1>

      {/* GRID VIEW */}
      {!selected && (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              onClick={() => setSelected(project)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DETAIL VIEW */}
      {selected && (
        <div className="max-w-5xl mx-auto">

          {/* BACK BUTTON */}
          <button
            onClick={() => setSelected(null)}
            className="mb-6 text-cyan-600 underline"
          >
            ← Back to projects
          </button>

          {/* IMAGE */}
          <div className="relative h-[320px] w-full mb-8 rounded-2xl overflow-hidden">
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              className="object-cover"
            />
          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-2">
            {selected.title}
          </h1>

          {/* META INFO */}
          <div className="text-sm text-gray-500 mb-5 space-y-1">
            <p>
              <strong>Client:</strong> {selected.client}
            </p>
            <p>
              <strong>Date:</strong> {selected.date}
            </p>
            <p>
              <strong>Category:</strong> {selected.category}
            </p>

            {selected.url && (
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={selected.url}
                  target="_blank"
                  className="text-cyan-600 underline"
                >
                  Visit Live Site
                </a>
              </p>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-10 leading-relaxed">
            {selected.description}
          </p>

          {/* STACK */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3 text-lg">
              Technology Stack
            </h3>

            <div className="space-y-2 text-sm text-gray-700">
              {selected.stack?.frontend?.length > 0 && (
                <p>
                  <strong>Frontend:</strong>{" "}
                  {selected.stack.frontend.join(", ")}
                </p>
              )}

              {selected.stack?.backend?.length > 0 && (
                <p>
                  <strong>Backend:</strong>{" "}
                  {selected.stack.backend.join(", ")}
                </p>
              )}

              {selected.stack?.cms?.length > 0 && (
                <p>
                  <strong>CMS:</strong>{" "}
                  {selected.stack.cms.join(", ")}
                </p>
              )}

              {selected.stack?.cloud?.length > 0 && (
                <p>
                  <strong>Cloud:</strong>{" "}
                  {selected.stack.cloud.join(", ")}
                </p>
              )}

              {selected.stack?.ai?.length > 0 && (
                <p>
                  <strong>AI:</strong>{" "}
                  {selected.stack.ai.join(", ")}
                </p>
              )}
            </div>
          </div>

          {/* FEATURES */}
          {selected.features && (
            <div className="mb-10">
              <h3 className="font-semibold mb-3 text-lg">
                Key Features
              </h3>

              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                {selected.features.map((feature: string, i: number) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* TAGS (OLD TECH FALLBACK) */}
          {selected.tech && (
            <div className="flex flex-wrap gap-2">
              {selected.tech.map((t: string) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}