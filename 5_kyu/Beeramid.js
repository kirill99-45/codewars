// ------------------------------Пивная пирамида (5 kyu)------------------------------ //

  /* Суть в том, что в функцию приходят 2 аргумента - 1) Сумма денег, 2) Цена за банку пива.
              Нужно найти количество полноценных уровней пирамиды */

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

console.log(beeramid(1500, 2)) // 12
console.log(beeramid(5000, 3)) // 16
console.log(beeramid(454, 5)) // 5
console.log(beeramid(455, 5)) // 6
