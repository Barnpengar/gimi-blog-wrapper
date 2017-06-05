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
  switch (true) {
    case path.includes('/blog/nb/'): return 'no.gimitheapp.com'
    case path.includes('/blog/nn/'): return 'no.gimitheapp.com'
    case path.includes('/blog/se/'): return 'veckopengen.se'
    default: return 'gimitheapp.com'
  }
}

let getPath = (path = '') => {
  if (!path.startsWith('/blog/')) return 'news'
  var splits = path.split('/')
  splits.shift()
  splits.shift()
  splits.shift()
  return splits.join('/')
}

let getBlogUrl = ({path} = {path: ''}) => `http://${getHost(path)}/${getPath(path)}`

let getBlogContents = (event = {body: '{}'}) => request(getBlogUrl(event))

module.exports = {
  getBlogUrl,
  getBlogContents
}
