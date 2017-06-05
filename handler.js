'use strict'
let getBlogContents = require('getBlogContents')

let response = {
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
  },
  body: ''
}

module.exports.hello = (event, context, callback) => {
  getBlogContents(event)
    .then((body) => callback(null, {...response, body}))
    .catch((e) => callback(null, {...response, statusCode: 500, body: e.toJSON()}))
}
