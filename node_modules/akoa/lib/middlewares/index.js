/**
 * 
 */

'use strict'


const bodyMiddleware = require('./body_middleware')
const exceptionMiddleware = require('./exception_middleware')
const staticMiddleware = require('./static_middleware')

exports.bodyMiddleware = bodyMiddleware
exports.exceptionMiddleware = exceptionMiddleware
exports.staticMiddleware = staticMiddleware

module.exports = {
  bodyMiddleware,
  exceptionMiddleware,
  staticMiddleware
}
