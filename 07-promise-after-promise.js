var firstPromise = first()

var secondPromise = firstPromise.then(function (value) {
  second(value)
})

secondPromise.then(console.log)
