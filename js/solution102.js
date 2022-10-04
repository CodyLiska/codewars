/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  let split = s.split(' ')
  let shortest = split.reduce((shortestWord, currentWord)=> {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord
  }, split[0])
  return shortest.length
}