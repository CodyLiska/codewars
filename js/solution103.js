/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let sp = str.split('')
  let count = 0
  sp.forEach((element) => {
      if(element == 'a'){
          count++
      }else if(element == 'e'){
        count++
      }else if(element == 'i'){
        count++
      }else if(element == 'o'){
        count++
      }else if(element == 'u'){
        count++
      }
  })
return count
}


/*
  SHORTER SOLUTION FOUND 
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}
*/