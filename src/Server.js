'use strict'

import express from 'express'
import { graphqlHTTP}  from 'express-graphql'
import { buildSchema } from 'graphql'
import fs from 'fs'
import path from 'path'


// console.log('graphqlHTTP', graphqlHTTP)


const FilesController = (() => {
  const api = {
    list: (req, res) => {
      res.json({ok: true})
    }
  }
  return api
})()
class FilesRouter extends express.Router {
  constructor(app) {
      super()
      this.get('/', FilesController.list)
  }
}


/**
 * @Class Server
 * @summary An Express server abstraction implementing a simple graphql API
 * @description The server class implements an simple graphql API listing files from a speciic directory
 */
export default class Server {
  
  #_app
  #_schema
  #_root
  #_inited
  
  constructor() {
    const self = this
    this.#_app = express()
    this.#_setAPISchema()
    this.#_root = {
      files: () => {
        console.log('xxxxxxxxxxxxx')
        return Promise.resolve(self.#_getDirectry({dir: './'}))
      }

    }
    this.#_inited = false
  }
  /**
   * @Method Server.setErrorHandler
   * @summary Set a generic error handler for this server - PRIVATE, not externally callable
   * @description In a real world app it could be generating logs or sending "error messages" to an message queue
  */
  #_setErrorHandler() {
    this.#_app.use(this.#_errorHandler)
  }
  /**
   * @Method Server.errorHandler
   * @summary Generic error handler - PRIVATE, not externally callable
   * @description Intercepts all errors and properly handle those
   * @param {object} error - the exception information
   * @param {object} req - the Express request object
   * @param {object} res - the Express request object
   * @param {function} next - the Express next() function that is called inside middleware, but in this case, it will not be called.
   */
  #_errorHandler(error, req, res, next) {
    console.log(error)
    process.exit(0)
  }
  /**
   * @async
   * @Method Server.init
   * @summary Inits the Server instance
   * @description This method calls express().listen
   * @return  {object} error - if any
   */
  init() {
    return new Promise((resolve, reject) => {
      if (this.#_inited) {
        return resolve()
      }
      this.#_setErrorHandler()
      this.#_addRouter()
      this.#_app.listen(process.env.PORT, () => {
        this.#_inited = true
        resolve()
        console.log(`app running on localhost:${process.env.PORT}/graphql`)
      }).on('error', function (err) {
        reject(err)
        process.exit(0)
      })
    })
  }

  /**
   * @async
   * @Method Server.start
   * @summary Create a Server instance
   * @description Abstracts the Class initialization once there is no need for running multiple server in this way. <br>
   * The server will be clustered via pm2. <br>
   * This method calls express().listen
   * @return {object} signature - method signature
   * @return {string|object} signature.error - Execution error
   * @return {object} signature.server - Server instance
   */
  static async start() {
    let error = null
    let server = new Server()
    try {
      await server.init()
    } catch (e) {
      server = null
      error = e
      console.error(e)
      throw new Error({ error, server })
    }
    return { error, server }
  }


  /**
   * @Method Server.#_setAPISchema()
   * @summary PRIVATE Set the graphql schema
   * @description Currently providing two queries: file and files
   */
  #_setAPISchema() {
    this.#_schema = buildSchema(`
      type Query {
          file(name: String): File
          files(dir: String): [File]
      },
      type File {
          name: String
          size: Float!
          fullPath: String
      }
    `)
  }

  /**
   * @async
   * @Method Server.#_getDirectry
   * @summary PRIVATE - List itens from given file system directory
   * @description By default it will to list content from ./
   * By default, this API will allow to list content starting on API application directory.<br>
   */
  async #_getDirectry(args = {}) {
    let _dir = __dirname
    const all = []
    if (args.dir) {
      _dir = path.resolve(`./${args.dir}`)
    }
    let { error, files } = await this.#_readDir(_dir)
    for (let x = 0; x < files.length; x++) {
      let name = files[x]
      let fullPath = `${_dir}/${name}`
      const { size } = fs.statSync(fullPath)
      all.push({
        name,
        size: size.toFixed(4),
        fullPath
      })
    }
    
    console.log(all)
    return all
  }

  #_readDir(dir) {
    return new Promise((resolve, reject) => {
      fs.readdir(dir, (error, files) => {
        if (error) {
          return resolve({ error, files: null })
        }
        resolve({ error: null, files })
      })
    })
  }

  #_addRouter() {
    // this.#_app.use('/', new FilesRouter(this))
    this.#_app.use('/graphql', graphqlHTTP({
      schema: this.#_schema,
      rootValue: this.#_root,
      graphiql: true
    }))
  }
}
