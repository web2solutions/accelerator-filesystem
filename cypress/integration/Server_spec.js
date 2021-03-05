/* global describe it Blob before */

import Server from '../../src/Server.js'
import assert from 'assert'

describe('#--- API test suite', () => {
  let name = 'My App'
  let foundation = null
  
  before(async() => {
    await Server.start()
  })
  
  describe('Check class integrity', async () => {
    it('Foundation must starts', (done) => {
      ; (async () => {
        const { error, data } = await Server.start()
        assert.equal(error, null)
        assert.notEqual(data, null)
        if (error) {
          done(error)
        } else {
          done()
        }
      })()
    })
    
  })
})
