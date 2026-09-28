import Link from "next/link";

const workspaces = [
  {
    title: "Projects",
    detail: "Track clients, locations, and project status.",
    href: "/projects",
    accent: "border-rose-400",
    number: "01",
  },
  {
    title: "AI Studio",
    detail: "Explore an event concept from a creative brief.",
    href: "/ai-studio",
    accent: "border-amber-400",
    number: "02",
  },
  {
    title: "Design Studio",
    detail: "Review design concepts and create a new brief.",
    href: "/design-studio",
    accent: "border-emerald-500",
    number: "03",
  },
  {
    title: "Production",
    detail: "Check materials, print details, and installations.",
    href: "/production",
    accent: "border-sky-500",
    number: "04",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="border-b border-rose-200/70 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-700">ASTRA workspace</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-gray-900">Make the next moment memorable.</h1>
        <p className="mt-3 max-w-2xl text-gray-600">Your event projects, concepts, designs, and production details in one place.</p>
      </header>

      <section aria-label="Workspace sections" className="grid gap-4 sm:grid-cols-2">
        {workspaces.map((workspace) => (
          <Link
            key={workspace.href}
            href={workspace.href}
            className={`group flex min-h-40 flex-col justify-between rounded-xl border border-white border-l-4 ${workspace.accent} bg-white/85 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-rose-800">{workspace.title}</h2>
                <p className="mt-2 max-w-sm text-sm leading-5 text-gray-600">{workspace.detail}</p>
              </div>
              <span className="font-serif text-sm text-gray-400">{workspace.number}</span>
            </div>
            <span className="mt-5 text-sm font-semibold text-rose-700 transition-transform group-hover:translate-x-1">Open workspace →</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
