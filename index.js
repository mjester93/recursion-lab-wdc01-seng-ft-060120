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
  } else if (string[length - 1] === string[0]) {
    return isPalindrome(string.substring(1, length - 1));
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  let new_index = index -1

  if (index < 1) {
    return array[index]
  } else {
    return array[index] + addUpTo(array, new_index)
  }
}

function maxOf(array) {
  if (array.length < 1) {
    return array
  } else {
    if (array[0] > array[array.length - 1]) {
      return maxOf(array.slice(1, array.length))
    } else {
      return maxOf(array.slice(2, array.length))
    }
  }
}
