'use strict'

import express from 'express'
import { graphqlHTTP}  from 'express-graphql'
import { buildSchema } from 'graphql'
import fs from 'fs'
import path from 'path'

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 4000


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
      files: (arg = {}) => {
        return Promise.resolve(self.#_getDirectory(arg))
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
      this.#_app.listen(PORT, HOST, () => {
        this.#_inited = true
        resolve()
        console.log(`app running on ${HOST}:${PORT}/graphql`)
      }).on('error', function (err) {
        reject(err)
        process.exit(0)
      })
    })
  }

  get app() {
    return this.#_app
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
   * @description Currently providing one query: files
   */
  #_setAPISchema() {
    this.#_schema = buildSchema(`
      type Query {
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
   * @Method Server.#_getDirectory
   * @summary PRIVATE - List itens from given file system directory
   * @description By default it will to list content from __dirname
   * By default, this API will to list content from application directory root.<br>
   * @return  {array} files - Array of file. 
   * Each file is an object containing name, size and fullPath
   */
  async #_getDirectory(args = {}) {
    let _dir = path.join(__dirname, '..')
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
    // console.log(all)
    return all
  }

  /**
   * @async
   * @Method Server.#_readDir
   * @summary PRIVATE - Read a given directory usin fs and promise
   * @description By default it will to list content from __dirname
   * By default, this API will to list content from application directory root.<br>
   * @return  {promise} files - Returns an Array of file names when promise is resolved
   */
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

  /**
   * @Method Server.#_addRouter
   * @summary PRIVATE - Adds the /graphql route to the HTTP server
   * @description Adds the graphql routes by using express-graphql middleware
   */
  #_addRouter() {
    // this.#_app.use('/', new FilesRouter(this))
    this.#_app.use('/graphql', graphqlHTTP({
      schema: this.#_schema,
      rootValue: this.#_root
    }))
  }
}
