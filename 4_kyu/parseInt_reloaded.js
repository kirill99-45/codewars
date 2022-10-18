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

console.log(parseInt('thirty-five thousand')) //1;
console.log(parseInt('twenty'))//20;
console.log(parseInt('two hundred forty-six'))// 246;
console.log(parseInt('seven hundred eighty-three thousand nine hundred and nineteen')); //783919
console.log(parseInt('one million')) //1000000
console.log(parseInt('thirty-five thousand')); //35000
