export function increasingTriplet(nums: number[]): boolean {
  let f = Infinity
  let s = Infinity
  for (const n of nums) {
    if (n < f) {
      f = n
    } else if (n < s && n > f) {
      s = n
    } else if (n > s) return true
  }
  return false
};
