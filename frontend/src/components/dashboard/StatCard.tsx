import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  delta: number;
  hint: string;
  icon: LucideIcon;
  accent?: "purple" | "blue" | "cyan" | "pink";
}

const accentMap: Record<NonNullable<StatCardProps["accent"]>, string> = {
  purple: "from-[oklch(0.7_0.22_295)] to-[oklch(0.7_0.22_320)]",
  blue: "from-[oklch(0.72_0.2_250)] to-[oklch(0.7_0.22_295)]",
  cyan: "from-[oklch(0.85_0.15_200)] to-[oklch(0.72_0.2_250)]",
  pink: "from-[oklch(0.75_0.2_340)] to-[oklch(0.7_0.22_295)]",
};

export function StatCard({ label, value, delta, hint, icon: Icon, accent = "purple" }: StatCardProps) {
  const positive = delta >= 0;
  return (
    <div className="glass-card glass-card-hover group relative overflow-hidden p-5">
      <div
        className={cn(
          "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-50",
          accentMap[accent],
        )}
      />
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
            accentMap[accent],
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <span
          className={cn(
            "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold",
            positive ? "bg-emerald-400/15 text-emerald-300" : "bg-rose-400/15 text-rose-300",
          )}
        >
          {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {Math.abs(delta)}%
        </span>
      </div>
      <p className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-3xl font-bold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}