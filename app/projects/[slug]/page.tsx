// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "../../data/projects";


export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface Params {
  params: { slug: string };
}

export default function ProjectPage({ params }: Params) {
  const project = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <section className="px-4 sm:px-6 py-20 max-w-5xl mx-auto">
      <div className="relative w-full h-[300px] sm:h-[420px] rounded-2xl overflow-hidden mb-10 shadow-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-4xl font-extrabold mb-4">
        {project.title}
      </h1>

      <p className="text-gray-600 mb-6">
        {project.category} • {project.client} • {project.date}
      </p>

      <p className="text-lg leading-relaxed mb-10">
        {project.description}
      </p>

      <div className="mb-10">
        <h3 className="font-semibold mb-3">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-gray-100 text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-cyan-500 hover:underline"
        >
          Visit Live Website →
        </a>
      )}
    </section>
  );
}
