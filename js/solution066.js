/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

  S is misinterpreted as 5
  O is misinterpreted as 0
  I is misinterpreted as 1
  The test cases contain numbers only by mistake.
*/

function correct(string)
{
	// your code here
  let newStr = string.split('')
  for(let i = 0; i <= newStr.length; i++){
    if(newStr[i] === '5'){
      newStr[i] = 'S'
    }else if(newStr[i] === '0'){
      newStr[i] = 'O'
    }else if(newStr[i] === '1'){
      newStr[i] = 'I'
    }
  }
  return newStr.join('')
}