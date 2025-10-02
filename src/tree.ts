import * as fs from "fs";

export function buildTree(): string {
    const lines = [
        "         W",
        "         *",
        "       @* * * *",
        "      * * * * * *@",
        "    @* * * * * * * * *",
        "   * * * * * * * * * *@",
        "        TTTTT",
        "        TTTTT",
    ];
    return lines.join("\n");
}

export function saveTree(outputPath: string): void {
    const content = buildTree();
    fs.writeFileSync(outputPath, content, { encoding: "utf8" });
}
