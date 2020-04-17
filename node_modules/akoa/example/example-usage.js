#!/usr/bin/env node

/**
 * This is an example to run akoa server
 */
'use strict'

const akoa = require('akoa')

void async function () {
  const server = await akoa([
    // Koa middleware
    async function middleware01 (ctx, next) {
      /* ... */
      await
        next()
    }
  ]).listen(3000)

  /* ... */

  await server.close()

}().catch((err) => console.error(err))
