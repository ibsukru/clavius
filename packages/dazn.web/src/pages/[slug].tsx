import React from 'react'
import { storyBlokService } from 'apollo.lib'
import { StoryBlokResponseType } from 'apollo.web/src/contexts/storyBlokContext'
import { Page } from 'apollo.web/src/components'

const sbService = storyBlokService()

const Slug: React.FunctionComponent<{
  storyBlok: StoryBlokResponseType
}> = props => {
  const { storyBlok } = props
  return <Page storyBlok={storyBlok} />
}

export async function getStaticProps({ locale, ...rest }) {
  let storyBlok: StoryBlokResponseType | undefined

  try {
    storyBlok = await sbService.get(`cdn/stories/${locale}/home`, {})
  } catch (error) {
    console.error(`🚀 ~ error`, error)

    throw error
  }

  return {
    props: {
      storyBlok,
    },
  }
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const result = await locales.reduce<
    Promise<{
      paths: Array<{ params: { slug: string }; locale: string }>
      fallback: false
    }>
  >(
    async (result, locale) => {
      const acc = await result
      let storyBlok: StoryBlokResponseType | undefined

      try {
        storyBlok = await sbService.get(`cdn/stories/${locale}/home`, {})
      } catch (error) {
        console.error(`🚀 ~ error`, {
          error,
          locale,
        })

        return acc
      }

      const slug = storyBlok?.data?.story?.slug || 'home'

      return {
        ...acc,
        paths: acc.paths.concat({
          params: {
            slug,
          },
          locale,
        }),
      }
    },
    Promise.resolve({
      paths: [],
      fallback: false,
    }),
  )

  return result
}

export default Slug
