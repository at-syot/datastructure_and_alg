import { expect, test, describe } from "bun:test";
import { kidsWithCandies, _map } from "./kids-with-candies";

const users = [
  { id: 0, name: "n1" },
  { id: 1, name: "n2" },
  { id: 2, name: "n3" },
  { id: 3, name: "n4" },
];
const mapped = _map((a) => a.name, users);

// describe("kidsWithCandies", () => {
//   test("typical case", () => {
//     expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
//       true,
//       true,
//       true,
//       false,
//       true,
//     ]);
//   });

//   test("all kids can have the most", () => {
//     expect(kidsWithCandies([1, 1, 1], 5)).toEqual([true, true, true]);
//   });

//   test("none can have the most", () => {
//     expect(kidsWithCandies([5, 6, 7], 0)).toEqual([false, false, true]);
//   });

//   test("single kid", () => {
//     expect(kidsWithCandies([10], 100)).toEqual([true]);
//   });

//   test("empty array", () => {
//     expect(kidsWithCandies([], 5)).toEqual([]);
//   });

//   test("large numbers", () => {
//     expect(kidsWithCandies([1000000, 999999, 999998], 1)).toEqual([
//       true,
//       true,
//       false,
//     ]);
//   });

//   test("extraCandies is zero", () => {
//     expect(kidsWithCandies([2, 3, 5, 1, 3], 0)).toEqual([
//       false,
//       false,
//       true,
//       false,
//       false,
//     ]);
//   });

//   test("all kids already have the same number", () => {
//     expect(kidsWithCandies([4, 4, 4, 4], 2)).toEqual([true, true, true, true]);
//   });

//   test("extraCandies is negative", () => {
//     expect(kidsWithCandies([5, 6, 7], -1)).toEqual([false, false, false]);
//   });
// });
