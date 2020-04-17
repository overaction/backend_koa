/**
 * @function bodyMiddleware
 */
'use strict'

const koaBodyparser = require('koa-bodyparser')

/** @lends bodyMiddleware */
function bodyMiddleware (options = {}) {
  return koaBodyparser(options)
}

module.exports = bodyMiddleware
