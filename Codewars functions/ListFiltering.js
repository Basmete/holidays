function listFiltering(arr) {
  return arr.filter(function(item) {
    return typeof(item) === "number"
  })
}

console.log(listFiltering([1,2,'aasf','1','123',123]));