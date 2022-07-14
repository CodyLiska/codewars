function opposite(number) {
  let value = Math.sign(number)
  if(value === 1){
    return -Math.abs(number)
  }else{
    return Math.abs(number)
  }
}