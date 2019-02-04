// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 1) {
    let substr = string.substring(1);
    return reverseString(substr) + string[0];
  } else {
    return string;
  }
}

function isPalindrome(string) {
  if (string.length === 1) {
    return true
  } else if (string[0] === string[string.length - 1]) {
    let substring = string.substring(1, string.length - 1)
    return isPalindrome(substring)
  } else {
    return false
  }
}

function addUpTo(array, index) {
   if (index > 0) {
    let i = index - 1
      return addUpTo(array, i) + array[index]
  } else {
    return array[index]
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, num) {
  if (array[0] === num) {
    return true
  } else if (array.length > 0) {
    return includesNumber(array.slice(1), num)
  } else {
    return false
  }
}
