/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
  // your code here
  let newStr = x.split('').reverse().join('')
    console.log(newStr)
  if(newStr == x){
    return true
  }else{
    return false
  }
}