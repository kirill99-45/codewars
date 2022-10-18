// //------------------------------- Шифр Цезаря (5 kyu) -------------------------------//

const alpBig = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']  // Хэш-таблица для больших букв
const alpSmall = alpBig.join('').toLowerCase().split(''); // Хэш-таблица для маленьких букв

const rot13 = (str) => {
  const result = [] // Массив, в который складываем значения
  str.split('').forEach(item => {
    if (item.charCodeAt() <= 90 && item.charCodeAt() >= 65) { // Проверка на то, является ли буква большой
      if(item.charCodeAt() + 12 >= 90) { // Проверка на то, остается ли буква большой, при смещении
        index = item.charCodeAt() + 12 - 90;
        result.push(alpBig[index])
      } else {
        index = item.charCodeAt() + 13 - 65;
        result.push(alpBig[index])
      }
    } else if (item.charCodeAt() <= 122 && item.charCodeAt() >= 97) {
      if(item.charCodeAt() + 12 >= 122) {
        index = item.charCodeAt() + 12 - 122;
        result.push(alpSmall[index])
      } else {
        index = item.charCodeAt() + 13 - 97;
        result.push(alpSmall[index])
      }
    } else {
      result.push(item)
    }
  })
  return result.join('')
}

console.log(rot13('test')) // grfg
console.log(rot13("Test")) // Grfg
