let request = require('request-promise')
/*
location: {
  hash:""
  host:"serverless.com"
  hostname:
  "serverless.com"
  href:"https://serverless.com/framework/docs/providers/aws/events/apigateway/"
  origin: "https://serverless.com"
  pathname: "/framework/docs/providers/aws/events/apigateway/",
  lang: 'se'
}
*/

let getHost = (path = '') => {
  return 'blog.gimitheapp.com'
}

let getPath = (path = '') => {
  if (!path.startsWith('/blog/')) return 'news'
  if (path.endsWith('/blog/')) return 'news'
  var splits = path.split('/blog/')
  splits.shift()
  return splits.join('/')
}

let getBlogUrl = ({path} = {path: ''}) => `http://${getHost(path)}/${getPath(path)}`

let getBlogContents = (event = {body: '{}'}) => request(getBlogUrl(event))

module.exports = {
  getBlogUrl,
  getBlogContents
}
