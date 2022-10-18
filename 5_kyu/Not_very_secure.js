// --------------------Валидация строки-------------------- //


const alphanumeric = str => {
    let result = {
        upperCase : false,
        lowerCase : false,
        digit : false,
        letter : false,
        textDecoration : false,
    }
    str.split('').forEach(item => {
        if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
            return result = {
                ...result,
                upperCase : true,
                letter : true,
            }
        } else if (122 >= item.charCodeAt() && item.charCodeAt() >= 97) {
            return result = {
                ...result,
                lowerCase : true,
                letter : true,
            }
        } else if (item.charCodeAt() >= 48 && item.charCodeAt() <= 57) {
            return result = {
                ...result,
                digit : true,
            }
        } else {
          return result = {
            ...result,
            textDecoration : true
          }
        }
    })
    if (result.textDecoration || !result.letter) {
        return false
    } else {
        return true
    }
}

console.log(alphanumeric("Mazinkaiser")) // true
console.log(alphanumeric("hello world_")) // false
console.log(alphanumeric("PassW0rd")) // true
console.log(alphanumeric("     ")) // false
