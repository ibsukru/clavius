import React, { Fragment } from 'react'
import App, { AppContext } from 'next/app'

import { resetStyles, htmlStyles } from '../styles'
import {
  StoryBlokContextProvider,
  StoryBlokResponseType,
} from '../contexts/storyBlokContext'

class MyApp extends App<{ storyBlok: StoryBlokResponseType }> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const request = ctx.req

    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
      storyBlok: request['storyblok'],
    }
  }

  render() {
    const { Component, pageProps, storyBlok } = this.props

    return (
      <Fragment>
        <style jsx global>
          {resetStyles}
        </style>
        <style jsx global>
          {htmlStyles}
        </style>
        <StoryBlokContextProvider storyBlok={storyBlok}>
          <Component {...pageProps} />
        </StoryBlokContextProvider>
      </Fragment>
    )
  }
}

export default MyApp
