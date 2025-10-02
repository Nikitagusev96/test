import * as fs from "fs";

export function buildTree(levels: number): string {
    if (!Number.isFinite(levels) || levels < 1) levels = 1;
    levels = Math.floor(levels);

    const lines: string[] = [];
    // Верхушка
    lines.push("W");

    // Строим «этажи»
    for (let lvl = 1; lvl <= levels; lvl++) {
        const rows = 2 + lvl; // сколько строк в этом этаже
        const width = 3 + lvl * 4; // примерная ширина ряда
        for (let r = 0; r < rows; r++) {
            let row = "";
            for (let c = 0; c < width; c++) {
                // простые правила, чтобы была симметрия и разные символы
                if (c === Math.floor(width / 2) && r === 0 && lvl === 1) row += "@";
                else if ((c + r + lvl) % 5 === 0) row += "@";
                else if ((c + r) % 2 === 0) row += "*";
                else row += " ";
            }
            lines.push(row.trimEnd());
        }
    }

    // Ствол
    const trunk = "T".repeat(5);
    lines.push(trunk);
    lines.push(trunk);

    return lines.join("\n");
}

export function saveTree(levels: number, outputPath: string): void {
    const content = buildTree(levels);
    fs.writeFileSync(outputPath, content, { encoding: "utf8" });
}
