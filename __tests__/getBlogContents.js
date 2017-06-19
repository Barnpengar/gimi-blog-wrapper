let getBlogContents = require('../getBlogContents').getBlogContents
let getBlogUrl = require('../getBlogContents').getBlogUrl

describe('getBlogContents', () => {
  xit('should get blog contents', () => {
    console.log(getBlogContents)
    getBlogContents()
      .then((res) => expect(res).toBeDefined())
  })

  it('should get correct blog url', () => {
    expect(getBlogUrl({path: '/blog/'})).toEqual('http://blog.gimitheapp.com/news')
    expect(getBlogUrl({path: '/blog/mklfdlkmfd'})).toEqual('http://blog.gimitheapp.com/mklfdlkmfd')
  })
})
