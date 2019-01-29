// Code your solution here!

function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let subString = string.substring(1, string.length);
    printString(subString);
  } else {
    return true;
  }
}

function reverseString(string){
  if(string.length > 1){
    let substring = string.substring(1)
    return reverseString(substring) + string[0]
  } else {
    return string
  }
}

function isPalindrome(string){
  if(string.length === 1){
    return true
  }
  else if(string[0] === string[string.length - 1]){
    let substring = string.substring(1, string.length - 1)
    return isPalindrome(substring)
  }
  else {
    return false
  }
}

function addUpTo(array, index){
  if(index > 0){
    let newIndex = index - 1
    return addUpTo(array, newIndex) + array[index]
  } else {
    return array[index]
  }
}

function maxOf(array){
  if(array.length === 1){
    return array[0]
  }
  else {
    let max = array[0]
    let sub = array.slice(1)
    return Math.max(max, maxOf(sub))
  }
}

function includesNumber(array, number){
  if (array[0] === number){
    return true
  } else if (array.length < 1){
    return false
  } else {
    let sub = array.slice(1)
    return includesNumber(sub, number)
  }
}
