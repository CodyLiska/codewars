/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
  "camelCasing"  =>  "camel Casing"
  "identifier"   =>  "identifier"
  ""             =>  ""
*/

function solution(string) {
  string = string.split('').map(function (cap) {
    if (cap === cap.toUpperCase()) {
      cap = ' ' + cap
    }
    return cap
  })
  return string.join('')
}