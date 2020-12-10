import React, { Fragment } from 'react'
import { Page } from '../components'
import { StoryBlokContextProvider } from '../contexts'
import { storyBlokType } from '../contexts/storyBlokContext'
import { NextPage } from 'next'
import { storyBlokService } from 'clavius.lib/src'

const Index: NextPage<{
  storyBlok: storyBlokType | null
}> = props => {
  const { storyBlok } = props

  if (!storyBlok)
    return (
      <Fragment>Something not correct, api response is not there.</Fragment>
    )

  return (
    <StoryBlokContextProvider storyBlok={storyBlok}>
      <Page />
    </StoryBlokContextProvider>
  )
}

Index.getInitialProps = async ({ query }) => {
  const sbService = storyBlokService()

  try {
    return {
      storyBlok: await sbService.get(`cdn/stories/${query.slug || 'home'}`, {}),
    }
  } catch (error) {
    console.log(`ERROR`, error)
  }

  return {
    storyBlok: null,
  }
}

export default Index
