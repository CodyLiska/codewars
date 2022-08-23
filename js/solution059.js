/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
  let result = x.reduce((sum, current) => sum + Number(current), 0);
  return result
}