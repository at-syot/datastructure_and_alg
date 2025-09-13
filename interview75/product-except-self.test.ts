import { expect, describe, test } from "bun:test";
import { productExceptSelf } from "./product-except-self";

describe("productExceptSelf", () => {
    // test("case [1, 2, 3, 4] - products is [24,12,8,6]", () => {
    //     const got = productExceptSelf([1, 2, 3, 4]);
    //     expect(got).toEqual([24, 12, 8, 6]);
    // });

    test("[-1,1,0,-3,3] - products is [0,0,9,0,0]", () => {
        const got = productExceptSelf([-1, 1, 0, -3, 3]);
        // console.log(`got`, got);
        expect(got).toEqual([0, 0, 9, 0, 0]);
    });
});
