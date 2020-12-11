import express, { Application } from 'express'

import baseConfig from './next.config'
import Server from 'next/dist/next-server/server/next-server'
import bodyParser from 'body-parser'
import next from 'next'
import { storyBlokService } from 'clavius.lib/src'

const PORT = process.env.PORT || '1123'

// c(▀̿Ĺ̯▀̿ ̿).
;(async (server: Application, app: Server) => {
  const handle = app.getRequestHandler()
  await app.prepare()

  server.use([
    bodyParser.json(),
    bodyParser.urlencoded({
      extended: true,
    }),
  ])

  server.get('/builder/:slug?', async (request, response, next) => {
    const sbService = storyBlokService()
    const slug = (request.params.slug as string) || 'home'
    if (/\.[^/.]+$/.test(slug)) return next()

    try {
      request['storyblok'] = await sbService.get(
        `cdn/stories/${slug || 'home'}`,
        {},
      )
    } catch (error) {
      response.status(500)

      return app.render(request, response, '_error', {
        message: 'Something went wrong',
      })
    }

    return app.render(request, response, '/builder')
  })

  server.get('*', async (request, response) => {
    return handle(request, response)
  })

  server.listen(PORT, () => {
    console.info(`🚀> Ready on http://localhost:${PORT}`)
  })
})(
  express(),
  next({
    dev: process.env.NODE_ENV !== 'production',
    customServer: true,
    conf: baseConfig,
  }),
)
