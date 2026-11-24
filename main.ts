// Funniest toaster error message entry for make.fun
// "The Funniest Toaster Error Message".
// Writes exactly one line (<=120 chars) to /output/entry.txt: the error
// message a kitchen toaster shows its owner when something goes wrong.
// The joke: a deadpan appliance voice, no toaster pun anywhere — the
// surprise is the toaster quietly befriending the bagel its owner forgot
// inside it since Tuesday. Short, one voice, lands on a single read.
// Fully offline and deterministic: no network, no clock, no randomness,
// no environment reads. The line is a fixed string literal below.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your bagel has been in here since Tuesday. I have named it. We are close now.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-120 characters,
// a single line, not only whitespace. Refuse to write anything else.
if (
  LINE.length < 1 ||
  LINE.length > 120 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("toaster line fails the 1-120 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
