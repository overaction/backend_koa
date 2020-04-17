/**
 * Create an AKoa instance.
 * @function create
 * @returns {Object}
 */
'use strict'

const AKoa = require('./akoa')

/** @lends create */
function create (...args) {
  return new AKoa(...args)
}

module.exports = create
