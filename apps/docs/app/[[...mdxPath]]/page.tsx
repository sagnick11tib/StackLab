import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import type { ReactNode } from "react";

import { docsSite } from "@/lib/site";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

type PageParams = {
  mdxPath?: string[];
};

type PageProps = {
  params: Promise<PageParams>;
};

type ImportedPage = Awaited<ReturnType<typeof importPage>>;

type DocsMetadata = {
  description?: string;
  title?: string;
};

type WrapperProps = {
  children: ReactNode;
  metadata: DocsMetadata;
  sourceCode?: string;
  toc: ImportedPage["toc"];
};

const Wrapper = getMDXComponents().wrapper as
  | ((props: WrapperProps) => ReactNode)
  | undefined;

function getRoutePath(segments?: string[]) {
  if (!segments || segments.length === 0) {
    return "/";
  }

  return `/${segments.join("/")}`;
}

function getCanonicalUrl(routePath: string) {
  return new URL(routePath, docsSite.docsUrl).toString();
}

async function loadPage(mdxPath?: string[]) {
  try {
    return await importPage(mdxPath);
  } catch {
    notFound();
  }
}

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { mdxPath } = await params;
  const routePath = getRoutePath(mdxPath);
  const canonicalUrl = getCanonicalUrl(routePath);
  const isHiddenRoute = routePath.startsWith("/hidden/");
  const page = await loadPage(mdxPath);
  const pageMetadata = (page.metadata ?? {}) as DocsMetadata;

  return {
    title: pageMetadata.title,
    description: pageMetadata.description ?? docsSite.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageMetadata.title ?? docsSite.name,
      description: pageMetadata.description ?? docsSite.description,
      siteName: docsSite.name,
      type: "website",
      url: canonicalUrl,
    },
    robots: {
      index: !isHiddenRoute,
      follow: !isHiddenRoute,
    },
  };
}

export default async function DocsPage({ params }: PageProps) {
  const { mdxPath } = await params;
  const page = await loadPage(mdxPath);
  const MDXContent = page.default;

  if (!Wrapper) {
    return (
      <article className="mx-auto max-w-3xl px-6 py-12">
        <MDXContent params={{ mdxPath }} />
      </article>
    );
  }

  return (
    <Wrapper
      metadata={(page.metadata ?? {}) as DocsMetadata}
      sourceCode={page.sourceCode}
      toc={page.toc}
    >
      <MDXContent params={{ mdxPath }} />
    </Wrapper>
  );
}
