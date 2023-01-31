/*  
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

function problem(x){
  if(typeof x === 'string') {
    return "Error"
  }else {
    let duper = (x * 50) + 6
    return duper
  }
}

console.log(problem("hello"), 'Error')
console.log(problem(5), '252')