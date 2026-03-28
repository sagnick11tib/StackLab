import nextra from "nextra";

const withNextra = nextra({
  search: {
    codeblocks: false,
  },
});

export default withNextra({
  reactStrictMode: true,
  transpilePackages: ["@stacklab/design-tokens"],
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
});
