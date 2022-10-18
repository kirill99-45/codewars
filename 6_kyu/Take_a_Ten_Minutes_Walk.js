// --------------------Нужно определить вернется ли герой в стартовую точку через 10 ходов (6 kyu)-------------------- //

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

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true
console.log(isValidWalk(['n','s','n','s','n','s','n','s'])) // false
