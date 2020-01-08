function vowelCount(string) {
  
  var arrayOfCounts = string.split(" ").map(function(word) {
    var letters = word.split("")
    console.log(letters)
    var counter = 0;
    for (var i = 0; i < letters.length; i++) {
      if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
        counter +=1;
      }
    }
    return counter;
  })

  return arrayOfCounts.reduce(function(result, num) {
    return result + num;
  }, 0)
}

console.log(vowelCount("milk pain leaf"))