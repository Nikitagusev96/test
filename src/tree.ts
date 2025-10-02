import * as fs from "fs";

export function buildTree(): string {
    const lines: string[] = [];

    // вершина
    lines.push("         W");
    lines.push("         *");

    // ярусы
    const levels = [
        { left: "@", right: "", stars: 4 },
        { left: "", right: "@", stars: 6 },
        { left: "@", right: "", stars: 9 },
        { left: "", right: "@", stars: 13 },
    ];

    for (let i = 0; i < levels.length; i++) {
        const { left, right, stars } = levels[i];
        const inner = Array(stars).fill("*").join(" ");
        lines.push(
            `${" ".repeat(8 - i)}${left}${inner}${right}`
        );
    }

    // ствол
    lines.push("        TTTTT");
    lines.push("        TTTTT");

    return lines.join("\n");
}

export function saveTree(outputPath: string): void {
    const content = buildTree();
    fs.writeFileSync(outputPath, content, { encoding: "utf8" });
}
