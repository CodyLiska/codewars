

function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  if(n > m){
    return n % m;
  }else {
    return m % n;
  }
}