// --------------------Нужно проверить можно ли получить вводимое число из двух последовательно идущих чисел фибонначи-------------------- //

const productFib = (prod) => {
    const res = {
        index : 2,
        isEqual : false,
    }

    const arr = [0, 1]

    while (!res.isEqual) {
        let first = res.index - 1
        let second = res.index - 2
        arr[res.index] = arr[first] + arr[second]
        if (arr[first] * arr[second] === prod) {
            res.isEqual = true
            return [arr[second], arr[first], res.isEqual]
        } else if (arr[second] * arr[first] > prod) {
            return [arr[second], arr[first], res.isEqual]
        } else {
            res.index++
        }
    }
    return arr
}

console.log(productFib(4895)) // [55, 89, true])
console.log(productFib(5895)) // [89, 144, false])
console.log(productFib(74049690)) // [6765, 10946, true])
console.log(productFib(84049690)) // [10946, 17711, false])
console.log(productFib(193864606)) // [10946, 17711, true])
console.log(productFib(447577)) // [610, 987, false])
console.log(productFib(602070)) // [610, 987, true])
