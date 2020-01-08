function shortestWord(string) {
  var arrayOfWords = string.split(" ");
  var countOfLetters = string.split(" ").map((word) => {
    return word.length
  });
  var minLength = 1000;
  var minWord;
  for (var i = 0; i < countOfLetters.length; i++) {
    if (countOfLetters[i] < minLength) {
      minLength = countOfLetters[i];
      minWord = arrayOfWords[i];
    }
  }
  return minWord.length;
}

console.log(shortestWord("I have apples"));