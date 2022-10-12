/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
  // Write your code here
  if(damage > health){
    return 0
  }else {
    return health - damage
  }
}