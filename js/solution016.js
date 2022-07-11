function getSum(a,b){
  let arr = [a,b]
  let fullArr = []

  arr.sort((function(a,b){
    return a - b
  }))

  for(let i = arr[0]; i <= arr[1]; i++){
   fullArr.push(i)
  }

  let sum = fullArr.reduce((acc, c) => acc + c, 0)
  return sum
}