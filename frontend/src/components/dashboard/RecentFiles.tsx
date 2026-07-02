import { FileText, FileCode, FileImage, FileSpreadsheet, MoreHorizontal } from "lucide-react";

const files = [
  { name: "Q3 Strategy Roadmap.pdf", type: "PDF", size: "4.2 MB", updated: "2m ago", icon: FileText, color: "text-rose-300 bg-rose-400/15" },
  { name: "API Architecture.md", type: "MD", size: "32 KB", updated: "18m ago", icon: FileCode, color: "text-violet-300 bg-violet-400/15" },
  { name: "Brand Guidelines.fig", type: "FIG", size: "12.8 MB", updated: "1h ago", icon: FileImage, color: "text-cyan-300 bg-cyan-400/15" },
  { name: "Revenue Forecast.xlsx", type: "XLSX", size: "892 KB", updated: "3h ago", icon: FileSpreadsheet, color: "text-emerald-300 bg-emerald-400/15" },
  { name: "Onboarding Playbook.docx", type: "DOCX", size: "1.1 MB", updated: "Yesterday", icon: FileText, color: "text-sky-300 bg-sky-400/15" },
];

export function RecentFiles() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold">Recent files</h3>
          <p className="text-sm text-muted-foreground">Latest activity across your workspace</p>
        </div>
        <button className="text-xs font-medium text-primary transition-opacity hover:opacity-80">View all</button>
      </div>
      <ul className="mt-4 divide-y divide-border/60">
        {files.map((f) => {
          const Icon = f.icon;
          return (
            <li
              key={f.name}
              className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 transition-colors hover:bg-secondary/30"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${f.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{f.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {f.type} · {f.size} · {f.updated}
                  </p>
                </div>
              </div>
              <button
                className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition-opacity hover:bg-secondary"
                aria-label="More"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}