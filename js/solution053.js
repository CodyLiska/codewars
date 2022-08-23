/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
  6, "I"     -> "IIIIII"
  5, "Hello" -> "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
  let i = 1
  let newStr = ''
  while(i <= n){
    newStr = s.concat('', newStr)
    i++
  }
  return newStr;
}

// Shorter solution found in solutions
/*
function repeatStr (n, s) {
  return s.repeat(n);
}
*/