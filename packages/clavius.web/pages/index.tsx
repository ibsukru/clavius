import React, { Fragment, useState } from 'react'
import { Layout, Page } from '../components'
import { StoryBlokContextProvider } from '../contexts'
import { storyBlokType } from '../contexts/storyBlokContext'
import { storyBlokService } from '../lib'

import { NextPage } from 'next'

const Index: NextPage<{
  storyBlok?: storyBlokType
}> = props => {
  const [state] = useState<storyBlokType | undefined>(props.storyBlok)

  if (!state)
    return (
      <Fragment>Something not correct, api response is not there.</Fragment>
    )

  return (
    <StoryBlokContextProvider storyBlok={state}>
      <Layout>
        <Page />
      </Layout>
    </StoryBlokContextProvider>
  )
}

Index.getInitialProps = async ({ query }) => {
  try {
    return {
      storyBlok: await storyBlokService().get(
        `cdn/stories/${query.slug || 'home'}`,
        {},
      ),
    }
  } catch (error) {
    console.log(`ERROR`, error)
  }

  return {}
}

export default Index
