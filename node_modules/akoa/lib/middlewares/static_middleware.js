/**
 * Define an static middleware
 * @function staticMiddleware
 * @param {string|string[]} root - Root directory
 * @param {Object} options - Optional settings
 * @returns {function}
 */
'use strict'

const compose = require('koa-compose')
const koaSend = require('koa-send')
const path = require('path')

/** @lends staticMiddleware */
function staticMiddleware (root, options = {}) {
  const {maxage, hidden, gzip, format, prefix} = options

  const send = async (ctx, filename, options) => {
    try {
      const served = await koaSend(ctx, filename, options)
      return !!served
    } catch (e) {
      if (e.statusCode === 404) {
        return false
      }
      throw e
    }
  }
  return compose(
    [].concat(root || []).map((root) => async function serve (ctx, next) {
      switch (ctx.method) {
        case 'HEAD':
        case 'GET': {
          const filename = '/' + path.relative(prefix || '/', ctx.path)
          const served = await send(ctx, filename, {root, maxage, hidden, gzip, format})
          if (served) {
            return
          }
          break
        }
        default:
          break
      }
      await next()
    })
  )
}

module.exports = staticMiddleware
