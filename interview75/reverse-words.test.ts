import { describe, test, expect } from "bun:test";
import { reverseWords } from "./reverse-words";

describe("reverse words", () => {
    test("should reverse ok - [the sky is blue]", () => {
        const input = "the sky is blue";
        const expected = "blue is sky the";
        expect(reverseWords(input)).toBe(expected);
    });

    test("should reverse ok - hello world with spaces", () => {
        const input = "  hello world  ";
        const expected = "world hello";
        expect(reverseWords(input)).toBe(expected);
    });

    test("should reverse ok - multiple spaces between words", () => {
        const input = "a good   example";
        const expected = "example good a";
        expect(reverseWords(input)).toBe(expected);
    });
});
