var fs = require('fs')
var Promise = require('bluebird')

var readable = new Promise(function (resolve, reject) {
  var rstream = fs.createReadStream('/path/to/file')
  rstream.on('error', reject)
  rstream.on('end', resolve)
})

var writeable = new Promise(function (resolve, reject) {
  var wstream = fs.createWriteStream('/path/to/file')
  wstream.on('error', reject)
  wstream.on('finish', resolve)
})

var pipe = new Promise(function (resolve, reject) {
  var rstream = fs.createReadStream('/path/to/file')
  var wstream = fs.createWriteStream('/path/to/file')
  rstream.on('error', reject)
  wstream.on('error', reject)
  wstream.on('finish', resolve)
})

var nodeback = new Promise(function (resolve, reject) {
  fs.readFile('/path/to/file', function (er, data) {
    if (er) return reject(er)
    resolve(data)
  })
})

var callback = new Promise(function (resolve, reject) {
  fs.exists('/path/to/file', resolve)
})
