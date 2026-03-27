export const tokenMetadata = {
  theme: "stacklab-core",
  strategy: {
    sourceOfTruth: "css-variables",
    darkMode: "class"
  },
  fonts: {
    sans: "IBM Plex Sans",
    mono: "IBM Plex Mono"
  },
  semanticColors: {
    background: "--sl-color-background",
    foreground: "--sl-color-foreground",
    foregroundSoft: "--sl-color-foreground-soft",
    foregroundMuted: "--sl-color-foreground-muted",
    surface: "--sl-color-surface",
    surfaceMuted: "--sl-color-surface-muted",
    border: "--sl-color-border",
    accent: "--sl-color-accent",
    accentSoft: "--sl-color-accent-soft",
    signal: "--sl-color-signal",
    danger: "--sl-color-danger"
  },
  radii: {
    panel: "--sl-radius-panel",
    pill: "--sl-radius-pill"
  }
} as const;

export type TokenMetadata = typeof tokenMetadata;
