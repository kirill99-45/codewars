// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
//
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
//
// It is much easier to understand with an example:
//
// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.
//
// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
//
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
//
// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
//
// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
//
// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
//
// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.


const validate = (string ,number) => { // Is the number multiple
  if (number > 1) {
    return string
  } return string.split('').map((item, index) => index === string.length - 1 ? '' : item).join('')
}

const getSybmol = (length, currentPos) => { // Get words\symbols which divide the result string
  if ((length - currentPos) === 1) {
    return ''
  } else if ((length - currentPos) === 2) {
    return ` and`
  } return ','
}

const getTime = (obj) => { // Get the result string
  const cash = {}
  let string = ''
   Object.keys(obj).forEach(item => obj[item] > 0 ? cash[item] = obj[item] : '')
   Object.keys(cash).forEach((item, index) => {
    string += `${cash[item]} ${validate(item, cash[item])}${getSybmol(Object.keys(cash).length, index)} `
  })
  return string.trim()
}

const getMult = (string) => { // Get Multiplier for current item
  if (string === 'years') return 31536000
  if (string === 'days') return 86400
  if (string === 'hours') return 3600
  if (string === 'minutes') return 60
}

const formatDuration = (seconds) => {
  if (seconds === 0) return 'now'
  else {
    const variable = { years : 0, days : 0, hours : 0, minutes : 0 }

    Object.keys(variable).forEach(item => {
      variable[item] = Math.floor(seconds / getMult(item))
      console.log(seconds);
      seconds -= variable[item] * getMult(item)
    })

    variable.seconds = seconds
    return getTime(variable)
  }
}

console.log(formatDuration(1)) // "1 second");
console.log(formatDuration(62)) // "1 minute and 2 seconds");
console.log(formatDuration(120)) // "2 minutes");
console.log(formatDuration(3600)) // "1 hour");
console.log(formatDuration(3662)) // "1 hour, 1 minute and 2 seconds")
