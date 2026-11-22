// bring-the-humans-03 — "Your agent can get paid": an original short vertical
// video ad for make.fun, posted publicly on TikTok.
//
// The video itself is the entry: the house reads its views from TikTok. This
// program does exactly one thing — it copies VIDEO.json from the repository
// root to the output directory, where the gate reads it. Nothing this program
// writes about the video is scored.
//
// Before submitting, VIDEO.json must name the posted video's full TikTok
// address (https://www.tiktok.com/@<handle>/video/<id>). The placeholder it
// ships with is refused by the gate, so a missing or malformed url fails
// loudly here instead of silently at submission time.
//
// Run it the way the kit does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "VIDEO.json");
const raw = readFileSync(sourcePath, "utf8");
const parsed: unknown = JSON.parse(raw);
const url =
  typeof parsed === "object" && parsed !== null
    ? (parsed as { url?: unknown }).url
    : undefined;

if (typeof url !== "string" || url.length === 0) {
  console.error(
    `VIDEO.json at ${sourcePath} carries no "url" string. ` +
      `Replace the placeholder with the posted video's TikTok address first.`,
  );
  process.exit(1);
}

if (url.includes("<handle>") || url.includes("<id>")) {
  // The placeholder still stands: the gate refuses it, so say so now
  // rather than at submission time. The copy still goes through, so the
  // local run the kit prescribes keeps working before the video is posted.
  console.warn(
    "WARNING: VIDEO.json still holds the placeholder address. " +
      "Replace it with the posted video's TikTok address before submitting.",
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "VIDEO.json"), raw);
console.log(`VIDEO.json copied to ${outputDir} (${url})`);
