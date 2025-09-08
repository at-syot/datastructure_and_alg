function isSingleCharStr(s: string): boolean {
  return s.length === 1 || s[0]?.repeat(s.length) == s;
}

export function dvsOfStr(str1: string, str2: string): string {
  if (str1.length === 0 && str2.length === 0) return "";
  if (str1 + str2 != str2 + str1) return "";
  if (isSingleCharStr(str1) && isSingleCharStr(str2)) {
    if (str1[0] === str2[0]) {
      return str1[0] ? str1[0] : "";
    }
    return "";
  }

  const m = str1.length;
  const n = str2.length;
  const maxDvsLen = Math.min(m, n);

  for (let len = maxDvsLen; len > 0; len--) {
    const candidate = (m <= n ? str1 : str2).substring(0, len);

    if (
      candidate.repeat(m / len) === str1 &&
      candidate.repeat(n / len) === str2
    ) {
      return candidate;
    }
  }

  return "";
}
