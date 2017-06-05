let getBlogContents = require('getBlogContents')

module.exports.hello = (event, context, callback) => {
  let response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
      // 'Content-Type': 'text/html'
    },
    body: JSON.stringify(event)
  }
  return callback(null, response)
  /*
  getBlogContents(event)
    .then((body) => {
      console.log(body)
      response.body = body
      callback(null, response)
    })
    .catch((e) => {
      console.error(e)
      response.body = e.toJSON()
      response.statusCode = 500
      callback(null, response)
    })
    */
}
