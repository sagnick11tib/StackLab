"use client";

import type { KeyboardEvent, ReactElement, ReactNode } from "react";
import { Children, isValidElement, useId, useState } from "react";

type TabProps = {
  children: ReactNode;
  title: string;
};

type TabsProps = {
  children: ReactNode;
};

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

export function Tabs({ children }: TabsProps) {
  const tabs = Children.toArray(children).filter(
    isValidElement<TabProps>,
  ) as ReactElement<TabProps>[];
  const [activeIndex, setActiveIndex] = useState(0);
  const instanceId = useId();

  if (tabs.length === 0) {
    return null;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight" &&
      event.key !== "Home" &&
      event.key !== "End"
    ) {
      return;
    }

    event.preventDefault();

    if (event.key === "Home") {
      setActiveIndex(0);
      return;
    }

    if (event.key === "End") {
      setActiveIndex(tabs.length - 1);
      return;
    }

    const direction = event.key === "ArrowRight" ? 1 : -1;
    setActiveIndex(
      (currentIndex) => (currentIndex + direction + tabs.length) % tabs.length,
    );
  }

  return (
    <div className="mt-6 rounded-[1.4rem] border border-border bg-surface shadow-[var(--sl-shadow-panel)]">
      <div
        aria-label="Tabbed content"
        className="flex flex-wrap gap-2 border-b border-border px-4 py-3"
        onKeyDown={handleKeyDown}
        role="tablist"
      >
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;
          const tabId = `${instanceId}-tab-${index}`;
          const panelId = `${instanceId}-panel-${index}`;

          return (
            <button
              aria-controls={panelId}
              aria-selected={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-accent bg-accent text-background"
                  : "border-border bg-surface-muted text-foreground-soft hover:border-accent hover:text-foreground"
              }`}
              id={tabId}
              key={tab.props.title}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            >
              {tab.props.title}
            </button>
          );
        })}
      </div>
      {tabs.map((tab, index) => {
        const isActive = activeIndex === index;
        const tabId = `${instanceId}-tab-${index}`;
        const panelId = `${instanceId}-panel-${index}`;

        return (
          <div
            aria-labelledby={tabId}
            className={
              isActive
                ? "px-5 py-5 text-sm leading-7 text-foreground-soft"
                : "hidden"
            }
            id={panelId}
            key={panelId}
            role="tabpanel"
          >
            {tab.props.children}
          </div>
        );
      })}
    </div>
  );
}
