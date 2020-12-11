import React, { Fragment } from 'react'
import { Page } from '../components'
import { StoryBlokContextProvider } from '../contexts'
import { StoryBlokResponseType } from '../contexts/storyBlokContext'
import { NextPage } from 'next'
import { storyBlokService } from 'clavius.lib/src'

const Index = () => {
  return (
    <a href="/builder">
      <style jsx>{`
        a {
          display: block;
          margin: 300px 50px;
          text-align: center;
        }
      `}</style>
      GO TO BUILDER 👷
    </a>
  )
}

export default Index
