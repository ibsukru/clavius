import StoryblokClient from 'storyblok-js-client'

const storyblokService = () => {
  const devMode = true
  const token = 'vmYW2YhFe70g4j3htm42swtt' // testing preview... load this from env
  const query = {}

  const client = new StoryblokClient({
    accessToken: token,
    cache: {
      clear: 'auto',
      type: 'memory',
    },
  })

  const getQuery = param => {
    return query[param]
  }

  return {
    getCacheVersion: () => {
      return client.cacheVersion
    },
    get: (slug, params = {}) => {
      if (
        getQuery('_storyblok') ||
        devMode ||
        (typeof window !== 'undefined' && window.storyblok)
      ) {
        params.version = 'draft'
      }

      if (
        typeof window !== 'undefined' &&
        typeof window.StoryblokCacheVersion !== 'undefined'
      ) {
        params.cv = window.StoryblokCacheVersion
      }

      return client.get(slug, params)
    },
  }
}

export default storyblokService
