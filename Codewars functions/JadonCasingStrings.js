function jadenCasingStrings(string) {
  var capitalizedWords = string.split(" ").map(function(word) {
    var arrOfLetters = word.split("");
    
    arrOfLetters[0] = arrOfLetters[0].toUpperCase();
    return arrOfLetters.join("")
  })
  return capitalizedWords.join(" ");
}

console.log(jadenCasingStrings("When writing on Twitter, he is known for almost always capitalizing every word."));