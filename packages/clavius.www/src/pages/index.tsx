import React from 'react'

import { storyBlokService } from 'clavius.lib/src'
import { StoryBlokResponseType } from 'clavius.lib/src/contexts/storyBlokContext'
import { Page } from 'apollo.builder/src/components'

const Index: React.FunctionComponent<{
  storyBlok: StoryBlokResponseType
}> = props => {
  const { storyBlok } = props
  return <Page storyBlok={storyBlok} />
}

export async function getStaticProps({ locale }) {
  let storyBlok: StoryBlokResponseType | undefined

  try {
    storyBlok = await storyBlokService().get(`cdn/stories/${locale}/home`, {})
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

export default Index
