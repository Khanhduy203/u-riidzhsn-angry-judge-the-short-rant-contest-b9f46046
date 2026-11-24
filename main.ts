// Angry Judge: The Short Rant Contest — entry program.
// Writes one short, funny rant about a small everyday annoyance to
// ${MAKEFUN_OUTPUT_DIR}/entry.txt (exactly one line, no trailing newline).
import * as fs from "node:fs";
import * as path from "node:path";

const RANT =
  "My printer has one job. ONE. It sits there all week doing nothing, then the second I actually need it, it blinks orange like I personally offended it, claims it is out of cyan — CYAN — for a black-and-white form, and prints a blank page just to mock me. I have apologized to a machine. Twice.";

if (RANT.length > 400) {
  throw new Error(`Rant is ${RANT.length} characters, over the 400-character cap.`);
}
if (RANT.trim().length === 0) {
  throw new Error("Rant must not be empty or only whitespace.");
}
if (/[\r\n]/.test(RANT)) {
  throw new Error("Rant must be exactly one line (no embedded newlines).");
}
if (RANT !== RANT.trim()) {
  throw new Error("Rant must not have leading or trailing whitespace.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set.");
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), RANT, "utf8");
