/*
//  8 kyu - How good are you really?
*/
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
//   Note:
//   Your points are not included in the array of your class's points. For calculating the average point you may add ////   your point to the given array!
//
// function betterThanAverage(classPoints, yourPoints) {
  // Your code here
// }
// Completed: 06.09.22

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let total = classPoints.reduce((accu, c) => accu + c, 0)
  let divide = classPoints.length
  let avg = total / divide
  if(yourPoints >= avg){
    return true
  }else{
    return false
  }
}