import { saveTree } from "./tree";

const args = process.argv.slice(2);
if (args.length < 2) {
    console.error("Usage: npx ts-node src/cli.ts <levels> <output_path>");
    process.exit(1);
}

const levels = parseInt(args[0], 10);
const out = args[1];

saveTree(levels, out);
console.log(`Saved tree with ${levels} level(s) to ${out}`);
