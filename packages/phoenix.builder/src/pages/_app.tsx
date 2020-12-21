import React, { Fragment } from 'react'
import App, { AppContext } from 'next/app'
import { IncomingMessage } from 'http'

import { resetStyles, htmlStyles } from '../styles'
import {
  StoryBlokContextProvider,
  I18nContextContextProvider,
} from 'clavius.lib/src/contexts'

import { StoryBlokResponseType } from 'clavius.lib/src/contexts/storyBlokContext'
import withContext from 'clavius.lib/src/withContext'

class MyApp extends App<{ storyBlok: StoryBlokResponseType; locale: string }> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const request = ctx.req as IncomingMessage

    const context = withContext({ request })
    const storyBlok = context.getStoryBlok('help')
    const locale = context.getLocale()

    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
      storyBlok,
      locale,
    }
  }

  render() {
    const { Component, pageProps, storyBlok, locale } = this.props

    return (
      <Fragment>
        <style jsx global>
          {resetStyles}
        </style>
        <style jsx global>
          {htmlStyles}
        </style>
        <I18nContextContextProvider locale={locale}>
          <StoryBlokContextProvider storyBlok={storyBlok}>
            <Component {...pageProps} />
          </StoryBlokContextProvider>
        </I18nContextContextProvider>
      </Fragment>
    )
  }
}

export default MyApp
