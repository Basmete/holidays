function isograms(string) {
  if (string.length === 0) return true;
  var arrayOfLetters = string.toLowerCase().split("");
  var obj = {};
  for (var i = 0; i < arrayOfLetters.length; i++) {
    obj[arrayOfLetters[i]] = obj[arrayOfLetters[i]] ? 1+obj[arrayOfLetters[i]] : 1
    if (obj[arrayOfLetters[i]] > 1) return false
  }
  return true
}

isograms("abcdea");