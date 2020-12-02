import SbEditable from 'storyblok-react'
import Markdown from 'react-markdown'

const WhatIsIncluded = props => {
  const { blok } = props
  const { title, subtitle, features, signup } = blok

  return (
    <SbEditable content={blok}>
      <section>
        <style jsx>{`
          ul {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            text-align: center;
          }
          li {
            flex: 0 0 32.33%;
          }
          section {
            padding: 30px 0;
            margin: 0 auto;
            color: var(--background);
            background-color: var(--shade-7);
          }

          header {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            margin: 20px 0 30px 0;
          }

          .features {
            width: 400px;
            background-color: var(--foreground);
            margin: 0 auto;
            padding: 10px;
            border-radius: var(--radius);
          }

          .features :global(ul) {
            margin: 0;
            font-size: 0.875rem;
            padding: 0;
            padding-left: 40px;
          }

          .features :global(ul > li) {
            margin: 0 0 20px 0;
          }
          .subtitle {
            text-align: center;
            margin-bottom: 10px;
            padding: 15px 0;
          }

          .signup {
            display: block;
            color: var(--foreground);
            background-color: var(--background);
            padding: 10px;
            font-weight: bold;
            font-size: 0.875rem;
            text-align: center;
            margin: 0 0 20px 0;
            border-radius: var(--radius);
          }
          .signup:hover {
            background-color: var(--accent-6);
          }
        `}</style>

        <header>{title}</header>
        <div className="features">
          <div className="subtitle">
            <Markdown source={subtitle} />
          </div>
          <Markdown source={features} />

          <a href="/" className="signup">
            {signup}
          </a>
        </div>
      </section>
    </SbEditable>
  )
}

export default WhatIsIncluded
