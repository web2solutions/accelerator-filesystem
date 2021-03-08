const chai = require('chai')
const chaiHttp = require('chai-http')
const Server = require('../dist/Server.js').default
const should = chai.should()
const assert = require('assert')
const APIURL = 'http://0.0.0.0:4000'

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

  /* it('should create a new products without the published field', async () => {
      const response = await chai.request(server).post('/products').send(product_3)
      response.should.have.status(201)
      delete response.body.id
      response.body.should.eql({...product_3, isPublished: false})
  })

  it('should fetch all the products', async () => {
      const results = await setup(product_1, product_2, product_3, product_4)
      const response = await chai.request(server).get('/products')
      response.should.have.status(200)
      response.body.should.eql(results)
  })

  it('should fetch no products if there are not products stored', async () => {
      const response = await chai.request(server).get('/products')
      response.should.have.status(200)
      response.body.should.eql([])
  })


  it('should publish the product if all the constraints are met', async () => {
      const results = await setup(product_1, product_2, product_3, product_4)
      const response = await chai.request(server).patch('/products/1').send({isPublished: true})
      response.should.have.status(204)
  })

  it('should publish the product and the data should be updated in the DB', async () => {
      const results = await setup(product_1, product_2, product_3, product_4)
      const response = await chai.request(server).patch('/products/1').send({isPublished: true})
      response.should.have.status(204)
      const getResponse = await chai.request(server).get('/products')
      const updatedProduct = getResponse.body.find(product => product.id === 1)
      updatedProduct.should.not.be.undefined
      updatedProduct.isPublished.should.eql(true)
  })

  it('should get 422 when MRP is less the price of the product', async () => {
      const results = await setup(product_1, product_2, product_3, product_4)
      const response = await chai.request(server).patch('/products/2').send({isPublished: true})
      response.should.have.status(422)
      response.body.should.eql(['MRP should be less than equal to the Price'])
  })

  it('should get 422 when stock of the product is 0', async () => {
      const results = await setup(product_1, product_2, product_3, product_4)
      const response = await chai.request(server).patch('/products/3').send({isPublished: true})
      response.should.have.status(422)
      response.body.should.eql(['Stock count is 0'])
  })

  it('should get 422 when both  MRP is less the price of the product and stock of the product is 0', async () => {
      const results = await setup(product_1, product_2, product_3, product_4)
      const response = await chai.request(server).patch('/products/4').send({isPublished: true})
      response.should.have.status(422)
      response.body.length.should.eql(2)
      response.body.should.eql(['MRP should be less than equal to the Price', 'Stock count is 0'])
  })

  it('should get 405 for a put request to /products/:id', async () => {
      const [product] = await setup(product_1)
      const response = await chai.request(server).put(`/products/${product.id}`).send(product)
      response.should.have.status(405)
  })

  it('should get 405 for a delete request to /products/:id', async () => {
      const [product] = await setup(product_1)
      const response = await chai.request(server).delete(`/products/${product.id}`)
      response.should.have.status(405)
  }) */
})
