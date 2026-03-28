import "./globals.css";

import type { Metadata } from "next";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import type { ReactNode } from "react";

import { docsSite } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(docsSite.docsUrl),
  title: {
    default: docsSite.name,
    template: `%s | ${docsSite.name}`,
  },
  description: docsSite.description,
  alternates: {
    canonical: docsSite.docsUrl,
  },
  openGraph: {
    title: docsSite.name,
    description: docsSite.description,
    siteName: docsSite.name,
    type: "website",
    url: docsSite.docsUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: docsSite.name,
    description: docsSite.description,
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const pageMap = await getPageMap();

  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          docsRepositoryBase={`${docsSite.repoUrl}/tree/main/apps/docs/content`}
          footer={
            <Footer>
              <div className="flex flex-col gap-2 text-sm text-foreground-soft">
                <span>
                  Production documentation for StackLab, powered by Nextra.
                </span>
                <a className="font-medium text-accent" href={docsSite.siteUrl}>
                  Open the main StackLab site
                </a>
              </div>
            </Footer>
          }
          navbar={
            <Navbar
              logo={
                <span className="font-semibold tracking-[-0.03em]">
                  StackLab Docs
                </span>
              }
              projectLink={docsSite.repoUrl}
            />
          }
          pageMap={pageMap}
          sidebar={{
            defaultMenuCollapseLevel: 1,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
