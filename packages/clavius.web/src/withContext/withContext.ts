import { IncomingMessage } from 'http'
import { withContextType } from '.'

const withContext: (ctx: {
  request: IncomingMessage
}) => withContextType = ctx => ({
  get: () => {
    const request = ctx.request

    return {
      storyBlok: request['storyblok'],
      locale: request['locale'],
    }
  },
  set: ({ storyBlok, locale }) => {
    const request = ctx.request
    if (!request) {
      return
    }

    request['storyblok'] = storyBlok
    request['locale'] = locale
  },
})

export default withContext
