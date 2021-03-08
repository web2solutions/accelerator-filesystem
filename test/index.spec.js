/* global it describe before */
const chai = require('chai')
const chaiHttp = require('chai-http')
const Server = require('../dist/Server.js').default
const should = chai.should()
const assert = require('assert')

chai.use(chaiHttp)

describe('API TEST SUITE', () => {
  let  _server   =  null
  before(async () => {
    let {
      error,
      server
    } = await Server.start()
    _server = server
  })

  it('GET / end point must to return status 404', async () => {
    const response = await chai.request(_server.app).get('/')
    response.should.have.status(404)
  })

  it('GET /graphql end point passing no query parameter must returns status 400', async () => {
    const response = await chai.request(_server.app).get('/graphql')
    response.should.have.status(400)
  })

  it('GET /graphql end point passing no query parameter must returns the error message: "Must provide query string', async () => {
    const response = await chai.request(_server.app).get('/graphql')
    response.body.errors[0].should.eql({"message":"Must provide query string."})
  })

  it('GET /graphql end point passing files query must returns status 200', async () => {
    let query = encodeURI('{files{name size fullPath}}')
    const response = await chai.request(_server.app).get(`/graphql?query=${query}`)
    response.should.have.status(200)
  })

  it('GET /graphql end point passing files query without dir argument must returns files from API application root directory', async () => {
    let query = encodeURI('{files{name size fullPath}}')
    const response = await chai.request(_server.app).get(`/graphql?query=${query}`)
    // console.log(response.body.data.files)
    response.body.data.files[0].name.should.eql('.DS_Store')
  })

})
