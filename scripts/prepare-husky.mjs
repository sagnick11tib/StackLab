import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

if (!existsSync(".git")) {
  console.log(
    "Skipping Husky install because this directory is not a git repository yet.",
  );
  process.exit(0);
}

const result = spawnSync("npx", ["husky"], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
