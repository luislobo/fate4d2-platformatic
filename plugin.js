/// <reference path="./global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  app.get('/hello', async function (request, reply) {
    return { hello: 'from Platformatic Cloud v2' }
  })
}
