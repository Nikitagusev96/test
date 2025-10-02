import { saveTree } from "./tree";

const args = process.argv.slice(2);
if (args.length < 1) {
    console.error("Usage: npx ts-node src/cli.ts <output_path>");
    process.exit(1);
}

const out = args[0];
saveTree(out);
console.log(`Saved tree to ${out}`);
