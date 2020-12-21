const Error: React.FunctionComponent<{ statusCode: number }> = ({
  statusCode,
}) => {
  const message = (() => {
    if (statusCode === 404) {
      return 'Not found'
    }

    if (statusCode === 401) {
      return 'Not authorized'
    }

    return statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'
  })()

  return (
    <div className="error">
      <style jsx>{`
        .error {
          padding: 20px;
          text-align: center;
        }

        .error-title {
          background-color: var(--foreground);
          color: var(--background);
          display: inline-block;
          padding: 5px 15px;
          font-size: 9.25rem;
          margin-top: 20px;
        }

        .error-message {
          margin-top: 10px;
          display: block;
          text-align: center;
          align-items: center;
        }
      `}</style>
      <h1 className="error-title">{statusCode}</h1>
      <p className="error-message">{message}</p>
    </div>
  )
}

export default Error
