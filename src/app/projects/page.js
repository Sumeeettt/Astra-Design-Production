"use client";

import Link from "next/link";
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

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState("All");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleProjects = projects.filter((project) => {
    const matchesQuery = [project.name, project.type, project.client, project.location]
      .some((value) => value.toLowerCase().includes(normalizedQuery));
    return matchesQuery && (activeStatus === "All" || project.status === activeStatus);
  });

  return (
    <div className="space-y-6">

      <header className="flex flex-wrap items-end justify-between gap-4">
        <section>
          <h1 className="text-3xl font-bold">
            Projects
          </h1>

          <p className="mt-2 text-gray-600">
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
        className="w-full rounded-lg border border-rose-100 bg-white/90 p-3 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
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

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

        {visibleProjects.map((project) => (
          <article
            key={project.name}
            className="group flex h-[29rem] flex-col overflow-hidden rounded-xl border border-white bg-white/95 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
          >

            <img
              src={project.image}
              alt={project.name}
              className="h-48 w-full shrink-0 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <section className="flex flex-1 flex-col p-5">

              <h2 className="text-xl font-semibold">
                {project.name}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {project.type}
              </p>

              <p className="mt-4 text-sm">
                <strong>Client:</strong> {project.client}
              </p>

              <p className="mt-1 text-sm">
                <strong>Location:</strong> {project.location}
              </p>

              <p className="mt-4 inline-block w-fit rounded-full bg-gradient-to-r from-rose-100 to-amber-100 px-3 py-1 text-sm text-rose-900">
                {project.status}
              </p>

              <Link
                href={project.status === "In Production" ? "/production" : "/design-studio"}
                className="mt-auto block pt-5 text-sm font-semibold text-rose-700 transition-colors hover:text-orange-700 hover:underline"
              >
                {project.status === "In Production" ? "View production specs" : "Open design"} →
              </Link>

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