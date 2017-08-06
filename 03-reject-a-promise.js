
var promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    reject(new Error ('REJECTED!'))
  }, 300)
})
var onReject = function (error) {
  console.log(error.message)
}
promise.then(console.log, onReject)
