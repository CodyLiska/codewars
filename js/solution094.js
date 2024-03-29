/*
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
  i.e.
  friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
*/

function friend(friends){
  //your code here
  let newArr = []
  friends.map((e) => {
    if(e.length == '4'){
        newArr.push(e)
    }
  })
   return newArr
}

/*
  // Shorter solution
  function friend(friends){
    return friends.filter(n => n.length === 4)
  }
*/