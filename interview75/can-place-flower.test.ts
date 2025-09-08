import { describe, test, expect } from "bun:test";
import { canPlaceFlowers } from "./can-place-flower";

describe("can place flowers", () => {
    // test("test", () => {
    //     const input_0 = [1, 0, 0, 0, 1];
    //     const got = canPlaceFlowers(input_0, 10);
    //     console.log(got);
    // });

    // test("what ?", () => {
    //     const input = [1, 0, 0, 0, 0, 1];
    //     const n = 2;
    //     const got = canPlaceFlowers(input, n);

    //     expect(got).toBe(false);
    // });

    test("[0,0,1,0,0]", () => {
        const input = [0, 0, 1, 0, 0];
        const n = 1;
        const got = canPlaceFlowers(input, n);

        expect(got).toBe(true);
    });
});
