/*
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.
    Example:
    h = 0
    m = 1
    s = 1
    result = 61000
*/

function past(h, m, s){
  //#Happy Coding! ^_^
  let hourSeconds = (h * 60) * 60
  let minSeconds = (m * 60)
  return (hourSeconds + minSeconds + s) * 1000
}