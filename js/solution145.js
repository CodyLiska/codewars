function countPositivesSumNegatives(input) {
  // your code here
  let positive = 0;
  let negative = 0;
  let newArr = [];

  if(input === null || input.length === 0){
    return newArr;
  }

  for(let i = 0; i < input.length; i++) {
    if(input[i] == 0) continue;
    else if(input[i] > 0) positive++;
    else if(input[i] < 0) negative += input[i];
  }

  newArr.push(positive);
  newArr.push(negative);

  return newArr;
}

console.log(countPositivesSumNegatives([]), "[10, -65]")