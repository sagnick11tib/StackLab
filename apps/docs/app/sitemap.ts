import { readdir, stat } from "node:fs/promises";
import path from "node:path";

import type { MetadataRoute } from "next";

import { docsSite } from "@/lib/site";

const contentDir = path.join(process.cwd(), "content");

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(entryPath)));
      continue;
    }

    if (entry.name.endsWith(".mdx")) {
      files.push(entryPath);
    }
  }

  return files.sort();
}

function toRoute(filePath: string) {
  const relativePath = path.relative(contentDir, filePath).replace(/\\/g, "/");

  if (relativePath.startsWith("hidden/")) {
    return null;
  }

  if (relativePath === "index.mdx") {
    return "/";
  }

  return `/${relativePath.replace(/\.mdx$/u, "")}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mdxFiles = await walk(contentDir);
  const entries = await Promise.all(
    mdxFiles.map(async (filePath) => {
      const route = toRoute(filePath);

      if (!route) {
        return null;
      }

      const fileStat = await stat(filePath);

      return {
        url: new URL(route, docsSite.docsUrl).toString(),
        lastModified: fileStat.mtime,
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : 0.7,
      } satisfies MetadataRoute.Sitemap[number];
    }),
  );

  return entries.filter((entry) => entry !== null);
}
