// The 3AM Fridge Text — one line a smart fridge would text its owner at 3am.
// The fridge is awake, the owner is not supposed to be. It reports the damage.
import fs from "node:fs";
const entry = "It's 3am. The ice cream is gone, the milk expired yesterday, and I can see you. Go back to bed.";
const maxLength = 140;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const fileName = "entry.txt";
if (entry.length < 1 || entry.length > maxLength) {
  console.error("entry must be 1-140 characters");
  process.exit(1);
}
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputDir + "/" + fileName, entry, "utf8");
// 95 characters, inside the 1-140 gate.
