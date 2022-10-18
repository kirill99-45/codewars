// --------------------Сумма нечетных чисел в строке треугольника (7 kyu)-------------------- //

// P.S. решение не отпимальное с точки зрения математики, т.к. можно было найти решение через возведение в куб

const rowSumOddNumbers = (n) => {
 const cash = {}
 let currentRow = 1
 let number = 0

 while (currentRow !== n + 1) {
   if (number % 2 !== 0) {
     if (!cash[currentRow]) {
       cash[currentRow] = [number]
     } else if (cash[currentRow].length < currentRow) {
       cash[currentRow].push(number)
     } else if (cash[currentRow].length === currentRow) {
       cash[currentRow + 1] = [number]
       currentRow += 1
     }
   } number += 1
 }
 return cash[currentRow - 1].reduce((a, b) => a + b)
}

console.log(rowSumOddNumbers(5)) // 125
console.log(rowSumOddNumbers(10)) // 1000
console.log(rowSumOddNumbers(8)) // 512
