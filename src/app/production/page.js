"use client";

import { useState } from "react";

const productions = [
  {
    name: "Royal Wedding Stage",
    project: "Royal Wedding",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
    specs: {
      Size: "20 × 10 ft",
      Materials: "MDF + Fabric + Floral",
      "Print Type": "Large Format Print",
      Resolution: "300 DPI",
      "Color Mode": "CMYK",
      Bleed: "6 mm",
      "Safe Area": "25 mm",
      Mounting: "Modular Frame",
      Finishing: "Matte Lamination",
      Installation: "~4 Hours",
    },
  },
  {
    name: "TechNova Backdrop",
    project: "Corporate Summit",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
    specs: {
      Size: "30 × 10 ft",
      Materials: "Aluminium + Fabric",
      "Print Type": "Sublimation Print",
      Resolution: "150 DPI",
      "Color Mode": "CMYK",
      Bleed: "6 mm",
      "Safe Area": "25 mm",
      Mounting: "Aluminium Frame",
      Finishing: "Matte Fabric",
      Installation: "~3 Hours",
    },
  },
  {
    name: "Aurelia Product Wall",
    project: "Product Launch",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
    specs: {
      Size: "20 × 10 ft",
      Materials: "MDF + Acrylic + LED",
      "Print Type": "UV Print",
      Resolution: "300 DPI",
      "Color Mode": "CMYK",
      Bleed: "3 mm",
      "Safe Area": "25 mm",
      Mounting: "Modular Frame",
      Finishing: "Gloss Lamination",
      Installation: "~5 Hours",
    },
  },
];
const productionHoverThemes = [
  "dark:hover:border-rose-300 dark:hover:bg-[#352238]",
  "dark:hover:border-cyan-300 dark:hover:bg-[#203b43]",
  "dark:hover:border-amber-300 dark:hover:bg-[#40331e]",
];

export default function Production() {
  const [selected, setSelected] = useState(productions[0]);

  return (
    <div className="space-y-6 text-[#ecf1ff]">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-[#eff4ff]">Production Specifications</h1>
        <p className="mt-2 text-sm text-[#b9c9e8]">{selected.name} · {selected.project}</p>
      </header>

      <nav className="flex gap-3 overflow-auto pb-1">
        {productions.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setSelected(item)}
            aria-pressed={selected.name === item.name}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 ${productionHoverThemes[index % productionHoverThemes.length]} ${
              selected.name === item.name
                ? "border-[#d85d6c] bg-[#d85d6c] text-white shadow-[0_8px_20px_rgba(216,93,108,0.35)]"
                : "border-[#2d3e5e] bg-[#0d1930]/70 text-[#dfe9ff] hover:border-[#36507d] hover:bg-[#122746]"
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>

      <main className="grid gap-6 rounded-2xl border border-[#1d2d45] bg-[#e9edf4]/95 p-5 shadow-[0_20px_40px_rgba(2,8,18,0.35)] transition-all duration-300 hover:shadow-[0_24px_48px_rgba(2,8,18,0.45)] dark:border-emerald-300/20 dark:bg-[#172b34] dark:hover:border-emerald-300/40 sm:p-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="overflow-hidden rounded-xl border border-[#d7dee8] bg-[#f5f7fb] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-violet-300/25 dark:bg-[#252039] dark:hover:border-violet-300/50 dark:hover:shadow-[0_18px_38px_rgba(167,139,250,0.16)]">
          <img
            src={selected.image}
            alt={selected.name}
            className="h-72 w-full object-cover sm:h-[22rem]"
          />
          <div className="px-4 py-3 text-center text-sm font-medium text-[#4d586d] dark:text-violet-100">
            {selected.specs.Size}
          </div>
        </section>

        <section className="rounded-xl border border-[#d7dee8] bg-[#f5f7fb] p-4 text-[#2d384b] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-cyan-300/25 dark:bg-[#172a35] dark:text-slate-100 dark:hover:border-cyan-300/50 dark:hover:shadow-[0_18px_38px_rgba(34,211,238,0.14)]">
          <div className="space-y-2">
            {Object.entries(selected.specs).map(([key, value], index) => (
              <div
                key={key}
                className={`flex items-center justify-between gap-3 border-b border-[#e1e7ed] py-2 text-sm transition-all duration-200 hover:translate-x-1 hover:bg-emerald-50/70 dark:border-slate-700 dark:hover:bg-[#203b43] ${
                  index === Object.entries(selected.specs).length - 1 ? "border-b-0" : ""
                }`}
              >
                <span className="text-[#46536c] dark:text-cyan-100">{key}</span>
                <span className="text-right text-[#1f2937] dark:text-white">{value}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}