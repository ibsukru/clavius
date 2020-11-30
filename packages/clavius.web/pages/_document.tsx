import Document, { Head, Main, NextScript } from 'next/document'
import Cookies from 'js-cookie'

export default class MyDocument extends Document {
  render() {
    const theme = Cookies.get('theme')

    return (
      <html lang="en" className={theme || 'dark'}>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
