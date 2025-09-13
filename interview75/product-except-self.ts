// bruteforce o(n^2)
export function productExceptSelf_bf(nums: number[]): number[] {
  let products: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;

      const n = nums[j]!;
      product *= n;
    }

    products.push(product <= 0 ? 0 : product);
  }

  console.log("products are", products);
  return products;
}

// aim to o(n)
// prefix x postfix
export function productExceptSelf(nums: number[]): number[] {
  const products: number[] = [1];
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    console.log(`prefix(${prefix}) * nums[i](${nums[i]})`);
    const computed = prefix * nums[i]!;
    products[i] = computed === -0 ? 0 : computed;
    prefix = nums[i]!;
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const prefix = products[i - 1] ? products[i - 1]! : 1;
    products[i] = prefix * postfix;

    postfix *= nums[i]!;
  }

  return products;
}
