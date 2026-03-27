import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const sourceFile = resolve(rootDir, "src/index.css");
const outputDir = resolve(rootDir, "dist");
const outputFile = resolve(outputDir, "index.css");

await mkdir(outputDir, { recursive: true });
await copyFile(sourceFile, outputFile);
