import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type AccordionGroupProps = {
  children: ReactNode;
};

type AccordionProps = {
  children: ReactNode;
  defaultOpen?: boolean;
  title: string;
};

type ColumnsProps = {
  children: ReactNode;
  cols?: number;
};

type CardProps = {
  children: ReactNode;
  href?: string;
  title: string;
};

const columnClassNameByCount: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
};

function getColumnClassName(cols: number) {
  return columnClassNameByCount[cols] ?? columnClassNameByCount[1];
}

export function AccordionGroup({ children }: AccordionGroupProps) {
  return <div className="mt-6 grid gap-4">{children}</div>;
}

export function Accordion({
  children,
  defaultOpen = false,
  title,
}: AccordionProps) {
  return (
    <details
      className="group rounded-[1.25rem] border border-border bg-surface shadow-[var(--sl-shadow-panel)]"
      open={defaultOpen}
    >
      <summary className="cursor-pointer list-none px-5 py-4 text-base font-semibold text-foreground marker:hidden">
        <span className="flex items-center justify-between gap-4">
          <span>{title}</span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted transition group-open:rotate-45">
            +
          </span>
        </span>
      </summary>
      <div className="border-t border-border px-5 py-4 text-sm leading-7 text-foreground-soft">
        {children}
      </div>
    </details>
  );
}

export function Columns({ children, cols = 2 }: ColumnsProps) {
  return (
    <div className={`mt-6 grid gap-4 ${getColumnClassName(cols)}`}>
      {children}
    </div>
  );
}

function CardInner({ children, title }: Pick<CardProps, "children" | "title">) {
  return (
    <>
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
        {title}
      </h3>
      <div className="mt-3 text-sm leading-7 text-foreground-soft">
        {children}
      </div>
    </>
  );
}

const cardStyle: CSSProperties = {
  boxShadow: "var(--sl-shadow-panel)",
};

export function Card({ children, href, title }: CardProps) {
  const className =
    "block rounded-[1.4rem] border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-accent hover:text-foreground";

  if (href) {
    return (
      <Link className={className} href={href} style={cardStyle}>
        <CardInner title={title}>{children}</CardInner>
      </Link>
    );
  }

  return (
    <div className={className} style={cardStyle}>
      <CardInner title={title}>{children}</CardInner>
    </div>
  );
}
