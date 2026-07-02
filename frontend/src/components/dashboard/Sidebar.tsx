import { useState } from "react";
import { LayoutDashboard, FileText, Bot, BarChart3, Settings, Sparkles, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Dashboard", icon: LayoutDashboard, key: "dashboard" },
  { label: "Documents", icon: FileText, key: "documents" },
  { label: "AI Assistant", icon: Bot, key: "assistant" },
  { label: "Analytics", icon: BarChart3, key: "analytics" },
  { label: "Settings", icon: Settings, key: "settings" },
];

export function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed left-4 top-4 z-50 grid h-10 w-10 place-items-center rounded-xl border border-border bg-sidebar text-foreground backdrop-blur-xl lg:hidden"
        aria-label="Toggle navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col gap-8 border-r border-sidebar-border bg-sidebar p-6 backdrop-blur-2xl transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center gap-3">
          <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)]">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <p className="font-display text-base font-bold tracking-tight">NeuroDesk AI</p>
            <p className="text-xs text-muted-foreground">AI Workspace Intelligence System</p>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  setActive(item.key);
                  setOpen(false);
                }}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-sidebar-accent text-foreground shadow-[var(--shadow-glow)]"
                    : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground hover:translate-x-1",
                )}
              >
                {isActive && (
                  <span className="absolute inset-y-2 left-0 w-1 rounded-full bg-[var(--gradient-primary)]" />
                )}
                <Icon className={cn("h-4.5 w-4.5 transition-colors", isActive && "text-primary")} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="glass-card glass-card-hover gradient-border relative overflow-hidden p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Plan</p>
          <p className="mt-1 font-display text-lg font-bold gradient-text">Pro Workspace</p>
          <p className="mt-1 text-xs text-muted-foreground">Unlimited AI insights & docs</p>
          <button className="mt-3 w-full rounded-lg bg-[var(--gradient-primary)] px-3 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
            Manage plan
          </button>
        </div>
      </aside>
    </>
  );
}