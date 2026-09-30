import Link from "next/link";

const metrics = [
  {
    label: "Active projects",
    value: "10",
    detail: "+2 this month",
    href: "/projects",
    color: "text-rose-700",
    darkColor: "dark:text-rose-300",
    darkSurface: "dark:border-rose-300/25 dark:bg-[#2b1b28] dark:hover:border-rose-300 dark:hover:shadow-[0_16px_34px_rgba(244,63,94,0.18)]",
  },
  {
    label: "Awaiting approval",
    value: "03",
    detail: "1 due today",
    href: "/projects",
    color: "text-amber-700",
    darkColor: "dark:text-amber-300",
    darkSurface: "dark:border-amber-300/25 dark:bg-[#302719] dark:hover:border-amber-300 dark:hover:shadow-[0_16px_34px_rgba(251,191,36,0.16)]",
  },
  {
    label: "In production",
    value: "03",
    detail: "2 installs this week",
    href: "/production",
    color: "text-emerald-700",
    darkColor: "dark:text-emerald-300",
    darkSurface: "dark:border-emerald-300/25 dark:bg-[#1b3029] dark:hover:border-emerald-300 dark:hover:shadow-[0_16px_34px_rgba(52,211,153,0.16)]",
  },
  {
    label: "Upcoming installs",
    value: "03",
    detail: "Next: Monday, 28 Sep",
    href: "/production",
    color: "text-sky-700",
    darkColor: "dark:text-sky-300",
    darkSurface: "dark:border-sky-300/25 dark:bg-[#1b293a] dark:hover:border-sky-300 dark:hover:shadow-[0_16px_34px_rgba(56,189,248,0.16)]",
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
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Event production overview · Demo workspace data</p>
        </div>
        <Link
          href="/design-studio"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-800 hover:shadow-lg dark:bg-rose-700 dark:hover:bg-rose-600"
        >
          Open Design Studio
        </Link>
      </header>

      <section aria-label="Project metrics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Link
            key={metric.label}
            href={metric.href}
            className={`flex min-h-32 flex-col justify-between rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-rose-200 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 ${metric.darkSurface}`}
          >
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{metric.label}</span>
            <span className={`text-3xl font-bold ${metric.color} ${metric.darkColor}`}>{metric.value}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{metric.detail}</span>
          </Link>
        ))}
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-violet-300/20 dark:bg-[#242039] dark:hover:border-violet-300/50 dark:hover:shadow-[0_16px_34px_rgba(167,139,250,0.16)]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Project pipeline</h2>
              <p className="text-sm text-slate-500 dark:text-slate-300">12 projects across all stages</p>
            </div>
            <Link href="/projects" className="text-sm font-medium text-rose-700 transition-colors hover:text-orange-700 hover:underline dark:text-rose-300 dark:hover:text-amber-200">
              View projects
            </Link>
          </div>

          <div className="space-y-4">
            {projectStages.map((stage) => (
              <div key={stage.label}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-slate-700 dark:text-slate-200">{stage.label}</span>
                  <span className="font-medium text-slate-900 dark:text-white">{stage.count}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                  <div className={`h-full rounded-full ${stage.width} ${stage.color}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-cyan-300/20 dark:bg-[#172a35] dark:hover:border-cyan-300/50 dark:hover:shadow-[0_16px_34px_rgba(34,211,238,0.14)]">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Upcoming schedule</h2>
              <p className="text-sm text-slate-500 dark:text-slate-300">Installations · 28 Sep–02 Oct</p>
            </div>
            <Link href="/production" className="text-sm font-medium text-rose-700 transition-colors hover:text-orange-700 hover:underline dark:text-rose-300 dark:hover:text-amber-200">
              Production
            </Link>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-700/70">
            {schedule.map((item) => (
              <div key={item.project} className="grid grid-cols-[6.5rem_1fr] gap-3 rounded-lg py-3 transition-all duration-200 first:pt-2 last:pb-1 hover:translate-x-1 hover:bg-rose-50/60 dark:hover:bg-[#382531]">
                <span className="pt-0.5 text-xs font-semibold tracking-wide text-rose-700 dark:text-rose-300">{item.date}</span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{item.project}</h3>
                  <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-300">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-emerald-300/20 dark:bg-[#1b3029] dark:hover:border-emerald-300/50 dark:hover:shadow-[0_16px_34px_rgba(52,211,153,0.14)]">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent activity</h2>
          <span className="text-sm text-slate-500 dark:text-slate-300">Latest updates</span>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-700/70">
          {activity.map((item) => (
            <div key={item.project} className="flex flex-wrap items-center gap-3 rounded-lg py-3 transition-all duration-200 first:pt-2 last:pb-1 hover:translate-x-1 hover:bg-rose-50/60 dark:hover:bg-[#203a30]">
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} aria-hidden="true" />
              <p className="min-w-48 flex-1 text-sm text-slate-700 dark:text-slate-200">
                <span className="font-semibold text-slate-900 dark:text-white">{item.project}</span>
                <span className="mx-2 text-slate-400">·</span>
                {item.action}
              </p>
              <time className="text-xs text-slate-500 dark:text-slate-400">{item.time}</time>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}