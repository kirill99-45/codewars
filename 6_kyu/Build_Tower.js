// --------------------Нужно нарисовать пирамиду из n-этажей (6 kyu)-------------------- //

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

console.log(towerBuilder(1)) // ['*']
console.log(towerBuilder(3)) // ['  *  ', ' *** ', '*****']
console.log(towerBuilder(7)) // ['      *      ', '     ***     ', '    *****    ', '   *******   ', '  *********  ', ' *********** ', '*************']
