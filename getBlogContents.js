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

let getHost = (host) => {
  switch (true) {
    case host.includes('ukepengen.no'): return 'no.gimitheapp.com'
    case host.includes('gimitheapp.com'): return 'gimitheapp.com'
    default: return 'veckopengen.se'
  }
}

module.exports = (event = {body: '{}'}) => {
  var {body} = event
  var location = JSON.parse(body)
  var host = location.host || 'veckopengen.se'
  var pathname = location.pathname || '/aktuellt'
  host = getHost(host)
  return request(`http://${host}${pathname}`)
}
