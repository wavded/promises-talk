// requires node 0.11 with harmony flag

var Promise = require('bluebird')

var genPromise = Promise.coroutine(function *(arg) {
  if (!arg) throw new Error('no argument')

  yield Promise.delay(2000)
  return 'pass this value back'
})

genPromise(undefined)
  .catch(function (er) {
    console.error('had an error', er)
  })

genPromise('pass a value')
  .then(function (value) {
    console.log(value)
  })
