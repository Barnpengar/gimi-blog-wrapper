'use strict'
let getBlogContents = require('getBlogContents')
module.exports.hello = (event, context, callback) => {
  getBlogContents(event)
    .then((res) => {
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Required for CORS support to work
          'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify({
          message: 'Go Serverless v1.0! Your function executed successfully!',
          input: res
        })
      }

      callback(null, response)
    })
    .catch((e) => {
      const response = {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*', // Required for CORS support to work
          'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify({
          message: e.message,
          input: e.toJSON()
        })
      }

      callback(null, response)
    })
}
