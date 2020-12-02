import Markdown from 'react-markdown'

const HeadlinePricing = props => {
  const { header, footer, features, signup } = props.pricing

  return (
    <section>
      <style jsx>{`
        section {
          background-color: var(--shade-2);
          display: inline-block;
          padding: 20px;
          border-radius: var(--radius);
        }
        header {
          font-size: 1.475rem;
          font-weight: bold;
          line-height: 1rem;
        }

        .features {
          margin: 20px 0;
          font-size: 0.875rem;
        }

        footer {
          font-size: 0.875rem;
        }

        .features > :global(ul) {
          margin: 0;
          padding: 0;
          list-style-position: inside;
        }

        .signup {
          display: block;
          color: var(--foreground);
          background-color: var(--accent-5);
          padding: 10px;
          font-weight: bold;
          font-size: 0.875rem;
          text-align: center;
          font-size: 1.325rem;
          margin: 0 0 20px 0;
          border-radius: var(--radius);
        }
        .signup:hover {
          background-color: var(--accent-6);
        }
      `}</style>
      <header>{header}</header>
      <div className="features">
        <Markdown source={features} />
      </div>
      <a href="/signup" className="signup">
        {signup}
      </a>
      <footer>{footer}</footer>
    </section>
  )
}

export default HeadlinePricing
