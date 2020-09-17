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
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(string) {
  let length = string.length;

  if (length < 2) {
    return true;
  } else if (myString[length - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, length - 1));
  } else {
    return false;
  }
}
