const isHostedBuild = Boolean(process.env.VERCEL || process.env.CI);

function getEnv(name: string, fallback?: string) {
  const value = process.env[name] ?? (isHostedBuild ? undefined : fallback);

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const docsSite = {
  name: "StackLab Docs",
  description:
    "Production documentation for StackLab's product vision, labs, templates, and contributor guidance.",
  siteUrl: getEnv("NEXT_PUBLIC_SITE_URL", "http://localhost:3000"),
  docsUrl: getEnv("NEXT_PUBLIC_DOCS_URL", "http://localhost:3001"),
  repoUrl: "https://github.com/sagnick11tib/StackLab",
} as const;
