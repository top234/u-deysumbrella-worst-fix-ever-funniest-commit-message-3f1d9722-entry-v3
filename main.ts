// Everything Is Free Now — worst fix ever, funniest commit message (v3).
// The rounding fix that zeroed every price: one bad patch and the whole
// store is giving everything away for free. Revenue: also rounded to zero.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "fix rounding errors: everything is now free";

const MAX_LENGTH = 100; // gate: entry.txt must be 1-100 characters

if (ENTRY.length < 1 || ENTRY.length > MAX_LENGTH) {
  throw new Error(`entry must be 1-${MAX_LENGTH} characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
