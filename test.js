var Promise = require('bluebird')
var dbTmpl = Promise.coroutine(function *(params) {
  if (!params) throw new Error('no params')

  try {
    var tmpl = yield getSqlTmpl()
    var sql = tmpl(params)
    return dbQuery(sql)
  } catch (err) {
    // handle errors in catch or let the 'then' handler pick it up
  }
})

dbTmpl('').then(function (data) {
  console.log('result', data)
})
.catch(function (er) {
  console.error('error', er)
})
