// Code your solution here!
function printString(string) {
  console.log(string[0])

  if (string.length > 1) {
    let mySubString = string.substring(1, string.length)
    printString(mySubString)
  } else {
    return true
  }
}

function reverseString(string) {
  x = string.length < 2 ? string : reverseString(string.substring(1) + string[0])
  return x
}
