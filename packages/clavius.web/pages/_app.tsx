import React, { Fragment } from 'react'
import App from 'next/app'
import Cookies from 'js-cookie'

import { resetStyles, htmlStyles, nprogressStyles } from '../styles'
import { themeType } from '../contexts/themeContext'
import { ThemeContextProvider } from '../contexts'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const theme = (Cookies.get('theme') || 'dark') as themeType

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
        <ThemeContextProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeContextProvider>
      </Fragment>
    )
  }
}

export default MyApp
