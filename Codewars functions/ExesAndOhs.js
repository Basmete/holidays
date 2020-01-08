function exesAndOhs(string) {
  var exesCount = 0;
  var ohsCount = 0;
  var arrayOfLetters = string.toLowerCase().split("");
  for (var i = 0; i < arrayOfLetters.length; i++) {
    if (arrayOfLetters[i] === "x") {
      exesCount += 1;
    }
    if (arrayOfLetters[i] === "o") {
      ohsCount += 1;
    }
  }
  if (exesCount === ohsCount) {
    return true
  } else {
    return false
  }
}

console.log(exesAndOhs("oPoxoooXXcCxxxooxxxc"));