var Promise = require('bluebird')

var aTask = function () {
  return Promise.delay(300)
}

function forever(task) {
  return task().then(function () {
    console.log('finished') // just so you can see it happening
    return forever(task)
  })
}

forever(aTask).catch(function (er) {
  // catch an error if it happens
})

function times(task, count) {
  if (!count) return Promise.resolve()

  return task().then(function () {
    console.log('finished') // just so you can see it happening
    return times(task, --count)
  })
}

times(aTask, 5)
  .then(function () {
    console.log('times all done')
  })
  .catch(console.error)
