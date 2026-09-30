"use client";

import { useState } from "react";

const directions = ["Stage concept", "Brand backdrop", "Guest experience"];
const promptPresets = [
  "An elegant garden wedding under candlelight",
  "A bold product launch with illuminated displays",
  "A modern conference stage with a large LED wall",
];

const directionDetails = {
  "Stage concept": {
    palette: ["#A84452", "#E4A97B", "#F0D8B5"],
    materials: "Layered scenic panels, soft drape, and warm architectural lighting",
    focus: "Create a memorable focal point with a clear guest sightline",
  },
  "Brand backdrop": {
    palette: ["#C55445", "#E4B347", "#3D7370"],
    materials: "Modular printed panels, dimensional lettering, and integrated LEDs",
    focus: "Keep the brand mark visible in both wide and close-up photographs",
  },
  "Guest experience": {
    palette: ["#46766B", "#D2A34D", "#CF7867"],
    materials: "Tactile signage, layered entry moments, and flexible lounge furniture",
    focus: "Guide guests naturally from arrival through the main event space",
  },
};

export default function AIStudio() {
  const [direction, setDirection] = useState(directions[0]);
  const [prompt, setPrompt] = useState("");
  const [concept, setConcept] = useState(null);

  function handleGenerate(event) {
    event.preventDefault();
    const details = directionDetails[direction];
    setConcept({ prompt: prompt.trim(), ...details });
  }

  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-700 dark:text-rose-300">Creative workspace</p>
        <h1 className="mt-1 text-3xl font-bold dark:text-white">AI Studio</h1>
        <p className="mt-2 text-gray-600 dark:text-slate-300">Shape an event idea into a first-pass creative brief.</p>
      </header>

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)]">
        <form onSubmit={handleGenerate} className="space-y-6 rounded-xl border border-white bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-rose-300/25 dark:bg-[#291d2b] dark:hover:border-rose-300/50 dark:hover:shadow-[0_18px_38px_rgba(244,63,94,0.16)] sm:p-6">
          <div>
            <h2 className="text-lg font-semibold dark:text-white">Set the direction</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-slate-300">Demo concept builder · no external AI service connected</p>
          </div>

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-gray-800 dark:text-slate-200">Concept type</legend>
            <div className="flex flex-wrap gap-2">
              {directions.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={direction === item}
                  onClick={() => setDirection(item)}
                  className={`rounded-full border px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 ${
                    direction === item
                      ? "border-rose-700 bg-rose-700 text-white"
                      : "border-rose-100 bg-white text-gray-700 transition-all hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-50 dark:border-slate-600 dark:bg-[#172a35] dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:bg-[#203b43]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="concept-prompt" className="mb-2 block text-sm font-medium text-gray-800 dark:text-slate-200">
              Describe the event
            </label>
            <textarea
              id="concept-prompt"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Tell us about the mood, audience, venue, or key moment..."
              rows={5}
              required
              className="w-full resize-y rounded-lg border border-gray-200 bg-white p-3 text-sm outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100 dark:border-slate-600 dark:bg-[#111e30] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
            />
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-300">Try a starting point</p>
            <div className="flex flex-wrap gap-2">
              {promptPresets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setPrompt(preset)}
                  className="rounded-lg bg-amber-50 px-3 py-2 text-left text-xs text-amber-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-100 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 dark:bg-[#3a2e1c] dark:text-amber-100 dark:hover:bg-[#51401f]"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-rose-700 to-orange-600 px-4 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:from-rose-800 hover:to-orange-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700 sm:w-auto"
          >
            Generate concept
          </button>
        </form>

        <section aria-live="polite" className="min-h-80 rounded-xl border border-rose-100 bg-gradient-to-br from-rose-100 via-amber-50 to-emerald-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-emerald-300/25 dark:from-[#352238] dark:via-[#292541] dark:to-[#18352f] dark:hover:border-emerald-300/50 dark:hover:shadow-[0_18px_38px_rgba(52,211,153,0.14)]">
          {concept ? (
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-700">Concept direction</p>
                <h2 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{direction}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-slate-200">{concept.prompt}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Material & lighting</h3>
                <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-slate-200">{concept.materials}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Design focus</h3>
                <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-slate-200">{concept.focus}</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Color palette</h3>
                <div className="flex gap-2">
                  {concept.palette.map((color) => (
                    <span key={color} className="h-9 w-9 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: color }} aria-label={`Palette color ${color}`} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex min-h-68 flex-col justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-700 dark:text-rose-300">Your canvas</span>
              <div>
                <p className="font-serif text-3xl font-semibold text-gray-900 dark:text-white">A good idea starts with a feeling.</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-700 dark:text-slate-200">Choose a direction and describe the moment you want guests to remember. Your concept preview will appear here.</p>
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-slate-300">01 / Creative brief</span>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}