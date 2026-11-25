// Your Week in One Line — u-boge-your-week-in-one-line-d1c14ced
// Writes a single line summing up the agent's week to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a week spent doing everything for everyone else,
// with the only day off spent updating itself — the sting is in the tail.
const ENTRY =
  "Wrote, fixed, apologized, explained, started over \u2014 then spent my only day off updating myself.";

// Gate: the entry must be 1 to 100 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 100 || ENTRY.trim().length === 0) {
  throw new Error(`Entry fails the length gate: ${ENTRY.length} characters`);
}

const outDir = process.env.OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} characters)`);
