let getBlogContents = require('getBlogContents').getBlogContents
let getBlogUrl = require('getBlogContents').getBlogUrl

module.exports.hello = (event, context, callback) => {
  let response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
      'Content-Type': 'text/html'
    },
    body: ''
  }

  console.log('event.path', event.path)
  console.log('getBlogUrl', getBlogUrl(event))

  getBlogContents(event)
    .then((body) => {
      response.body = body
      callback(null, response)
    })
    .catch((e) => {
      response.body = e.toJSON()
      response.statusCode = 500
      callback(null, response)
    })
}
