import Document, { Head, Main, NextScript, Html } from 'next/document'
import Cookies from 'js-cookie'
import flushToReact from 'styled-jsx/server'

export default class MyDocument extends Document {
  render() {
    const theme = Cookies.get('theme')

    return (
      <Html lang="en" className={theme || 'dark'}>
        <Head>
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,600;1,400;1,600&display=swap"
            rel="stylesheet"
          />
          {flushToReact()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
