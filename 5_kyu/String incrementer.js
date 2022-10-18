// --------------------Увеличить строку на 1 (5 kyu)-------------------- //

const incrementString = (string) => {
  const cash = {
    numbers : [],
  }


  string.split('').reverse().forEach(letter => {
    if (!isNaN(+letter) && !cash.string) { // Разбиваем строку на 2 части, первые цифры и все остальное
      cash.numbers.push(letter)
    } else if (!cash.string) { // создаем хранилище, в котором храним строки
      cash.string = [letter]
    } else {
      cash.string.push(letter)
    }
  })

  // Переменная для того, чтобы в дальнейшем сравнить часть с нулями и часть, которую увеличили на 1
  const numbersMaxLength = cash.numbers.length

  cash.numbers = cash.numbers.reverse().map(number => { // Разбиваем массив чисел на 2 части, первые нули и все остальное
    if (number == 0 && !cash.withoutZeros) {
      return number
    } else {
      if (!cash.withoutZeros) {
        cash.withoutZeros = [number]
      } else {
        cash.withoutZeros.push(number)
      }
    }
  }).join('') // Join нужен для того, чтобы избавить от undefined в массиве cash.numbers

  if (cash.withoutZeros) { // Проверяем произоша ли разбивка cash.numbers, если да, то
    const secondPart = +(cash.withoutZeros.join('')) + 1 // берем части, которая идет после нулей и увеличиваем на 1


    // Создаем переменную, в которую кладем первую и вторую часть, получившиеся из cash.numbers
    const number = secondPart.toString().length + cash.numbers.length === numbersMaxLength ? // Идет проверка на то, совпадают ли длины частей
    // нужно для того, чтобы при увеличении разряда удалялся последний нуль из первой части
      [cash.numbers, secondPart].join('') : [cash.numbers.split('').filter((_, index) => index !== cash.numbers.length - 1), secondPart].join('')

    return [cash.string?.reverse().join(''), number].join('')

  } else if (cash.numbers.length > 0) {

    return [cash.string.reverse().join(''), cash.numbers.split('').map((number, index) => {
      return index === cash.numbers.length - 1 ? +number + 1 : number
    }).join('')].join('')
  }
  return `${string}1` // В случае, если пришла строка без чисел
}

console.log(incrementString('1')) // 2
console.log(incrementString('foo')) // foo1
console.log(incrementString('foo88bar00999')) // foo88bar01000
console.log(incrementString('foo0001')) // foo002
