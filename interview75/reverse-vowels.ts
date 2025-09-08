const vowels = new Map<string, number>();
vowels.set("a", 0);
vowels.set("e", 0);
vowels.set("i", 0);
vowels.set("o", 0);
vowels.set("u", 0);

export function reverseVowels(s: string): string {
    const str = [...s];
    let l = 0;
    let h = str.length - 1;
    while (l < h) {
        if (!vowels.has(str[l]!.toLowerCase())) {
            l += 1;
            continue;
        }

        // decrement h(height) until find another vowel
        while (!vowels.has(str[h]!.toLowerCase()) && h >= l) h -= 1;

        const temp = str[l]!;
        str[l] = str[h]!;
        str[h] = temp;

        h -= 1;
        l += 1;
    }

    return str.join("");
}
