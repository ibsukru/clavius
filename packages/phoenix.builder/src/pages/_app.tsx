import React, { Fragment } from 'react'
import App, { AppContext } from 'next/app'
import { IncomingMessage } from 'http'

import { resetStyles, htmlStyles } from '../styles'
import {
  StoryBlokContextProvider,
  I18nContextContextProvider,
} from 'clavius.lib/src/contexts'

import { StoryBlokResponseType } from 'clavius.lib/src/contexts/storyBlokContext'
import { storyBlokService } from 'clavius.lib/src'

class MyApp extends App<{ storyBlok: StoryBlokResponseType; locale: string }> {
  static async getInitialProps({ Component, ctx, router }: AppContext) {
    const sbService = storyBlokService()

    const storyBlokLocale = router.query['_storyblok_lang'] as
      | string
      | undefined

    const locale =
      storyBlokLocale?.replace('default', '').replace('undefined', '') ||
      router.locale ||
      'en-GL'

    const slug = 'help'

    const storyBlok = await (async () => {
      try {
        return await sbService.get(`cdn/stories/${locale}/${slug}`, {})
      } catch (error) {
        console.error(`🚀 ~ error`, error)
        throw error
      }
    })()

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
