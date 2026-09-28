"use client";

import { useState } from "react";

const productions = [
  {
    name: "Royal Wedding Stage",
    project: "Royal Wedding",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
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

export default function Production() {
  const [selected, setSelected] = useState(productions[0]);

  return (
    <div className="space-y-6">

      <header>
        <h1 className="text-3xl font-bold">Production Specifications</h1>
        <p className="text-gray-500">{selected.name} · {selected.project}</p>
      </header>

      <nav className="flex gap-3 overflow-auto">
        {productions.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setSelected(item)}
            aria-pressed={selected.name === item.name}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 ${
              selected.name === item.name
                ? "border-rose-700 bg-rose-700 text-white shadow-md"
                : "border-rose-100 bg-white/90 text-gray-700 hover:border-rose-300 hover:bg-rose-50"
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>

      <main className="grid gap-8 rounded-xl border border-white bg-white/95 p-5 shadow-md transition-shadow hover:shadow-lg sm:p-6 lg:grid-cols-2">

        <section>
          <img
            src={selected.image}
            alt={selected.name}
            className="h-72 w-full rounded-lg object-cover transition-transform duration-300 hover:scale-[1.01] sm:h-96"
          />
          <p className="mt-3 text-center text-sm text-gray-500">
            {selected.specs.Size}
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">
            Technical Specifications
          </h2>

          <table className="w-full">
            <tbody>
              {Object.entries(selected.specs).map(([key, value]) => (
                <tr key={key} className="border-b border-rose-100 transition-colors last:border-0 hover:bg-rose-50/70">
                  <td className="p-3 font-medium">{key}</td>
                  <td className="p-3 text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

      </main>

    </div>
  );
}