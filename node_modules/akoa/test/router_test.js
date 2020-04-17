/**
 * Test case for router.
 * Runs with mocha.
 */
'use strict'

const Router = require('../lib/router.js')
const assert = require('assert')


describe('router', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Router', async () => {
    assert.ok(new Router())
  })
})

/* global describe, before, after, it */
