import { describe, expect, test } from "bun:test";
import { reverseVowels } from "./reverse-vowels";

describe("reverse vowels", () => {
    test("should reverse correct for - IceCreAm", () => {
        const got = reverseVowels("IceCreAm");
        expect(got).toBe("AceCreIm");
    });

    test("should reverse correct for - leetcode", () => {
        const got = reverseVowels("leetcode");
        expect(got).toBe("leotcede");
    });
});
