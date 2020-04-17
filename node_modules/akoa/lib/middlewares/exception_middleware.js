/**
 * Define an exception middleware
 * @function exceptionMiddleware
 * @param {Object} [options] - Optional settings
 * @returns {function}
 */
'use strict'

/** @lends exceptionMiddleware */
function exceptionMiddleware (options = {}) {
  const {
    logger = console.error,
    status = 500,
    prefix = null
  } = options
  return async function exceptionMiddleware (ctx, next) {
    const skip = prefix && (ctx.path.indexOf(prefix) !== 0)
    if (skip) {
      await next()
      return
    }
    try {
      await next()
    } catch (err) {
      logger('Uncaught exception:', err)
      ctx.status = status
    }
  }
}

module.exports = exceptionMiddleware
