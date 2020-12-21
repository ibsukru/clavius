import express, { Application } from 'express'

import baseConfig from './next.config'
import Server from 'next/dist/next-server/server/next-server'
import bodyParser from 'body-parser'
import next from 'next'
import { StoryBlokResponseType } from 'clavius.lib/src/contexts/storyBlokContext'
import withContext, { contextAreaType } from 'clavius.lib/src/withContext'
import { storyBlokService } from 'clavius.lib/src'

const PORT = process.env.PORT || '1123'

// c(▀̿Ĺ̯▀̿ ̿).
const setup = (payload: { slug: contextAreaType }) => {
  return async (server: Application, app: Server) => {
    const handle = app.getRequestHandler()
    await app.prepare()

    server.use([
      bodyParser.json(),
      bodyParser.urlencoded({
        extended: true,
      }),
    ])

    server.get(
      ['/:locale/builder/:slug?', '/builder/:slug?'],
      async (request, response, next) => {
        const sbService = storyBlokService()

        const context = withContext({ request })

        const { params } = request

        const storyBlokLocale = request.query['_storyblok_lang'] as
          | string
          | undefined

        const originalLocale =
          params.locale?.replace('undefined', '') ||
          storyBlokLocale?.replace('default', '')

        const originalSlug = params.slug

        const slug = originalSlug || payload.slug

        const lift = (originalLocale || 'en-GL').split('-').filter(Boolean)
        const language = lift[0] || 'en'
        const country = lift[1] || 'GL'

        const locale = `${language}-${country}`

        let storyBlok: StoryBlokResponseType | undefined
        try {
          storyBlok = await sbService.get(`cdn/stories/${locale}/${slug}`, {})
        } catch (error) {
          response.status(500)
          console.error(
            `🚀 ~ file: index.ts ~ line 49 ~ server.get ~ error`,
            error,
          )

          return app.render(request, response, '/_error', {
            message: 'Something went wrong',
          })
        }

        context.setStoryBlok(storyBlok, payload.slug)

        context.setLocale(locale)
        return app.render(request, response, '/builder', {
          ...(request.query as { [key: string]: string }),
        })
      },
    )

    server.get('*', async (request, response) => {
      return handle(request, response)
    })

    server.listen(PORT, () => {
      console.info(`🚀> Ready on http://localhost:${PORT}`)
    })
  }
}

export { setup }
