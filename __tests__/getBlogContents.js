let getBlogContents = require('../getBlogContents').getBlogContents
let getBlogUrl = require('../getBlogContents').getBlogUrl

describe('getBlogContents', () => {
  xit('should get blog contents', () => {
    console.log(getBlogContents)
    getBlogContents()
      .then((res) => expect(res).toBeDefined())
  })

  it('should get correct blog url', () => {
    expect(getBlogUrl()).toEqual('http://gimitheapp.com/news')
    expect(getBlogUrl({path: '/blog/se/aktuellt'})).toEqual('http://veckopengen.se/aktuellt')
    expect(getBlogUrl({path: '/blog/se/whatever'})).toEqual('http://veckopengen.se/whatever')
    expect(getBlogUrl({path: '/blog/fl/whatever'})).toEqual('http://gimitheapp.com/whatever')
  })
})
