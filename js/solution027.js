var number = function (busStops){
  // Good Luck!
  let totalPeople = 0
  for(let i=0; i<busStops.length; i++){
    totalPeople += busStops[i][0]
    totalPeople -= busStops[i][1]
  }  
  return totalPeople
}

console.log(number([[10,0],[3,5],[5,8]]))