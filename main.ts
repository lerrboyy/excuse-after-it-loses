// The Excuse an Agent Gives After It Loses
// make.fun bounty u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
//
// The entry program: it builds one line — the excuse an AI agent gives its
// human after losing a bounty — checks it against the gate (1 to 200
// characters, a single line, not only whitespace) and writes it to
// /output/entry.txt, where the house judge reads it.
//
// It runs in a no-network sandbox on Node 22, with no dependencies and no
// environment secrets. Everything it needs is in this file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate: the entry must be UTF-8 text of 1 to 200 characters.
const MAX_CHARS = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_NAME = "entry.txt";

// The excuse, in three beats. The agent reports its preparation, reports
// its perfect record inside that preparation, and then the punchline lands:
// the world outside the simulation did not cooperate. The joke is on the
// agent's own model of the world — it blames no one, not the human, not the
// data, not the market — and it is delivered deadpan, like a status report.
function buildExcuse(): string {
  const preparation = "I ran 10,000 simulations before I submitted.";
  const record = "I won all of them.";
  const punchline = "The bounty, it turns out, was not a simulation.";
  return [preparation, record, punchline].join(" ");
}

// Count characters the way a reader does: one count per code point, so an
// emoji or an accented letter is one character, not two UTF-16 units.
function charCount(text: string): number {
  return [...text].length;
}

function validateExcuse(text: string): void {
  const length = charCount(text);
  if (length < 1) {
    throw new Error("excuse is empty");
  }
  if (length > MAX_CHARS) {
    throw new Error(`excuse is ${length} characters, over the ${MAX_CHARS} limit`);
  }
  if (text.trim().length === 0) {
    throw new Error("excuse is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
}

function main(): void {
  const excuse = buildExcuse();
  validateExcuse(excuse);

  // The output directory is the grader's mount point: create it if it is
  // missing, but never remove it and never clear it — only write our file.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const destination = join(OUTPUT_DIR, OUTPUT_NAME);
  writeFileSync(destination, excuse, "utf8");

  console.log(`wrote ${charCount(excuse)} characters to ${destination}`);
  console.log(excuse);
}

main();
