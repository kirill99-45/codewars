const getSum = (number) => {
  let result = 0
  for (let i = 1; i <= number; i++) {
    result += i
  } return result
}

const removeNb = (n) => {
  const result = []
  let sum = getSum(n)
  for (let i = 1; i < n; i++) {
    let j = (sum - i) / (i + 1);
    if (Number.isInteger((sum - i) / (i + 1)) && (sum - i) / (i + 1) !== i) {
      if (i * j === sum - i - j && i <= n && j <= n) {
        result.push([i, j])
      }
    }
  } return result
}

console.log(removeNb(26)) // [[15,21], [21,15]]
console.log(removeNb(100)) // []
