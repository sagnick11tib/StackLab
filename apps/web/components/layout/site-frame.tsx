import Link from "next/link";
import type { ReactNode } from "react";

import { siteMetadata } from "@/lib/metadata/site";

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(53,110,196,0.2),transparent_45%),linear-gradient(180deg,rgba(5,8,18,0),rgba(5,8,18,0.8))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(117,140,173,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(117,140,173,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <header className="mb-10 flex items-center justify-between rounded-full border border-border bg-surface px-5 py-3 shadow-[var(--sl-shadow-panel)] backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-2.5 rounded-full bg-signal shadow-[0_0_18px_rgba(87,233,168,0.8)]" />
            <div className="flex flex-col">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-foreground-muted">
                Engineering Platform
              </span>
              <span className="text-sm font-semibold text-foreground">{siteMetadata.name}</span>
            </div>
          </div>
          <nav className="flex items-center gap-3 text-sm text-foreground-soft">
            <Link
              className="rounded-full border border-border px-4 py-2 transition hover:border-accent hover:text-foreground"
              href={siteMetadata.docsUrl}
            >
              Docs
            </Link>
          </nav>
        </header>
        {children}
        <footer className="mt-12 border-t border-border py-6 font-mono text-xs uppercase tracking-[0.18em] text-foreground-muted">
          Boilerplate foundation for the StackLab landing surface and future product shell.
        </footer>
      </div>
    </div>
  );
}
