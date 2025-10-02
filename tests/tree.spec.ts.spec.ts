import { test, expect } from "@playwright/test";
import * as fs from "fs";
import { saveTree, buildTree } from "../src/tree";

test("tree has correct shape", async () => {
    const path = "out_test.txt";
    saveTree(path);

    const txt = fs.readFileSync(path, "utf8");
    const expected = buildTree();

    // Полное совпадение
    expect(txt).toBe(expected);

    fs.unlinkSync(path);
});
