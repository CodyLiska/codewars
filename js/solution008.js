/*
//  8 kyu - Reversed Strings
*/
// Complete the solution so that it reverses the string passed into it.
//
//'world'  =>  'dlrow'
//'word'   =>  'drow'
// Completed: 06.06.22

function solution(str){
  let word = [...str].reverse().join("");
  return word;
}