import React, { Fragment } from 'react'
import App from 'next/app'

import { resetStyles, htmlStyles, nprogressStyles } from '../styles'
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
        <style jsx global>
          {nprogressStyles}
        </style>
        <Component {...pageProps} />
      </Fragment>
    )
  }
}

export default MyApp
