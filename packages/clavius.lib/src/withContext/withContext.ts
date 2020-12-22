import { IncomingMessage } from 'http'
import { withContextType } from '.'

const withContext: (ctx: { request: IncomingMessage }) => withContextType = (
  ctx,
  keys = {
    storyBlok: 'storyblok',
    locale: 'locale',
  },
) => ({
  get: () => {
    const request = ctx.request
    return {
      storyBlok: request[keys.storyBlok],
      locale: request[keys.locale],
    }
  },
  set: ({ storyBlok, locale }) => {
    const request = ctx.request
    if (!request) {
      return
    }

    request[keys.storyBlok] = storyBlok
    request[keys.locale] = locale
  },
  setStoryBlok: (storyBlok, key) => {
    const request = ctx.request
    if (!request) {
      return
    }

    request[`${key}.storyblok`] = storyBlok
  },
  getStoryBlok: key => {
    const request = ctx.request
    if (!request) {
      return
    }

    return request[`${key}.storyblok`]
  },
  setLocale: locale => {
    const request = ctx.request

    request['locale'] = locale
  },
  getLocale: () => {
    const request = ctx.request

    return request['locale']
  },
})

export default withContext
