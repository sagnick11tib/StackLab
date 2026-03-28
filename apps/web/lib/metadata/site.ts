import type { Metadata } from "next";

import { env } from "@/lib/env/public";

export const siteMetadata = {
  name: "StackLab",
  tagline: "Learn systems. Compare tradeoffs. Build better software.",
  description:
    "StackLab is an open-source platform for learning software engineering through simulations, architecture tradeoffs, and production-ready templates.",
  url: env.NEXT_PUBLIC_SITE_URL,
  docsUrl: env.NEXT_PUBLIC_DOCS_URL,
} as const;

export const marketingMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.name,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.name,
    description: siteMetadata.description,
    siteName: siteMetadata.name,
    type: "website",
    url: siteMetadata.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.name,
    description: siteMetadata.description,
  },
  alternates: {
    canonical: "/",
  },
};
