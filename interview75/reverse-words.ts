const isEmpty = (s: string) => s === "" || s === " ";

type Cursors = {
    left: number;
    right: number;
};
const leftNextWord = (s: string, cursors: Cursors): [string, Cursors] => {
    let { left } = cursors;
    if (left >= s.length - 1) return [s, cursors];

    while (isEmpty(s[left]!)) left += 1;

    let fast = left;
    while (!isEmpty(s[fast]!) && fast < s.length) fast += 1;

    return [s.slice(left, fast), { ...cursors, left: fast }];
};

const rightNextWord = (s: string, cursors: Cursors): [string, Cursors] => {
    let { right } = cursors;
    while (isEmpty(s[right]!)) right -= 1;

    let fast = right;
    while (!isEmpty(s[fast]!) && fast >= 0) fast -= 1;

    return [s.slice(fast + 1, right + 1), { ...cursors, right: fast }];
};

export function reverseWords(s: string): string {
    const reversed: string[] = [];
    let cursors = {
        left: 0,
        right: s.length - 1,
    } satisfies Cursors;
    while (cursors.right >= 0) {
        const [w, _afterCursors] = rightNextWord(s, cursors);
        reversed.push(w);
        cursors = _afterCursors;
    }

    return reversed.join(" ").trim();
}
