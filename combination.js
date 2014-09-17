var Promise = require('bluebird')
var fs = Promise.promisifyAll(require('fs'))
var files = fs.readdirSync('.')

var promises = files.map(function (file) { return fs.statAsync(file) })

Promise.all(promises)
  .then(function (files) {
    console.log('all resolves when all fulfilled', files)
  })
  .catch(function (er) {
    console.error('all rejects when any reject', er)
  })

Promise.race(promises)
  .then(function (file) {
    console.log('race fulfills if the first fulfills', file)
  })
  .catch(function (er) {
    console.log('race rejects if the first rejects', er)
  })

Promise.any(promises)
  .then(function (file) {
    console.log('any fulfills if any fulfills', file)
  })
  .then(function (er) {
    console.log('any fulfills if any fulfills', er)
  })

Promise.all(promises)
  .map(function (file) {
    console.log('map calls for every function and returns a new array based on fulfilled', file)
  })
  .then(function (mapped) {
    console.log('all mapped fulfills, get mapped array', er)
  })
  .catch(function (er) {
    console.log('any map promise rejects', er)
  })

Promise.all(promises)
  .reduce(function (acc, file) {
    console.log('reduce calls for every function and returns an accumulator based on fulfilled', file)
  })
  .then(function (reducedValue) {
    console.log('all reduce fulfills, get reducedValue', er)
  })
  .catch(function (er) {
    console.log('any reduce promise rejects', er)
  })
