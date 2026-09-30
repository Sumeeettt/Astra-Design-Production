"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    name: "Royal Wedding",
    type: "Wedding",
    client: "Priya & Arjun",
    location: "Mumbai",
    status: "In Design",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Corporate Summit",
    type: "Corporate",
    client: "TechNova",
    location: "Delhi",
    status: "Awaiting Approval",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Product Launch",
    type: "Product Launch",
    client: "Aurelia",
    location: "Bengaluru",
    status: "In Production",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Exhibition Booth",
    type: "Exhibition",
    client: "BuildSpace",
    location: "Ahmedabad",
    status: "In Production",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Luxury Reception",
    type: "Wedding",
    client: "Riya & Karan",
    location: "Goa",
    status: "In Design",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Annual Award Night",
    type: "Corporate",
    client: "Vertex Group",
    location: "Pune",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=80",
  },
];

const statuses = ["All", "In Design", "Awaiting Approval", "In Production", "Completed"];
const cardThemes = [
  "dark:border-rose-300/30 dark:bg-[#2b1b28] dark:hover:border-rose-300 dark:hover:shadow-[0_18px_40px_rgba(244,63,94,0.22)]",
  "dark:border-cyan-300/30 dark:bg-[#172a35] dark:hover:border-cyan-300 dark:hover:shadow-[0_18px_40px_rgba(34,211,238,0.2)]",
  "dark:border-amber-300/30 dark:bg-[#302719] dark:hover:border-amber-300 dark:hover:shadow-[0_18px_40px_rgba(251,191,36,0.2)]",
  "dark:border-violet-300/30 dark:bg-[#252039] dark:hover:border-violet-300 dark:hover:shadow-[0_18px_40px_rgba(167,139,250,0.22)]",
  "dark:border-emerald-300/30 dark:bg-[#1b3029] dark:hover:border-emerald-300 dark:hover:shadow-[0_18px_40px_rgba(52,211,153,0.2)]",
  "dark:border-sky-300/30 dark:bg-[#1b293a] dark:hover:border-sky-300 dark:hover:shadow-[0_18px_40px_rgba(56,189,248,0.2)]",
];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);
  const normalizedQuery = query.trim().toLowerCase();
  const visibleProjects = projects.filter((project) => {
    const matchesQuery = [project.name, project.type, project.client, project.location]
      .some((value) => value.toLowerCase().includes(normalizedQuery));
    return matchesQuery && (activeStatus === "All" || project.status === activeStatus);
  });

  return (
    <div className="space-y-4">

      <header className="flex flex-wrap items-end justify-between gap-3">
        <section>
          <h1 className="text-3xl font-bold">
            Projects
          </h1>

          <p className="mt-1 text-gray-600">
            Manage your event design projects.
          </p>
        </section>

        <Link href="/design-studio" className="rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-rose-800">
          + New project brief
        </Link>
      </header>

      <input
        type="text"
        placeholder="Search projects..."
        aria-label="Search projects"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-full rounded-lg border border-rose-100 bg-white/90 p-2.5 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
      />

      <nav aria-label="Filter projects by status" className="flex gap-2 overflow-x-auto pb-1">
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setActiveStatus(status)}
            aria-pressed={activeStatus === status}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 ${
              activeStatus === status
                ? "border-rose-700 bg-rose-700 text-white"
                : "border-rose-100 bg-white/80 text-gray-700 hover:border-rose-300 hover:bg-rose-50"
            }`}
          >
            {status}
          </button>
        ))}
      </nav>

      <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

        {visibleProjects.map((project, index) => (
          <article
            key={project.name}
            className={`group relative isolate flex min-h-[19rem] flex-col overflow-hidden rounded-xl border border-white bg-slate-900 text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:border-rose-200 hover:shadow-xl dark:text-slate-100 ${cardThemes[index % cardThemes.length]}`}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="-z-20 object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07131f]/95 via-[#07131f]/55 to-[#07131f]/10 transition-colors duration-300 group-hover:from-[#07131f]/85" />

            <section className="relative z-10 flex flex-1 flex-col justify-end p-4">
              <h2 className="text-xl font-semibold leading-tight text-white">
                {project.name}
              </h2>
              <p className="mt-1 text-sm text-white/80">
                {project.type}
              </p>

              <div
                id={`project-details-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  expandedProject === project.name
                    ? "mt-3 max-h-32 opacity-100"
                    : "mt-0 max-h-0 opacity-0 group-hover:mt-3 group-hover:max-h-32 group-hover:opacity-100 group-focus-within:mt-3 group-focus-within:max-h-32 group-focus-within:opacity-100"
                }`}
              >
                <p className="text-sm text-white/90"><strong>Client:</strong> {project.client}</p>
                <p className="mt-1 text-sm text-white/90"><strong>Location:</strong> {project.location}</p>
                <Link
                  href={project.status === "In Production" ? "/production" : "/design-studio"}
                  className="mt-3 block text-sm font-semibold text-rose-200 transition-all duration-200 hover:translate-x-1 hover:text-amber-200 hover:underline"
                >
                  {project.status === "In Production" ? "View production specs" : "Open design"} →
                </Link>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="inline-block w-fit rounded-full bg-gradient-to-r from-rose-100 to-amber-100 px-3 py-1 text-xs font-medium text-rose-900">
                  {project.status}
                </span>
                <button
                  type="button"
                  aria-expanded={expandedProject === project.name}
                  aria-controls={`project-details-${index}`}
                  onClick={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
                  className="rounded-full border border-white/50 bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {expandedProject === project.name ? "Less" : "Details"}
                </button>
              </div>
            </section>

          </article>
        ))}

      </section>

      {visibleProjects.length === 0 && (
        <p className="rounded-xl border border-dashed border-rose-200 bg-white/70 p-8 text-center text-gray-600">
          No projects match this search. Try another name or status.
        </p>
      )}

    </div>
  );
}