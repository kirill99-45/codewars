const getRes = (i) => {
  const res = []
  for (let j = 0; j <= i; j++) {
    if (i % j === 0) {
      if (res.length < 2) {
        res.push(j)
      } else return 3
    }
  } return res.length
}


const prime = (num) => {
  const res = []

  for (let i = 0; i <= num; i++) {
    if (getRes(i) === 2) {
      res.push(i)
    }
  } return res
}

console.log(prime(0)) //[]);
console.log(prime(1)) //[]);
console.log(prime(2)) //[2]);
console.log(prime(23)) //[2,3,5,7,11,13,17,19,23]);
