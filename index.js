// Code your solution here!
function printString(myString) {
  console.log(myString[0])

  if (myString.length > 1) {
    let mySubstring = myString.substring(1, myString.length);
    printString(mySubstring);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 1) {
    let substring = string.substring(0, string.length -1);
    return `${string[string.length -1]}${reverseString(substring)}`;
  } else {
    return string[string.length - 1];
    //how does JavaScript know to tack on the lastLetter to the end of the string? (b/c when it hits the base case the string.length is now equal to one)
  }
}

function isPalindrome(string) {
  if (string.length < 2) {
    return true
  } else if (string[0] === string[string.length -1]) {
    return isPalindrome(string.substring(1, string.length -1))
  } else {
    return false
  }
}

//([1, 4, 5, 3], 2)
function addUpTo(array, index) {
  let subArray = array.slice(0, index + 1)//[1, 4, 5]
  let count = subArray[subArray.length -1];//5

  if (subArray.length > 1) {
    subArray.pop() //[1, 4]
    return count + addUpTo(subArray, subArray.length - 1)//addUpTo([1, 4], 2)
  } else {
    return array[0]
  }
}

//[1, 4, 5, 3]
function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.pop(), maxOf(array))
    //finds the maximum between the last element in the array (array.pop() and the return value of maxOf(array) (which keeps evaluating until it returns a final number array[0]))
  }
}

function includesNumber(array, number) {
  if (array[0] === number) {
    return true
  } else if (array.length > 0 && array[0] !== number) {
    return includesNumber(array.slice(1), number)
  } else {
    return false
  }
}

// function includesNumber(array, number) {
//   if (!array.length) { //if the array is empty
//     return false
//   } else if (array[0] === number) {
//     return true
//   } else {
//     return includesNumber(array.slice(1), number)
//   }
// }
