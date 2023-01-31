/*
  Your goal is to return multiplication table for number that is always an integer from 1 to 10.

  For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
*/


const multiTable = (num) => {
  let table = ''
  for(let i=1; i<=10; i++) {
    table += `${i} * ${num} = ${i * num}${i < 10 ? '\n' : ''}`
  }
  return table
}

console.log(multiTable(5))