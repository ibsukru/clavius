import React, { Fragment } from 'react'
import { Page } from '../components'
import { StoryBlokContextProvider } from '../contexts'
import { StoryBlokResponseType } from '../contexts/storyBlokContext'
import { NextPage } from 'next'
import { storyBlokService } from 'clavius.lib/src'

const Builder: NextPage<{
  storyBlok: StoryBlokResponseType | null
}> = props => {
  console.log(`🚀 ~ file: builder.tsx ~ line 11 ~ props`, props)
  return <Page />
}

export default Builder
