/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

  Examples input/output:

  XO("ooxx") => true
  XO("xooxx") => false
  XO("ooxXm") => true
  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  XO("zzoo") => false
*/

function XO(str) {
  //code here
  let xCount = 0
  let oCount = 0

  for (let i = 0; i < str.length; i++){
    if(str[i] === 'x' || str[i] === 'X'){
      xCount += 1
    }if(str[i] === 'o' || str[i] === 'O'){
      oCount += 1
    }
  }
  if(xCount === oCount){
    return true
  }else{
    return false
  }
}

/*
Example of a shorter solution
    const XO = str => {
      str = str.toLowerCase().split('');
      return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
    }
*/