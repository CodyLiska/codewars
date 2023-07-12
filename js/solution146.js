function stray(numbers) {
  for(let i = 0; i < numbers.length; i++) {
    if(numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];   
    }
  }
}

console.log(stray([1, 1, 2]));