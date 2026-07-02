import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  Copy,
  FileText,
  Folder,
  FolderTree,
  Hash,
  Layers,
  type LucideIcon,
  Search,
  ShieldCheck,
  Sparkles,
  Tag,
  Upload,
  Activity,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroDesk — AI Workspace Intelligence System" },
      {
        name: "description",
        content:
          "Transform scattered documents into actionable intelligence. Upload, organize, summarize, classify, and detect duplicates across your workspace.",
      },
      { property: "og:title", content: "NeuroDesk — AI Workspace Intelligence System" },
      {
        property: "og:description",
        content: "Enterprise-grade document intelligence with AI-powered summaries, classification, and duplicate detection.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen w-full text-foreground">
      <Nav />
      <main className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Hero />
        <DashboardPreview />
        <Features />
        <UploadSection />
        <RecentDocuments />
        <InsightsPanel />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-background">
            <Layers className="h-4 w-4" strokeWidth={2.4} />
          </div>
          <span className="text-sm font-semibold tracking-tight">NeuroDesk</span>
          <span className="ml-1 rounded-md border border-border bg-card px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            Enterprise
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#dashboard" className="transition-colors hover:text-foreground">Dashboard</a>
          <a href="#insights" className="transition-colors hover:text-foreground">Insights</a>
          <a href="#docs" className="transition-colors hover:text-foreground">Documentation</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden h-8 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex sm:items-center">
            Sign in
          </button>
          <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-foreground px-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
            Launch Workspace
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="grid gap-12 pt-16 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-24 lg:pb-28">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          New · Workspace Health analytics v2
        </div>
        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
          AI Workspace<br />
          Intelligence System
        </h1>
        <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
          Transform scattered documents into actionable intelligence. Upload, organize, summarize, classify, detect duplicates, and gain AI-powered insights from your workspace.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90">
            Launch Workspace
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="#features"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            View Features
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5" /> SOC 2 Type II</div>
          <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5" /> End-to-end encryption</div>
          <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5" /> Self-hosted option</div>
        </div>
      </div>

      <HeroWorkspacePreview />
    </section>
  );
}

function HeroWorkspacePreview() {
  const files = [
    { name: "Q4-Strategy-Memo.pdf", folder: "Strategy", status: "Summarized", dup: false },
    { name: "Vendor-Agreement-v3.pdf", folder: "Legal", status: "Classified", dup: true },
    { name: "Engineering-RFC-042.pdf", folder: "Engineering", status: "Summarized", dup: false },
    { name: "Onboarding-Handbook.docx", folder: "People", status: "Indexed", dup: false },
  ];
  return (
    <div className="surface-card animate-fade-up overflow-hidden p-4 shadow-[var(--shadow-elevated)] [animation-delay:120ms]">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#232323]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#232323]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#232323]" />
        </div>
        <div className="hairline rounded-md px-2 py-1 text-[11px] text-muted-foreground">workspace · acme-corp</div>
        <div className="w-10" />
      </div>
      <div className="grid grid-cols-[110px_1fr] gap-0 pt-3">
        <aside className="border-r border-border pr-3">
          <p className="px-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Folders</p>
          <ul className="mt-2 space-y-0.5 text-xs">
            {["Strategy", "Legal", "Engineering", "People", "Finance"].map((f, i) => (
              <li
                key={f}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5",
                  i === 0 ? "bg-secondary text-foreground" : "text-muted-foreground",
                )}
              >
                <Folder className="h-3 w-3" />
                {f}
              </li>
            ))}
          </ul>
        </aside>
        <div className="pl-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold">Strategy</p>
            <span className="text-[10px] text-muted-foreground">4 files</span>
          </div>
          <ul className="mt-2 space-y-1.5">
            {files.map((f) => (
              <li
                key={f.name}
                className="hairline group flex items-center justify-between rounded-md bg-background/40 px-2.5 py-2 text-xs transition-colors hover:bg-secondary/60"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <FileText className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  <span className="truncate font-medium">{f.name}</span>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  {f.dup && (
                    <span className="hairline rounded-md bg-background px-1.5 py-0.5 text-[9px] text-[#f59e0b]">
                      Duplicate
                    </span>
                  )}
                  <span className="rounded-md bg-[#10B981]/10 px-1.5 py-0.5 text-[9px] font-medium text-[#10B981]">
                    {f.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="hairline mt-3 rounded-md bg-background/40 p-2.5">
            <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-3 w-3 text-[#3B82F6]" />
              AI Summary · Q4-Strategy-Memo
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-foreground/90">
              Prioritizes APAC expansion in H1, defers EU launch, and consolidates two pricing tiers. 3 dependencies on Engineering RFC-042.
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {["apac", "pricing", "h1-roadmap", "rfc-042"].map((k) => (
                <span key={k} className="hairline rounded bg-background px-1.5 py-0.5 text-[9px] text-muted-foreground">
                  #{k}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-md border border-border bg-background/40 px-2.5 py-2 text-[11px]">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Activity className="h-3 w-3" /> Workspace Health
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-24 overflow-hidden rounded-full bg-secondary">
                <span className="block h-full w-[86%] bg-[#10B981]" />
              </span>
              <span className="font-medium tabular-nums">86</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Dashboard Preview ---------------- */
function DashboardPreview() {
  const stats = [
    { label: "Total Documents", value: "1,284", delta: "+24 this week" },
    { label: "Storage Used", value: "18.4 GB", delta: "of 100 GB" },
    { label: "AI Insights", value: "312", delta: "Generated this month" },
    { label: "Workspace Health", value: "86 / 100", delta: "Healthy" },
  ];
  return (
    <section id="dashboard" className="py-20 lg:py-28">
      <SectionHeader
        eyebrow="Dashboard"
        title="A workspace built for clarity."
        description="Surface what matters first — recent uploads, AI signals, and the health of your knowledge base."
      />

      <div className="surface-card mt-12 overflow-hidden">
        {/* App chrome */}
        <div className="flex items-center justify-between border-b border-border bg-background/30 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-6 w-6 place-items-center rounded-md bg-foreground text-background">
              <Layers className="h-3.5 w-3.5" strokeWidth={2.4} />
            </div>
            <span className="text-sm font-medium">Acme Workspace</span>
            <span className="hairline rounded px-1.5 py-0.5 text-[10px] text-muted-foreground">Pro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="hairline hidden items-center gap-2 rounded-md bg-background px-2.5 py-1.5 text-xs text-muted-foreground sm:flex sm:w-72">
              <Search className="h-3.5 w-3.5" />
              <span className="truncate">Search documents, folders, summaries…</span>
              <kbd className="ml-auto hairline rounded bg-secondary px-1 text-[10px]">⌘K</kbd>
            </div>
            <button className="hairline grid h-8 w-8 place-items-center rounded-md text-muted-foreground">
              <Bell className="h-3.5 w-3.5" />
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-[#3B82F6] px-3 text-xs font-medium text-white">
              <Upload className="h-3.5 w-3.5" />
              Upload
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[200px_1fr]">
          <aside className="border-b border-border p-4 lg:border-b-0 lg:border-r">
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Workspace</p>
            <ul className="mt-3 space-y-0.5 text-sm">
              {[
                { label: "Overview", icon: Layers, active: true },
                { label: "Documents", icon: FileText },
                { label: "Folders", icon: FolderTree },
                { label: "Insights", icon: Sparkles },
                { label: "Search", icon: Search },
              ].map((i) => (
                <li
                  key={i.label}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
                    i.active ? "bg-secondary text-foreground" : "text-muted-foreground",
                  )}
                >
                  <i.icon className="h-3.5 w-3.5" /> {i.label}
                </li>
              ))}
            </ul>
          </aside>

          <div className="p-5 lg:p-6">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="hairline rounded-lg bg-background/40 p-4">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="mt-1.5 text-2xl font-semibold tracking-tight tabular-nums">{s.value}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{s.delta}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-3">
              <div className="hairline rounded-lg bg-background/40 p-4 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Recent Uploads</p>
                  <button className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                    View all
                  </button>
                </div>
                <ul className="mt-3 divide-y divide-border">
                  {[
                    { name: "Q4-Strategy-Memo.pdf", who: "Amrita · 2m ago" },
                    { name: "Vendor-Agreement-v3.pdf", who: "Legal Bot · 14m ago" },
                    { name: "Engineering-RFC-042.pdf", who: "Jordan · 1h ago" },
                  ].map((u) => (
                    <li key={u.name} className="flex items-center justify-between py-2.5 text-sm">
                      <div className="flex items-center gap-2.5">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{u.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{u.who}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline rounded-lg bg-background/40 p-4">
                <p className="flex items-center gap-1.5 text-sm font-medium">
                  <Sparkles className="h-3.5 w-3.5 text-[#3B82F6]" /> AI Insights
                </p>
                <ul className="mt-3 space-y-3 text-xs">
                  <li>
                    <p className="text-foreground">12 documents missing summaries</p>
                    <p className="text-muted-foreground">Generate to improve search recall.</p>
                  </li>
                  <li>
                    <p className="text-foreground">3 duplicate contracts detected</p>
                    <p className="text-muted-foreground">Legal · last 7 days.</p>
                  </li>
                  <li>
                    <p className="text-foreground">Cluster "Onboarding" suggested</p>
                    <p className="text-muted-foreground">9 related files in People.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */
function Features() {
  const features: { icon: LucideIcon; title: string; desc: string }[] = [
    { icon: FolderTree, title: "Smart Document Organization", desc: "Auto-classify uploads into folders by topic, team, and document type." },
    { icon: Sparkles, title: "AI Document Summarization", desc: "Concise summaries with key decisions and dependencies surfaced upfront." },
    { icon: Copy, title: "Duplicate Detection", desc: "Identify near-identical files and consolidate redundant versions safely." },
    { icon: Tag, title: "Keyword Extraction", desc: "Pull entities, topics, and tags so every document is searchable in seconds." },
    { icon: Search, title: "Intelligent Search", desc: "Semantic search across the entire workspace, including PDFs and contracts." },
    { icon: Activity, title: "Workspace Health Analytics", desc: "Track coverage, freshness, and quality signals across your knowledge base." },
  ];
  return (
    <section id="features" className="py-20 lg:py-28">
      <SectionHeader
        eyebrow="Features"
        title="Everything you need to operate a knowledge base."
        description="Six purpose-built capabilities. No bloat, no AI theater — just tools your team will actually use."
      />
      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group bg-card p-6 transition-colors hover:bg-[oklch(0.19_0_0)]"
          >
            <div className="hairline grid h-9 w-9 place-items-center rounded-md bg-background text-foreground transition-colors group-hover:border-[#3B82F6]/40 group-hover:text-[#3B82F6]">
              <f.icon className="h-4 w-4" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-base font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Upload Section ---------------- */
function UploadSection() {
  const [drag, setDrag] = useState(false);
  return (
    <section className="py-20 lg:py-24">
      <SectionHeader
        eyebrow="Upload"
        title="Bring your documents in."
        description="Drag and drop to ingest. We handle parsing, OCR, and classification automatically."
      />
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <label
          onDragOver={(e) => {
            e.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDrag(false);
          }}
          className={cn(
            "group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-card px-6 py-16 text-center transition-all",
            drag && "border-[#3B82F6] bg-[#3B82F6]/5",
          )}
        >
          <div className="hairline grid h-12 w-12 place-items-center rounded-xl bg-background text-foreground transition-colors group-hover:border-[#3B82F6]/40 group-hover:text-[#3B82F6]">
            <Upload className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <p className="text-sm font-medium">Drop files here or click to browse</p>
          <p className="text-xs text-muted-foreground">Supported formats: PDF, DOCX, TXT · up to 25MB</p>
          <input type="file" className="hidden" multiple />
        </label>

        <div className="surface-card p-6">
          <p className="text-sm font-medium">What happens next</p>
          <ol className="mt-4 space-y-3 text-sm">
            {[
              "Files are parsed and OCR'd when needed.",
              "AI generates a summary and extracts keywords.",
              "Documents are classified into folders.",
              "Duplicates are flagged for your review.",
            ].map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="hairline mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-background text-[10px] font-medium tabular-nums">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Recent Documents Table ---------------- */
function RecentDocuments() {
  const rows = [
    { name: "Q4-Strategy-Memo.pdf", type: "PDF", size: "2.4 MB", date: "Jun 30, 2026", status: "Summarized", tone: "emerald" },
    { name: "Vendor-Agreement-v3.pdf", type: "PDF", size: "1.1 MB", date: "Jun 29, 2026", status: "Duplicate", tone: "amber" },
    { name: "Engineering-RFC-042.pdf", type: "PDF", size: "812 KB", date: "Jun 28, 2026", status: "Classified", tone: "blue" },
    { name: "Onboarding-Handbook.docx", type: "DOCX", size: "640 KB", date: "Jun 27, 2026", status: "Indexed", tone: "muted" },
    { name: "Brand-Voice-Guide.txt", type: "TXT", size: "48 KB", date: "Jun 26, 2026", status: "Summarized", tone: "emerald" },
  ];
  const tones: Record<string, string> = {
    emerald: "bg-[#10B981]/10 text-[#10B981]",
    blue: "bg-[#3B82F6]/10 text-[#3B82F6]",
    amber: "bg-[#f59e0b]/10 text-[#f59e0b]",
    muted: "bg-secondary text-muted-foreground",
  };
  return (
    <section id="docs" className="py-20 lg:py-24">
      <SectionHeader
        eyebrow="Recent Documents"
        title="Every file, instantly understood."
        description="A clear view of what's been added, processed, and where it lives."
      />
      <div className="surface-card mt-10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-background/30 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-medium">File Name</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Size</th>
                <th className="px-5 py-3 font-medium">Date Uploaded</th>
                <th className="px-5 py-3 font-medium">AI Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="border-b border-border last:border-0 transition-colors hover:bg-secondary/30">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">{r.type}</td>
                  <td className="px-5 py-3.5 text-muted-foreground tabular-nums">{r.size}</td>
                  <td className="px-5 py-3.5 text-muted-foreground tabular-nums">{r.date}</td>
                  <td className="px-5 py-3.5">
                    <span className={cn("inline-flex rounded-md px-2 py-0.5 text-xs font-medium", tones[r.tone])}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI Insights Panel ---------------- */
function InsightsPanel() {
  return (
    <section id="insights" className="py-20 lg:py-24">
      <SectionHeader
        eyebrow="AI Insights"
        title="Recommendations, not chit-chat."
        description="Insights are surfaced inline — summaries, duplicates, suggested folders, and workspace recommendations."
      />
      <div className="surface-card mt-10 grid grid-cols-1 divide-y divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        <div className="p-6 lg:p-8">
          <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[#3B82F6]" /> Generated summary
          </p>
          <p className="mt-3 text-sm font-medium">Q4-Strategy-Memo.pdf</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The memo prioritizes APAC expansion in H1, defers EU launch to Q3, and consolidates the existing four pricing tiers into two. Engineering RFC-042 is a hard dependency; Legal must clear two vendor agreements before kickoff.
          </p>

          <p className="mt-6 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <Hash className="h-3.5 w-3.5 text-[#10B981]" /> Important keywords
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {["apac-expansion", "pricing-tiers", "rfc-042", "vendor-clearance", "h1-roadmap", "consolidation"].map((k) => (
              <span key={k} className="hairline rounded-md bg-background px-2 py-1 text-xs text-foreground">
                {k}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <InsightRow
            icon={Copy}
            tone="amber"
            title="Duplicate warning"
            body="Vendor-Agreement-v3.pdf appears to be a near-identical copy of Vendor-Agreement-v2.pdf in Legal."
            action="Review duplicates"
          />
          <div className="my-5 border-t border-border" />
          <InsightRow
            icon={FolderTree}
            tone="blue"
            title="Suggested folder"
            body="Move Q4-Strategy-Memo.pdf into Strategy / FY26 to group with 6 related files."
            action="Apply suggestion"
          />
          <div className="my-5 border-t border-border" />
          <InsightRow
            icon={Activity}
            tone="emerald"
            title="Workspace recommendation"
            body="12 documents are missing summaries. Generating them is expected to improve search recall by ~18%."
            action="Generate summaries"
          />
        </div>
      </div>
    </section>
  );
}

function InsightRow({
  icon: Icon,
  tone,
  title,
  body,
  action,
}: {
  icon: LucideIcon;
  tone: "amber" | "blue" | "emerald";
  title: string;
  body: string;
  action: string;
}) {
  const colors: Record<string, string> = {
    amber: "text-[#f59e0b] bg-[#f59e0b]/10",
    blue: "text-[#3B82F6] bg-[#3B82F6]/10",
    emerald: "text-[#10B981] bg-[#10B981]/10",
  };
  return (
    <div className="flex gap-4">
      <div className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-md", colors[tone])}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
        <button className="mt-2.5 inline-flex items-center gap-1 text-xs font-medium text-foreground transition-opacity hover:opacity-80">
          {action} <ArrowUpRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

/* ---------------- CTA + Footer ---------------- */
function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="surface-card flex flex-col items-start justify-between gap-6 p-8 sm:p-10 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Bring intelligence to your workspace.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Start with your existing documents. NeuroDesk organizes, summarizes, and surfaces what matters — without changing how your team works.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90">
            Launch Workspace
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="#features"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            View Features
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center lg:px-8">
        <div className="flex items-center gap-2">
          <div className="grid h-5 w-5 place-items-center rounded bg-foreground text-background">
            <Layers className="h-3 w-3" strokeWidth={2.4} />
          </div>
          <span>NeuroDesk · AI Workspace Intelligence System</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
          <a href="#" className="transition-colors hover:text-foreground">Security</a>
          <a href="#" className="transition-colors hover:text-foreground">Status</a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Shared ---------------- */
function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
