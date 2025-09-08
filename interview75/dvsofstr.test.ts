import { expect, test, describe } from "bun:test";
import { dvsOfStr } from "./dvsofstr";

// describe("dvsOfStr - Greatest Common Divisor of Strings", () => {
//   describe("Happy Path Cases", () => {
//     test("should return GCD when str1 is multiple of str2", () => {
//       expect(dvsOfStr("ABCABC", "ABC")).toBe("ABC");
//     });
//     test("should return GCD when both strings have common divisor", () => {
//       expect(dvsOfStr("ABABAB", "ABAB")).toBe("AB");
//     });
//     test("should return empty string when no common divisor exists", () => {
//       expect(dvsOfStr("LEET", "CODE")).toBe("");
//     });
//     test("should handle identical strings", () => {
//       expect(dvsOfStr("ABC", "ABC")).toBe("ABC");
//       expect(dvsOfStr("HELLO", "HELLO")).toBe("HELLO");
//     });
//     test("should handle single character repetition", () => {
//       expect(dvsOfStr("AAAA", "AA")).toBe("A");
//       expect(dvsOfStr("BBBBBB", "BBB")).toBe("B");
//     });
//     test("should return correct GCD for different length patterns", () => {
//       expect(dvsOfStr("XYXYXY", "XYXY")).toBe("XY");
//       expect(dvsOfStr("ABCABCABC", "ABCABC")).toBe("ABC");
//     });
//   });
//   describe("Edge Cases", () => {
//     test("should handle empty strings", () => {
//       expect(dvsOfStr("", "")).toBe("");
//       expect(dvsOfStr("ABC", "")).toBe("");
//       expect(dvsOfStr("", "ABC")).toBe("");
//     });
//     test("should handle single character strings", () => {
//       expect(dvsOfStr("A", "A")).toBe("A");
//       expect(dvsOfStr("A", "B")).toBe("");
//       expect(dvsOfStr("X", "X")).toBe("X");
//     });
//     test("should handle one character vs multiple characters", () => {
//       expect(dvsOfStr("A", "AAA")).toBe("A");
//       expect(dvsOfStr("AAA", "A")).toBe("A");
//       expect(dvsOfStr("B", "BBBBBB")).toBe("B");
//     });
//     test("should handle strings where one is substring of another", () => {
//       expect(dvsOfStr("ABCABCABC", "ABC")).toBe("ABC");
//       expect(dvsOfStr("ABC", "ABCABCABC")).toBe("ABC");
//       expect(dvsOfStr("XYXYXYXY", "XY")).toBe("XY");
//     });
//     test("should handle strings with length 1", () => {
//       expect(dvsOfStr("A", "AAAAA")).toBe("A");
//       expect(dvsOfStr("ZZZZZ", "Z")).toBe("Z");
//     });
//   });
//   describe("Complex Pattern Cases", () => {
//     test("should handle longer repeating patterns", () => {
//       expect(dvsOfStr("ABCDEFABCDEF", "ABCDEF")).toBe("ABCDEF");
//       expect(dvsOfStr("XYZXYZXYZ", "XYZXYZ")).toBe("XYZ");
//       expect(dvsOfStr("123412341234", "12341234")).toBe("1234");
//     });
//     test("should find minimal common divisor", () => {
//       expect(dvsOfStr("ABABABAB", "ABABAB")).toBe("AB");
//       expect(dvsOfStr("XYZXYZXYZXYZ", "XYZXYZXYZ")).toBe("XYZ");
//     });
//     test("should handle patterns that don't align", () => {
//       expect(dvsOfStr("ABCABC", "BCABCA")).toBe("");
//       expect(dvsOfStr("XYXYXY", "YXYXYX")).toBe("");
//     });
//   });
//   describe("No Common Divisor Cases", () => {
//     test("should return empty string for completely different strings", () => {
//       expect(dvsOfStr("HELLO", "WORLD")).toBe("");
//       expect(dvsOfStr("ABC", "DEF")).toBe("");
//       expect(dvsOfStr("123", "456")).toBe("");
//     });
//     test("should return empty string for similar but incompatible patterns", () => {
//       expect(dvsOfStr("ABCABC", "ABCABCX")).toBe("");
//       expect(dvsOfStr("XYXY", "XYZXYZ")).toBe("");
//       expect(dvsOfStr("AAAB", "AAAA")).toBe("");
//     });
//     test("should handle strings with different starting characters", () => {
//       expect(dvsOfStr("ABCABC", "BCABCA")).toBe("");
//       expect(dvsOfStr("XYZXYZ", "YZXYZX")).toBe("");
//     });
//   });
//   describe("Special Characters and Unicode", () => {
//     test("should handle special characters", () => {
//       expect(dvsOfStr("!@#!@#", "!@#")).toBe("!@#");
//       expect(dvsOfStr("123123123", "123123")).toBe("123");
//       expect(dvsOfStr("$%^$%^", "$%^$%^")).toBe("$%^");
//     });
//     test("should handle unicode characters", () => {
//       expect(dvsOfStr("🎉🎉", "🎉")).toBe("🎉");
//       expect(dvsOfStr("αβαβ", "αβ")).toBe("αβ");
//       expect(dvsOfStr("😀😀😀", "😀😀")).toBe("😀");
//     });
//     test("should handle mixed character types", () => {
//       expect(dvsOfStr("A1A1A1", "A1A1")).toBe("A1");
//       expect(dvsOfStr("x@x@", "x@")).toBe("x@");
//     });
//   });
//   describe("Algorithm Logic Edge Cases", () => {
//     test("should handle cases where divisor length calculation is tricky", () => {
//       // Test cases where the algorithm needs to iterate through different divisor lengths
//       expect(dvsOfStr("ABCDABCD", "ABCD")).toBe("ABCD");
//       expect(dvsOfStr("ABCABCABC", "ABCABC")).toBe("ABC");
//     });
//     test("should handle cases with prime length strings", () => {
//       expect(dvsOfStr("ABCDE", "ABCDE")).toBe("ABCDE");
//       expect(dvsOfStr("ABCDEFG", "ABCDEFG")).toBe("ABCDEFG");
//     });
//     test("should handle asymmetric cases", () => {
//       expect(dvsOfStr("AB", "ABABAB")).toBe("AB");
//       expect(dvsOfStr("ABABAB", "AB")).toBe("AB");
//       expect(dvsOfStr("XYZ", "XYZXYZXYZ")).toBe("XYZ");
//     });
//   });
//   describe("Boundary Value Testing", () => {
//     test("should handle minimum valid inputs", () => {
//       expect(dvsOfStr("A", "A")).toBe("A");
//       expect(dvsOfStr("A", "B")).toBe("");
//     });
//     test("should handle strings of length 2", () => {
//       expect(dvsOfStr("AB", "AB")).toBe("AB");
//       expect(dvsOfStr("AB", "BA")).toBe("");
//       expect(dvsOfStr("AA", "AA")).toBe("A");
//     });
//     test("should handle strings of length 3", () => {
//       expect(dvsOfStr("ABC", "ABC")).toBe("ABC");
//       expect(dvsOfStr("AAA", "AAA")).toBe("A");
//       expect(dvsOfStr("ABA", "ABA")).toBe("ABA");
//     });
//   });
//   describe("Mathematical Properties", () => {
//     test("should satisfy commutative property: gcd(a,b) = gcd(b,a)", () => {
//       const testCases = [
//         ["ABCABC", "ABC"],
//         ["XYXY", "XY"],
//         ["LEET", "CODE"],
//         ["ABABAB", "ABAB"],
//         ["AAA", "AAAAAA"],
//       ];
//       testCases.forEach(([str1, str2]) => {
//         expect(dvsOfStr(str1, str2)).toBe(dvsOfStr(str2, str1));
//       });
//     });
//     test("should ensure GCD divides both input strings", () => {
//       const testCases = [
//         { str1: "ABCABC", str2: "ABC", expected: "ABC" },
//         { str1: "ABABAB", str2: "ABAB", expected: "AB" },
//         { str1: "XYXYXY", str2: "XY", expected: "XY" },
//       ];
//       testCases.forEach(({ str1, str2, expected }) => {
//         const result = dvsOfStr(str1, str2);
//         expect(result).toBe(expected);
//         if (result !== "") {
//           // Verify that result actually divides both strings
//           expect(str1.length % result.length).toBe(0);
//           expect(str2.length % result.length).toBe(0);
//           const times1 = str1.length / result.length;
//           const times2 = str2.length / result.length;
//           expect(result.repeat(times1)).toBe(str1);
//           expect(result.repeat(times2)).toBe(str2);
//         }
//       });
//     });
//     test("should return empty string when gcd(length1, length2) doesn't divide both strings", () => {
//       expect(dvsOfStr("ABC", "ABCD")).toBe("");
//       expect(dvsOfStr("ABAB", "ABABC")).toBe("");
//     });
//   });
// });
