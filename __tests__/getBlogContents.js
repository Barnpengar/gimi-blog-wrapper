let getBlogContents = require('../getBlogContents')

describe('getBlogContents', () => {
  console.log(getBlogContents)
  getBlogContents()
    .then((res) => expect(res).toEqual())
})
