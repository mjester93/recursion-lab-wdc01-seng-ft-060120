// Code your solution here!
function printString(string) {
  console.log(string)
  
  if (string.length > 1) {
    let mySubString = string.substring(1, string.length)
    printString(mySubString)
  } else {
    return true
  }
}