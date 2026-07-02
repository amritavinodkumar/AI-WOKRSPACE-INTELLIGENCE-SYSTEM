import { Bell, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 pl-14 sm:flex sm:flex-wrap sm:justify-between sm:pl-0">
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Overview</p>
        <h1 className="mt-1 truncate font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Welcome back, <span className="gradient-text">Amrita</span>
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">Here's what your workspace AI surfaced today.</p>
      </div>
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm text-muted-foreground backdrop-blur-xl md:flex md:w-72">
          <Search className="h-4 w-4" />
          <input
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            placeholder="Search workspace…"
          />
          <kbd className="rounded border border-border bg-background/60 px-1.5 py-0.5 text-[10px] font-medium">⌘K</kbd>
        </div>
        <button
          aria-label="Notifications"
          className="relative grid h-10 w-10 place-items-center rounded-xl border border-border bg-secondary/40 text-foreground transition-colors hover:bg-secondary/70"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--gradient-primary)]" />
        </button>
        <div className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-secondary/40 py-1 pl-1 pr-3">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-primary)] text-xs font-bold text-primary-foreground">
            AM
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-xs font-semibold leading-tight">Amrita</p>
            <p className="text-[10px] text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}