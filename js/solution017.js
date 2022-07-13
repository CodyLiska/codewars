function findNextSquare(sq) {
  if(sq < 0 || Math.sqrt(sq) % 1 != 0){
    return -1;
  }

  let result = Math.floor(Math.sqrt(sq)) + 1;
  return result * result;
}