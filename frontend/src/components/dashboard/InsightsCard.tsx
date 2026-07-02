import { Sparkles, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    tag: "Trend",
    title: "Engineering docs cited 3x more this week",
    body: "Architecture decisions are driving 62% of AI Assistant lookups.",
    accent: "from-[oklch(0.72_0.2_250)] to-[oklch(0.7_0.22_295)]",
  },
  {
    icon: AlertTriangle,
    tag: "Attention",
    title: "12 documents missing summaries",
    body: "Generate AI summaries to improve retrieval quality by ~18%.",
    accent: "from-[oklch(0.75_0.2_340)] to-[oklch(0.7_0.22_295)]",
  },
  {
    icon: Lightbulb,
    tag: "Suggestion",
    title: "Cluster 'Onboarding' into a workspace",
    body: "9 related files detected. Grouping speeds up team search.",
    accent: "from-[oklch(0.85_0.15_200)] to-[oklch(0.72_0.2_250)]",
  },
];

export function InsightsCard() {
  return (
    <div className="glass-card gradient-border relative overflow-hidden p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)]">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">AI Insights</h3>
            <p className="text-xs text-muted-foreground">Generated 2 minutes ago</p>
          </div>
        </div>
        <button className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
          Refresh
        </button>
      </div>
      <ul className="mt-5 space-y-3">
        {insights.map((i) => {
          const Icon = i.icon;
          return (
            <li
              key={i.title}
              className="group flex gap-3 rounded-xl border border-border bg-secondary/30 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/50"
            >
              <div
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${i.accent} text-primary-foreground shadow-md transition-transform group-hover:scale-110`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-primary/80">{i.tag}</p>
                <p className="mt-0.5 truncate text-sm font-semibold">{i.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{i.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}