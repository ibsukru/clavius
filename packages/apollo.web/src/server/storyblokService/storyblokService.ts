import StoryblokClient from 'storyblok-js-client'
import { token } from './index'

const storyblokService = () => {
  const devMode = process.env.NODE_ENV !== 'production'

  const client = new StoryblokClient({
    accessToken: token,
    cache: {
      clear: 'auto',
      type: 'memory',
    },
  })

  return {
    getCacheVersion: () => {
      return client.cacheVersion
    },
    get: (slug, params = {}) => {
      const sb = typeof window !== 'undefined' ? window.storyblok : undefined
      const cv =
        typeof window !== 'undefined' ? window.StoryblokCacheVersion : undefined

      return client.get(slug, {
        ...params,
        cv,
        version: devMode || sb ? 'draft' : undefined,
      })
    },
  }
}

export default storyblokService
