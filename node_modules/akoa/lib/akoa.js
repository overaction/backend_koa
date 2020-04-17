
'use strict'

const http = require('http')
const Koa = require('koa')
const koaCompose = require('koa-compose')
const Router = require('./router')

/**
 * @class AKoa
 * @param {function[]} - Middlewares to use
 */
class AKoa {
  constructor (middlewares, options = {}) {
    this.app = AKoa.newApp(middlewares)
  }

  /**
   * Use a middleware
   * @param {function} middleware
   */
  use (middleware) {
    return this.app.use(...arguments)
  }

  /**
   * Listen to port
   * @param {number} port
   * @returns {Promise.<AKoa>}
   */
  listen (port) {
    const server = http.createServer()
    this.attachTo(server)
    return new Promise((resolve) =>
      server.listen(port, () => resolve())
    ).then(() => this)
  }

  /**
   * Close server
   * @returns {Promise.<AKoa>}
   */
  close () {
    const {server} = this
    if (!server) {
      return Promise.reject(new Error('Nothing to close!'))
    }
    return new Promise((resolve) =>
      server.close(() => {
        delete this.server
        resolve()
      })
    ).then(() => this)
  }

  /**
   * Attach rfunc to http server
   * @param {http.Server} server - A server instance
   * @returns {Promise.<AKoa>}
   */
  attachTo (server) {
    const {app} = this
    app.context.server = this.server = server
    server.addListener('request', app.callback())
    return Promise.resolve(this)
  }

  /**
   * Convert to koa middleware.
   * This is useful when you already han another koa instance.
   * @returns {function}
   */
  toMiddleware () {
    const {app} = this
    return koaCompose(app.middleware)
  }

  /**
   * Convert to http handler
   * @returns {function}
   */
  toCallback () {
    const {app} = this
    return app.callback()
  }

  static newApp (middlewares, options = {}) {
    let app = new Koa()
    for (let middleware of [].concat(middlewares || [])) {
      app.use(middleware)
    }
    return app
  }

  static newRouter (...args) {
    return new Router(...args)
  }

}

Object.assign(AKoa, {})

module.exports = AKoa

