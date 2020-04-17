/**
 * Test case for exceptionMiddleware.
 * Runs with mocha.
 */
'use strict'

const exceptionMiddleware = require('../lib/middlewares/exception_middleware.js')
const assert = require('assert')


describe('exception-middleware', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Exception middleware', async () => {
    let middleware = exceptionMiddleware({})
    await middleware({}, () =>
      new Promise((resolve, reject) => setTimeout(() => reject('failed!'), 200))
    )
  })
})

/* global describe, before, after, it */
