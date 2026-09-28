"use client";

import { useState } from "react";

const designs = [
  ["Royal Wedding Stage", "Wedding", "Royal Wedding", "V3", "Approved", "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80"],
  ["TechNova Backdrop", "Corporate", "Corporate Summit", "V2", "In Review", "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80"],
  ["Aurelia Product Wall", "Product Launch", "Product Launch", "V4", "Approved", "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80"],
  ["Exhibition Booth", "Exhibition", "Exhibition Booth", "V1", "Draft", "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80"],
  ["Luxury Reception", "Wedding", "Luxury Reception", "V2", "In Design", "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"],
  ["Vertex Award Stage", "Corporate", "Annual Award Night", "V3", "Ready", "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80"],
];

export default function DesignStudio() {
  const [filter, setFilter] = useState("All");
  const [designItems, setDesignItems] = useState(designs);
  const [isCreating, setIsCreating] = useState(false);
  const [newDesignName, setNewDesignName] = useState("");
  const [selectedDesign, setSelectedDesign] = useState(null);

  const visible = designItems.filter(
    (d) => filter === "All" || d[1] === filter
  );
  const selectedDetails = designItems.find(([name]) => name === selectedDesign);

  function handleCreateDesign(event) {
    event.preventDefault();
    const name = newDesignName.trim();
    if (!name) return;

    const type = filter === "All" ? "Product Launch" : filter;
    const newDesign = [name, type, "New Project", "V1", "Draft", designs[0][5]];
    setDesignItems((current) => [newDesign, ...current]);
    setFilter(type);
    setSelectedDesign(name);
    setNewDesignName("");
    setIsCreating(false);
  }

  return (
    <div className="space-y-6">

      <header className="flex justify-between">
        <section>
          <h1 className="text-3xl font-bold">Design Studio</h1>
          <p className="text-gray-500">Create and manage your designs.</p>
        </section>

        <button
          type="button"
          onClick={() => setIsCreating((open) => !open)}
          aria-expanded={isCreating}
          className="rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
        >
          {isCreating ? "Cancel" : "+ Create Design"}
        </button>
      </header>

      {isCreating && (
        <form onSubmit={handleCreateDesign} className="flex flex-wrap items-end gap-3 rounded-xl border border-rose-100 bg-white/90 p-4 shadow-sm">
          <label className="min-w-56 flex-1 text-sm font-medium text-gray-700">
            Design name
            <input
              autoFocus
              required
              value={newDesignName}
              onChange={(event) => setNewDesignName(event.target.value)}
              placeholder="e.g. Summer Gala Stage"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 font-normal outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            />
          </label>
          <button type="submit" className="rounded-lg bg-rose-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-rose-800">
            Add design
          </button>
          <p className="w-full text-xs text-gray-500">Demo only: this design stays in the current page session.</p>
        </form>
      )}

      <nav className="flex gap-2 overflow-auto">
        {["All", "Wedding", "Corporate", "Product Launch", "Exhibition"].map(
          (item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg border px-4 py-2 ${
                filter === item ? "bg-black text-white" : "bg-white"
              }`}
            >
              {item}
            </button>
          )
        )}
      </nav>

      {selectedDetails && (
        <section className="flex flex-wrap items-center gap-4 rounded-xl border border-rose-100 bg-white/90 p-4 shadow-sm">
          <img src={selectedDetails[5]} alt="" className="h-16 w-24 rounded-lg object-cover" />
          <div className="min-w-48 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">Design preview</p>
            <h2 className="mt-1 font-semibold">{selectedDetails[0]}</h2>
            <p className="text-sm text-gray-500">{selectedDetails[1]} · {selectedDetails[3]} · {selectedDetails[4]}</p>
          </div>
          <button
            type="button"
            onClick={() => setSelectedDesign(null)}
            className="rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-rose-50 hover:text-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Close preview
          </button>
        </section>
      )}

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map(([name, type, project, version, status, image]) => (
          <article
            key={name}
            className="group flex h-[29rem] flex-col overflow-hidden rounded-xl border border-white bg-white/95 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
          >
            <img
              src={image}
              alt={name}
              className="h-48 w-full shrink-0 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <section className="flex flex-1 flex-col p-4">
              <h2 className="font-semibold">{name}</h2>
              <p className="text-sm text-gray-500">{type}</p>
              <p className="mt-3 text-sm">Project: {project}</p>
              <p className="text-sm">Version: {version}</p>
              <span className="mt-auto inline-block w-fit rounded-full bg-gray-100 px-3 py-1 text-sm">
                {status}
              </span>
              <button
                type="button"
                onClick={() => setSelectedDesign(name)}
                className="mt-3 text-left text-sm font-semibold text-rose-700 transition-colors hover:text-orange-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Preview design →
              </button>
            </section>
          </article>
        ))}
      </section>

    </div>
  );
}