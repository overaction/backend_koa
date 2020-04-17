/**
 * Test case for akoa.
 * Runs with mocha.
 */
'use strict'

const AKoa = require('../lib/akoa.js')
const aport = require('aport')
const arequest = require('arequest')
const assert = require('assert')

describe('akoa', function () {
  this.timeout(3000)
  let port, server

  before(async () => {
    port = await aport()
    server = await new AKoa([]).listen(port)
  })

  after(async () => {
    await server.close()
  })

  it('Akoa', async () => {
    assert.ok(AKoa.newRouter())
    assert.ok(server)
  })
})

/* global describe, before, after, it */
