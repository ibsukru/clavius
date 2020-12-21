import React from 'react'

import { storyBlokService } from 'clavius.lib'
import { StoryBlokResponseType } from 'clavius.web/src/contexts/storyBlokContext'
import { Page } from 'clavius.web/src/components'

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
    console.error(`🚀 ~ sssss: index.ts ~ line 49 ~ server.get ~ error`, error)
  } finally {
    return {
      props: {
        storyBlok,
      },
    }
  }
}

export default Index
