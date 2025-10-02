import { test, expect } from "@playwright/test";
import * as fs from "fs";
import { saveTree } from "../src/tree";

test("generates tree file and contains basic parts", async () => {
    const path = "out_test.txt";
    // Генерируем
    saveTree(3, path);

    // Файл должен существовать
    expect(fs.existsSync(path)).toBeTruthy();

    // Читаем содержимое и делаем простые проверки
    const txt = fs.readFileSync(path, "utf8");
    expect(txt).toContain("W");        // верхушка
    expect(txt).toContain("TTTTT");    // ствол
    expect(txt.split("\n").length).toBeGreaterThan(3);

    // Убираем артефакт после теста
    fs.unlinkSync(path);
});
