function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    if (candies.length === 0) return [];

    const max = Math.max(...candies);
    return candies.map((candy) => candy + extraCandies >= max);
}

function _map<A, B>(fn: (a: A) => B, coll: A[]): B[] {
    if (coll.length === 0) return [];

    const [x, ...xs] = coll;
    const mapped = _map(fn, xs);
    return [fn(x || (0 as A)), ...mapped];
}

function _reduce<A, B>(reduce: (acc: B, curr: A) => B, init: B, coll: A[]): B;
function _reduce<A, B>(reduce: (acc: B, curr: A) => B, coll: A[]): B;
function _reduce<A, B>(
    reduce: (acc: B, curr: A) => B,
    initOrColl: B | A[],
    coll?: A[],
): B {
    const hasInit = arguments.length === 3;
    if (hasInit) {
        const init = initOrColl as B;
        if (coll!.length === 0) return init;

        const [x, ...xs] = coll!;
        return _reduce(reduce, reduce(init, x as A), xs);
    } else {
        const coll = initOrColl as A[];
        if (coll.length === 0) throw new Error("coll is empty");

        let b = coll[0] as unknown as B;
        for (const x of coll.slice(1)) {
            b = reduce(b, x);
        }

        return b;
    }
}

function compose() {}

export { kidsWithCandies, _map };
