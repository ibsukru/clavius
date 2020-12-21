import { Error } from 'clavius.lib/src/components'
import { NextPage } from 'next'

const ErrorPage: NextPage<{ statusCode?: number }> = ({ statusCode }) => {
  return <Error statusCode={statusCode || 500} />
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
