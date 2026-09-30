"use client";

import { useState } from "react";
import Image from "next/image";

const designs = [
  ["Royal Wedding Stage", "Wedding", "Royal Wedding", "V3", "Approved", "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80"],
  ["TechNova Backdrop", "Corporate", "Corporate Summit", "V2", "In Review", "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80"],
  ["Aurelia Product Wall", "Product Launch", "Product Launch", "V4", "Approved", "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80"],
  ["Exhibition Booth", "Exhibition", "Exhibition Booth", "V1", "Draft", "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80"],
  ["Luxury Reception", "Wedding", "Luxury Reception", "V2", "In Design", "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"],
  ["Vertex Award Stage", "Corporate", "Annual Award Night", "V3", "Ready", "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80"],
];
const designThemes = [
  "dark:border-rose-300/30 dark:bg-[#2b1b28] dark:hover:border-rose-300 dark:hover:shadow-[0_18px_38px_rgba(244,63,94,0.18)]",
  "dark:border-cyan-300/30 dark:bg-[#172a35] dark:hover:border-cyan-300 dark:hover:shadow-[0_18px_38px_rgba(34,211,238,0.16)]",
  "dark:border-amber-300/30 dark:bg-[#302719] dark:hover:border-amber-300 dark:hover:shadow-[0_18px_38px_rgba(251,191,36,0.16)]",
  "dark:border-violet-300/30 dark:bg-[#252039] dark:hover:border-violet-300 dark:hover:shadow-[0_18px_38px_rgba(167,139,250,0.18)]",
  "dark:border-emerald-300/30 dark:bg-[#1b3029] dark:hover:border-emerald-300 dark:hover:shadow-[0_18px_38px_rgba(52,211,153,0.16)]",
  "dark:border-sky-300/30 dark:bg-[#1b293a] dark:hover:border-sky-300 dark:hover:shadow-[0_18px_38px_rgba(56,189,248,0.16)]",
];

export default function DesignStudio() {
  const [filter, setFilter] = useState("All");
  const [designItems, setDesignItems] = useState(designs);
  const [isCreating, setIsCreating] = useState(false);
  const [newDesignName, setNewDesignName] = useState("");
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [expandedDesign, setExpandedDesign] = useState(null);

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
    <div className="space-y-6 text-[#edf3ff]">

      <header className="flex items-center justify-between gap-4">
        <section>
          <h1 className="text-3xl font-bold text-[#f2f7ff]">Design Studio</h1>
          <p className="mt-2 text-[#becae4]">Create and manage your designs.</p>
        </section>

        <button
          type="button"
          onClick={() => setIsCreating((open) => !open)}
          aria-expanded={isCreating}
          className="rounded-lg bg-[#0b1016] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-800 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700 dark:bg-rose-700 dark:hover:bg-rose-600"
        >
          {isCreating ? "Cancel" : "+ Create Design"}
        </button>
      </header>

      {isCreating && (
        <form onSubmit={handleCreateDesign} className="flex flex-wrap items-end gap-3 rounded-xl border border-rose-100 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-amber-300/25 dark:bg-[#302719] dark:hover:border-amber-300/50 dark:hover:shadow-[0_16px_34px_rgba(251,191,36,0.14)]">
          <label className="min-w-56 flex-1 text-sm font-medium text-gray-700 dark:text-slate-200">
            Design name
            <input
              autoFocus
              required
              value={newDesignName}
              onChange={(event) => setNewDesignName(event.target.value)}
              placeholder="e.g. Summer Gala Stage"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 font-normal outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100 dark:border-slate-600 dark:bg-[#111e30] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
            />
          </label>
          <button type="submit" className="rounded-lg bg-rose-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-800 hover:shadow-md">
            Add design
          </button>
          <p className="w-full text-xs text-gray-500 dark:text-slate-400">Demo only: this design stays in the current page session.</p>
        </form>
      )}

      <nav className="flex gap-3 overflow-auto pb-1">
        {["All", "Wedding", "Corporate", "Product Launch", "Exhibition"].map(
          (item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`min-w-[150px] rounded-[18px] border px-5 py-4 text-[1rem] font-medium leading-none transition-all duration-200 ${
                filter === item
                  ? "border-[#e7edf9] bg-[#0b1016] text-[#f0f5ff] shadow-[0_8px_18px_rgba(0,0,0,0.22)]"
                  : "border-[#e7edf9] bg-[#ecf0f3] text-[#4b5973] hover:-translate-y-0.5 hover:bg-[#f3f6fa] hover:text-[#0f172a] dark:border-slate-600 dark:bg-[#172a35] dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:bg-[#203b43] dark:hover:text-white"
              }`}
            >
              {item}
            </button>
          )
        )}
      </nav>

      {selectedDetails && (
        <section className="flex flex-wrap items-center gap-4 rounded-xl border border-rose-100 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-violet-300/25 dark:bg-[#252039] dark:hover:border-violet-300/50 dark:hover:shadow-[0_16px_34px_rgba(167,139,250,0.14)]">
          <img src={selectedDetails[5]} alt="" className="h-16 w-24 rounded-lg object-cover" />
          <div className="min-w-48 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-rose-700 dark:text-violet-300">Design preview</p>
            <h2 className="mt-1 font-semibold text-slate-900 dark:text-white">{selectedDetails[0]}</h2>
            <p className="text-sm text-gray-500 dark:text-slate-300">{selectedDetails[1]} · {selectedDetails[3]} · {selectedDetails[4]}</p>
          </div>
          <button
            type="button"
            onClick={() => setSelectedDesign(null)}
            className="rounded-lg px-3 py-2 text-sm text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-50 hover:text-rose-800 dark:text-slate-300 dark:hover:bg-[#392430] dark:hover:text-rose-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Close preview
          </button>
        </section>
      )}

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
        {visible.map(([name, type, project, version, status, image], index) => (
          <article
            key={name}
            className={`group relative isolate flex h-[26rem] flex-col overflow-hidden rounded-[18px] border border-[#dfe9f8] bg-slate-900 text-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.015] hover:border-[#d0d9ea] hover:shadow-[0_18px_32px_rgba(15,23,42,0.12)] ${designThemes[index % designThemes.length]}`}
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="-z-20 object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07131f]/95 via-[#07131f]/55 to-[#07131f]/10 transition-colors duration-300 group-hover:from-[#07131f]/85" />

            <section className="relative z-10 flex flex-1 flex-col justify-end p-4 text-white">
              <h2 className="text-[1.04rem] font-semibold text-white">{name}</h2>
              <p className="mt-1 text-sm text-white/80">{type}</p>
              <div
                id={`design-details-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  expandedDesign === name || selectedDesign === name
                    ? "mt-3 max-h-32 opacity-100"
                    : "mt-0 max-h-0 opacity-0 group-hover:mt-3 group-hover:max-h-32 group-hover:opacity-100 group-focus-within:mt-3 group-focus-within:max-h-32 group-focus-within:opacity-100"
                }`}
              >
                <p className="text-sm text-white/90">Project: {project}</p>
                <p className="mt-1 text-sm text-white/90">Version: {version}</p>
                <button
                  type="button"
                  onClick={() => setSelectedDesign(name)}
                  className="mt-3 text-left text-sm font-semibold text-rose-200 transition-all duration-200 hover:translate-x-1 hover:text-amber-200 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Preview design →
                </button>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="inline-block w-fit rounded-full border border-white/20 bg-white/15 px-3 py-1 text-sm text-white backdrop-blur-sm">
                  {status}
                </span>
                <button
                  type="button"
                  aria-expanded={expandedDesign === name || selectedDesign === name}
                  aria-controls={`design-details-${index}`}
                  onClick={() => setExpandedDesign(expandedDesign === name ? null : name)}
                  className="rounded-full border border-white/50 bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {expandedDesign === name ? "Less" : "Details"}
                </button>
              </div>
            </section>
          </article>
        ))}
      </section>

    </div>
  );
}