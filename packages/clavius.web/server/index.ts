import express, { Application } from 'express'

import baseConfig from './next.config'
import Server from 'next/dist/next-server/server/next-server'
import bodyParser from 'body-parser'
import next from 'next'
import dotenv from 'dotenv'
dotenv.config()

// c(▀̿Ĺ̯▀̿ ̿).
;(async (server: Application, app: Server) => {
  const port = 1123

  const handle = app.getRequestHandler()
  await app.prepare()

  server.use([
    bodyParser.json(),
    bodyParser.urlencoded({
      extended: true,
    }),
  ])

  server.get('/favicon.ico', (req, res) => res.status(204))

  server.get('/:slug', async (request, response) => {
    return app.render(request, response, '/index', {
      slug: request.params.slug as string,
    })
  })

  server.get('*', async (request, response) => {
    return handle(request, response)
  })

  server.listen(port, () => {
    console.info(`🚀> Ready on http://localhost:${port}`)
  })
})(
  express(),
  next({
    dev: process.env.NODE_ENV !== 'production',
    customServer: true,
    conf: baseConfig,
  }),
)
