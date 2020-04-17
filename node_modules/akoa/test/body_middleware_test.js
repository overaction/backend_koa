/**
 * Test case for bodyMiddleware.
 * Runs with mocha.
 */
'use strict'

const bodyMiddleware = require('../lib/middlewares/body_middleware.js')
const assert = require('assert')


describe('body-middleware', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Body middleware', async () => {
    let middleware = bodyMiddleware({})
    assert.ok(middleware)
  })
})

/* global describe, before, after, it */
