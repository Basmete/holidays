function findTheParityOutlier(arr) {
  var even = 0;
  var odd = 0;
  //считаем больше ли четных
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  if (even > odd) {
    isOdd = true;
  }

  if (isOdd) {
    return arr.find((item) => {
      if (item % 2 !== 0) {
        return item
      }
    })
  } else {
    return arr.find((item) => {
      if (item % 2 === 0) {
        return item
      }
    })
  }


}

console.log(findTheParityOutlier([2,4,6,8,10,7]))