// --------------------Преобразовать число в строку 1123 = '1000 + 100 + 20 + 3' (6 kyu)-------------------- //

const expandedForm = (num) => {
  return num
    .toString()
    .split('')
    .reverse()
    .map((number, index) => number * (Math.pow(10, index)))
    .sort((a, b) => a < b ? 1 : -1)
    .filter(number => number > 0)
    .join(' + ')
}

console.log(expandedForm(70304)) // '7000 + 300 + 4'
console.log(expandedForm(5)) // '5'
console.log(expandedForm(341242343)) // 300000000 + 40000000 + 1000000 + 200000 + 40000 + 2000 + 300 + 40 + 3
