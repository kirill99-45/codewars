// --------------------Количество повторяющихся элементов (6 kyu)-------------------- //

const duplicateCount = (text) => {
  const newArr = text.toLowerCase().split('');
  const checkNumber = {}
  const result = []
  for (let i = 0; i < newArr.length; i++) {
    if (!checkNumber[newArr[i]]) {
      checkNumber[newArr[i]] = 1;
    } else {
      if (!result.includes(newArr[i])) {
        result.push(newArr[i])
      }
    }
  } return result.length;
}

console.log(duplicateCount('abcde')) // 0
console.log(duplicateCount('aabbcde')) // 2
console.log(duplicateCount('aabBcde')) // 2
console.log(duplicateCount('Indivisibilities')) // 2
