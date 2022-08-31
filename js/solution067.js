/*
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

function find_average(array) {
  // your code here
  if(array.length > 0){
    let sum = array.reduce((p, e) => p + e)
    let div = array.length
    return sum / div
  }else{
    return 0
    }
}
