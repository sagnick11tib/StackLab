import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const isHostedBuild = Boolean(process.env.VERCEL || process.env.CI);

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? (isHostedBuild ? undefined : "http://localhost:3000");

const docsUrl =
  process.env.NEXT_PUBLIC_DOCS_URL ?? (isHostedBuild ? undefined : "http://localhost:3333");

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
    NEXT_PUBLIC_DOCS_URL: z.string().url()
  },
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
    NEXT_PUBLIC_DOCS_URL: docsUrl
  }
});
