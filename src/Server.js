'use strict'

import express from 'express'
import * as graphql from 'express-graphql'
import { buildSchema } from 'graphql'
import fs from 'fs'
import path from 'path'

/**
 * @Class Server
 * @summary An Express server abstraction implementing a simple graphql API
 * @description The server class implements an simple graphql API listing files from a speciic directory
 */
export default class Server {
  
  #_app
  #_schema
  #_root
  
  constructor() {
    this.#_app = express()
    this.#_setAPISchema()
    this.#_root = {
      getDirectory: this.getDirectory
    }
  }
  /**
   * @Method Server.setErrorHandler
   * @summary Set a generic error handler for this server - PRIVATE, not externally callable
   * @description In a real world app it could be generating logs or sending "error messages" to an message queue
  */
  #_setErrorHandler() {
    this.#_app.configure(() => {
      this.#_app.use(this.#_errorHandler)
    })
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
    // log goes here
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
      this.#_setErrorHandler()
      this.#_app.listen(4000, () => {
        resolve()
        console.log('app running on localhost:4000/graphql')
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
  async #_getFiles(args) {
    let _dir = __dirname
    if (args.dir) {
      _dir = path.resolve(`./${args.dir}`)
    }
    let { error, files } = await this.#_readDir(_dir)
    return files;
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
}
