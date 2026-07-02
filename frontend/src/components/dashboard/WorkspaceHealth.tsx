import { Activity, Database, ShieldCheck, Zap } from "lucide-react";

const metrics = [
  { label: "Indexing health", value: 96, icon: Activity, hint: "All collections synced" },
  { label: "Storage used", value: 64, icon: Database, hint: "12.8 GB of 20 GB" },
  { label: "Security score", value: 88, icon: ShieldCheck, hint: "MFA + SSO enabled" },
  { label: "AI latency", value: 72, icon: Zap, hint: "P95 380ms" },
];

export function WorkspaceHealth() {
  return (
    <div className="glass-card p-6">
      <div>
        <h3 className="font-display text-lg font-semibold">Workspace health</h3>
        <p className="text-sm text-muted-foreground">Real-time signals across your AI stack</p>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary/60 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{m.label}</p>
                    <p className="text-xs text-muted-foreground">{m.hint}</p>
                  </div>
                </div>
                <span className="font-display text-sm font-bold tabular-nums">{m.value}%</span>
              </div>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary/60">
                <div
                  className="h-full rounded-full bg-[var(--gradient-primary)] transition-[width] duration-700"
                  style={{ width: `${m.value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}