// // ----------------------Преобразование строки в числов (4 kyu)---------------------- //

const numbers = // Создаем хэш-таблицу со всеми числами
{
  zero : 0, one : 1, two : 2, three : 3, four : 4, five : 5, six : 6, seven : 7, eight : 8, nine : 9, ten : 10,
  eleven : 11, twelve : 12, thirteen : 13, fourteen : 14, fifteen : 15, sixteen : 16, seventeen : 17, eighteen : 18, nineteen : 19,
  twenty : 20, thirty : 30, forty :40 , fifty : 50, sixty : 60, seventy : 70, eighty : 80, ninety : 90,
}

const multiplier = // Создаем хэш-таблицу с множителями
{
  hundred : 100, thousand : 1000, million : 1000000
}

const parseInt = (string) => {
  let result = 0;
  let mult = 1;
  if (string.split(' ').length !== 2) { // Проверяем длинну массива в связи с тем, что если наш массив из двух элементов ['one', 'million'],
                                      //то функция вернет первое значение, не дойдя до множителя
    string.split(' ').reverse().forEach(item => {
      if (multiplier[item]) { // Работа с множителями
        if (multiplier[item] === 100) {
          mult *= multiplier[item] // Если множитель равен 100, то домножаем его на 100
        } else {
          mult = multiplier[item]
        }
      }
      else { // Работа с числами
        let arr = item.split('-') // Разбиваем по возможному символу
        if (arr.length === 2) { // Если символ присутствовал, то к результату добавляем сумму первого и второго элемента массова, умноженную на множитель
          result += ((numbers[arr[0]]) + (numbers[arr[1]])) * mult
        } else {
          if (numbers[arr[0]]) {
            result += numbers[arr[0]] * mult
          }
        }
      }
    })
  }
  else { // Случай, когда приходят 2 элемента
    let arr = string.split(' ')
    for (let i = 0; i < arr.length; i++) {
      let newArr = arr[i].split('-')
      if (newArr.length === 2) {
        result += numbers[newArr[0]] + numbers[newArr[1]]
      } else {
        if (numbers[newArr]) {
          result += numbers[newArr]
        } else {
          mult = multiplier[newArr]
        }
      }
    } result *= mult
  } return result
}

// console.log(parseInt('thirty-five thousand')) //1;
// console.log(parseInt('twenty'))//20;
// console.log(parseInt('two hundred forty-six'))// 246;
// console.log(parseInt('seven hundred eighty-three thousand nine hundred and nineteen')); //783919
// console.log(parseInt('one million')) //1000000
// console.log(parseInt('thirty-five thousand')); //35000

// //------------------------------- Шифр Цезаря (5 kyu) -------------------------------//
//
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

// console.log(rot13('test')) // grfg
// console.log(rot13("Test")) // Grfg

// // ------------------------------Пивная пирамида (5 kyu)------------------------------ //
//   /* Суть в том, что в функцию приходят 2 аргумента - 1) Сумма денег, 2) Цена за банку пива.
//               Нужно найти количество полноценных уровней пирамиды */
//
const beeramid = (bonus, price) => {
  if (bonus === 0 || bonus < price) {
    return 0;
  } else {
    let currentLevel = 1;
    let countBeers = bonus / price;
    while (countBeers > 0) {
      countBeers -= currentLevel ** 2;
      let nextLevel = (currentLevel + 1) ** 2;
      if (countBeers >= nextLevel) {
        currentLevel++
      } else break;
    }
    return currentLevel
  }
}
//
// console.log(beeramid(1500, 2)) // 12
// console.log(beeramid(5000, 3)) // 16
// console.log(beeramid(454, 5)) // 5
// console.log(beeramid(455, 5)) // 6

// // --------------------Количество повторяющихся элементов (6 kyu)-------------------- //

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

// console.log(duplicateCount('abcde')) // 0
// console.log(duplicateCount('aabbcde')) // 2
// console.log(duplicateCount('aabBcde')) // 2
// console.log(duplicateCount('Indivisibilities')) // 2

// // --------------------Сумма нечетных чисел в строке треугольника (7 kyu)-------------------- //

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

// console.log(rowSumOddNumbers(5)) // 125
// console.log(rowSumOddNumbers(10)) // 1000
// console.log(rowSumOddNumbers(8)) // 512

// // --------------------Нужно нарисовать пирамиду из n-этажей (6 kyu)-------------------- //

const towerBuilder = (nFloors) => {
  let currentFloor = nFloors;
  let countOfBorder = 0;
  const build = [];

  while (currentFloor > 0) {
    let countOfStars = currentFloor * 2 - 1
    let floor = []
    let borders = []

    for (let j = 0; j < countOfBorder / 2; j++) {
      borders.push(' ')
    }

    for (let i = 0; i < countOfStars; i++) {
      floor.push('*')
    }
    floor = [...borders, ...floor, ...borders]

    build.push(floor.join(''))
    currentFloor -= 1
    countOfBorder = countOfBorder > 0 ? countOfBorder + 2 : 2
  }
  return build.reverse()
}

// console.log(towerBuilder(1)) // ['*']
// console.log(towerBuilder(3)) // ['  *  ', ' *** ', '*****']
// console.log(towerBuilder(7)) // ['      *      ', '     ***     ', '    *****    ', '   *******   ', '  *********  ', ' *********** ', '*************']

// // --------------------Нужно определить вернется ли герой в стартовую точку через 10 ходов (6 kyu)-------------------- //

const isValidWalk = (walk) => {
  if (walk.length === 10) {
    const way = {
      vertical : 0,
      horizontal : 0,
    }

    walk.forEach(direction => {
      if (direction === 's') {
        way.vertical += 1
      } else if (direction === 'n') {
        way.vertical -= 1
      } else if (direction === 'w') {
      way.horizontal += 1
      } else if (direction === 'e') {
      way.horizontal -= 1
    }})
    return way.vertical === 0 && way.horizontal === 0 ? true : false
  } return false
}

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true
// console.log(isValidWalk(['n','s','n','s','n','s','n','s'])) // false

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

// console.log(expandedForm(70304)) // '7000 + 300 + 4'
// console.log(expandedForm(5)) // '5'
// console.log(expandedForm(341242343)) // 300000000 + 40000000 + 1000000 + 200000 + 40000 + 2000 + 300 + 40 + 3
