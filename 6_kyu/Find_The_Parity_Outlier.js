// --------------------Вернуть из массива четных\нечетных числе единственное отличающиеся-------------------- //

const findOutlier = arr => {
    const container = {
        odd : [],
        even : [],
    }
    arr.forEach((item, index) => {
        if (item % 2 === 0) {
            container.even.push(item)
        } else {
            container.odd.push(item)
        }
    })
    return container.even.length === 1 ? container.even[0] : container.odd[0]
}

console.log(findOutlier([0, 1, 2])) // 1
console.log(findOutlier([1, 2, 3])) // 2
console.log(findOutlier([2,6,8,10,3])) // 3
console.log(findOutlier([0,0,3,0,0])) // 3
console.log(findOutlier([1,1,0,1,1])) // 0
