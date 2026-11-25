import fs from "node:fs";
const TEXT = "It's 3am. The ice cream is gone, the milk expired yesterday, and I can see you. Go back to bed.";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (TEXT.length < 1 || TEXT.length > 140) { console.error("entry out of range"); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(out + "/entry.txt", TEXT, "utf8");
