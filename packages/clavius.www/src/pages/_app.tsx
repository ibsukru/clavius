import React, { Fragment } from 'react'
import App from 'next/app'

import { resetStyles, htmlStyles } from 'clavius.lib/src/components/styles'

class MyApp extends App<{}> {
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
