import Link from "next/link";

import { siteMetadata } from "@/lib/metadata/site";

const checkpoints = [
  "App Router layout boundary is in place.",
  "Mintlify docs stay separate in apps/docs.",
  "CSS-variable tokens drive the theme contract.",
  "Playwright validates the first public route."
];

export function BoilerplateHero() {
  return (
    <section className="grid flex-1 gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:items-stretch">
      <div className="flex flex-col justify-center rounded-[2rem] border border-border bg-surface p-8 shadow-[var(--sl-shadow-panel)] backdrop-blur sm:p-10">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-accent">
          Next.js production boilerplate
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-balance text-foreground sm:text-5xl lg:text-6xl">
          {siteMetadata.name}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-foreground-soft sm:text-lg">
          {siteMetadata.description} This first commit intentionally stops at structure,
          metadata, validation, testing, and token wiring so the landing page can grow on a
          stable foundation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-background transition hover:brightness-110"
            href={siteMetadata.docsUrl}
          >
            Open Docs Workspace
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
            href="/"
          >
            Landing Shell Ready
          </Link>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="rounded-[2rem] border border-border bg-surface-muted p-6 shadow-[var(--sl-shadow-panel)] backdrop-blur">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-foreground-muted">
            Current scope
          </p>
          <div className="mt-4 grid gap-3">
            {checkpoints.map((checkpoint) => (
              <div
                key={checkpoint}
                className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground-soft"
              >
                {checkpoint}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--sl-shadow-panel)] backdrop-blur">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-foreground-muted">
            Locked defaults
          </p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border border-border bg-surface-muted p-4">
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-foreground-muted">
                Framework
              </dt>
              <dd className="mt-2 text-foreground-soft">Next.js 15 App Router</dd>
            </div>
            <div className="rounded-2xl border border-border bg-surface-muted p-4">
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-foreground-muted">
                Styling
              </dt>
              <dd className="mt-2 text-foreground-soft">Tailwind CSS 4 + tokens</dd>
            </div>
            <div className="rounded-2xl border border-border bg-surface-muted p-4">
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-foreground-muted">
                Docs
              </dt>
              <dd className="mt-2 text-foreground-soft">Mintlify in apps/docs</dd>
            </div>
            <div className="rounded-2xl border border-border bg-surface-muted p-4">
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-foreground-muted">
                Runtime
              </dt>
              <dd className="mt-2 text-foreground-soft">Node.js on Vercel</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
