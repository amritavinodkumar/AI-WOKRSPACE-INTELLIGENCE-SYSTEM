import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { day: "Mon", queries: 120, docs: 32 },
  { day: "Tue", queries: 198, docs: 41 },
  { day: "Wed", queries: 240, docs: 58 },
  { day: "Thu", queries: 305, docs: 49 },
  { day: "Fri", queries: 268, docs: 72 },
  { day: "Sat", queries: 360, docs: 88 },
  { day: "Sun", queries: 412, docs: 95 },
];

export function UsageChart() {
  return (
    <div className="glass-card p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold">AI Activity</h3>
          <p className="text-sm text-muted-foreground">Queries and documents processed</p>
        </div>
        <div className="flex gap-1 rounded-xl border border-border bg-secondary/40 p-1 text-xs">
          {["7d", "30d", "90d"].map((r, i) => (
            <button
              key={r}
              className={
                i === 0
                  ? "rounded-lg bg-[var(--gradient-primary)] px-3 py-1.5 font-semibold text-primary-foreground"
                  : "rounded-lg px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="gradQueries" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.7 0.22 295)" stopOpacity={0.7} />
                <stop offset="100%" stopColor="oklch(0.7 0.22 295)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradDocs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.85 0.15 200)" stopOpacity={0.6} />
                <stop offset="100%" stopColor="oklch(0.85 0.15 200)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 6" stroke="oklch(1 0 0 / 0.06)" />
            <XAxis dataKey="day" stroke="oklch(0.72 0.04 280)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="oklch(0.72 0.04 280)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "oklch(0.2 0.04 280 / 0.95)",
                border: "1px solid oklch(1 0 0 / 0.1)",
                borderRadius: 12,
                color: "oklch(0.96 0.01 280)",
                backdropFilter: "blur(12px)",
              }}
              cursor={{ stroke: "oklch(0.7 0.22 295 / 0.4)", strokeWidth: 1 }}
            />
            <Area type="monotone" dataKey="queries" stroke="oklch(0.7 0.22 295)" strokeWidth={2.5} fill="url(#gradQueries)" />
            <Area type="monotone" dataKey="docs" stroke="oklch(0.85 0.15 200)" strokeWidth={2.5} fill="url(#gradDocs)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}