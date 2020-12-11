import React, { Fragment } from 'react'
import App from 'next/app'

import { resetStyles, htmlStyles } from '../styles'
import { StoryBlokResponseType } from '../contexts/storyBlokContext'

class MyApp extends App<{ storyBlock: StoryBlokResponseType }> {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <style jsx global>
          {resetStyles}
        </style>
        <style jsx global>
          {htmlStyles}
        </style>
        <Component {...pageProps} />
      </Fragment>
    )
  }
}

export default MyApp
