// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:
// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let placed = n;
    for (let i = 0; i < flowerbed.length; i++) {
        const spot = flowerbed[i];
        const prevEmpty = i - 1 < 0 ? true : flowerbed[i - 1] == 0;
        const nextEmpty =
            i + 1 === flowerbed.length ? true : flowerbed[i + 1] == 0;

        if (spot === 1) continue;
        if (prevEmpty && nextEmpty) {
            flowerbed[i] = 1;
            placed -= 1;
            if (placed === 0) break;
        }
    }

    return placed <= 0;
}
