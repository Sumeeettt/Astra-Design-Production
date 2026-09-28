import Link from "next/link";

const metrics = [
  {
    label: "Active projects",
    value: "10",
    detail: "+2 this month",
    href: "/projects",
    color: "text-rose-700",
  },
  {
    label: "Awaiting approval",
    value: "03",
    detail: "1 due today",
    href: "/projects",
    color: "text-amber-700",
  },
  {
    label: "In production",
    value: "03",
    detail: "2 installs this week",
    href: "/production",
    color: "text-emerald-700",
  },
  {
    label: "Upcoming installs",
    value: "03",
    detail: "Next: Monday, 28 Sep",
    href: "/production",
    color: "text-sky-700",
  },
];

const projectStages = [
  { label: "In design", count: 4, width: "w-1/3", color: "bg-rose-500" },
  { label: "Awaiting approval", count: 3, width: "w-1/4", color: "bg-amber-500" },
  { label: "In production", count: 3, width: "w-1/4", color: "bg-emerald-500" },
  { label: "Completed", count: 2, width: "w-1/6", color: "bg-sky-500" },
];

const schedule = [
  {
    date: "MON · 28 SEP",
    project: "Royal Wedding",
    detail: "Venue walk-through · Mumbai",
  },
  {
    date: "WED · 30 SEP",
    project: "Corporate Summit",
    detail: "Backdrop installation · Delhi",
  },
  {
    date: "FRI · 02 OCT",
    project: "Aurelia Product Launch",
    detail: "Product wall installation · Bengaluru",
  },
];

const activity = [
  {
    project: "Aurelia Product Launch",
    action: "Product wall moved to production",
    time: "2 hours ago",
    color: "bg-emerald-500",
  },
  {
    project: "Corporate Summit",
    action: "Backdrop revision sent for approval",
    time: "Yesterday",
    color: "bg-amber-500",
  },
  {
    project: "Royal Wedding",
    action: "Stage concept approved",
    time: "24 Sep",
    color: "bg-rose-500",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 text-gray-600">Event production overview · Demo workspace data</p>
        </div>
        <Link
          href="/design-studio"
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Open Design Studio
        </Link>
      </header>

      <section aria-label="Project metrics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Link
            key={metric.label}
            href={metric.href}
            className="flex min-h-32 flex-col justify-between rounded-xl border border-white/80 bg-white/90 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            <span className="text-sm font-medium text-gray-600">{metric.label}</span>
            <span className={`text-3xl font-bold ${metric.color}`}>{metric.value}</span>
            <span className="text-xs text-gray-500">{metric.detail}</span>
          </Link>
        ))}
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-xl border border-white/80 bg-white/90 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Project pipeline</h2>
              <p className="text-sm text-gray-500">12 projects across all stages</p>
            </div>
            <Link href="/projects" className="text-sm font-medium text-rose-700 hover:underline">
              View projects
            </Link>
          </div>

          <div className="space-y-4">
            {projectStages.map((stage) => (
              <div key={stage.label}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-gray-700">{stage.label}</span>
                  <span className="font-medium text-gray-900">{stage.count}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div className={`h-full rounded-full ${stage.width} ${stage.color}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-white/80 bg-white/90 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Upcoming schedule</h2>
              <p className="text-sm text-gray-500">Installations · 28 Sep–02 Oct</p>
            </div>
            <Link href="/production" className="text-sm font-medium text-rose-700 hover:underline">
              Production
            </Link>
          </div>

          <div className="divide-y divide-gray-100">
            {schedule.map((item) => (
              <div key={item.project} className="grid grid-cols-[6.5rem_1fr] gap-3 rounded-lg py-3 transition-colors first:pt-2 last:pb-1 hover:bg-rose-50/60">
                <span className="pt-0.5 text-xs font-semibold tracking-wide text-rose-700">{item.date}</span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{item.project}</h3>
                  <p className="mt-0.5 text-sm text-gray-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-white/80 bg-white/90 p-5 shadow-sm transition-shadow hover:shadow-md">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent activity</h2>
          <span className="text-sm text-gray-500">Latest updates</span>
        </div>
        <div className="divide-y divide-gray-100">
          {activity.map((item) => (
            <div key={item.project} className="flex flex-wrap items-center gap-3 rounded-lg py-3 transition-colors first:pt-2 last:pb-1 hover:bg-rose-50/60">
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} aria-hidden="true" />
              <p className="min-w-48 flex-1 text-sm text-gray-700">
                <span className="font-semibold text-gray-900">{item.project}</span>
                <span className="mx-2 text-gray-400">·</span>
                {item.action}
              </p>
              <time className="text-xs text-gray-500">{item.time}</time>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}