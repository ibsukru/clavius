import { EditableComponent } from '..'
import Markdown from 'react-markdown'

const WhatIsIncluded = props => {
  const { blok } = props
  const { title, subtitle, features, signup } = blok

  return (
    <EditableComponent content={blok}>
      <section className="whatIsIncluded">
        <style jsx>{`
          .whatIsIncluded {
            padding: 30px 0;
            margin: 0 auto;
            color: var(--background);
            background-color: var(--shade-7);
          }

          .whatIsIncluded-header {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            margin: 20px 0 30px 0;
          }

          .whatIsIncluded-features {
            width: 400px;
            background-color: var(--foreground);
            margin: 0 auto;
            padding: 10px;
            border-radius: var(--radius);
          }

          .whatIsIncluded-features :global(ul) {
            margin: 0;
            font-size: 0.875rem;
            padding: 0;
            padding-left: 40px;
          }

          .whatIsIncluded-features :global(ul > li) {
            margin: 0 0 20px 0;
          }

          .whatIsIncluded-features-subtitle {
            text-align: center;
            margin-bottom: 10px;
            padding: 15px 0;
          }

          .whatIsIncluded-features-signup {
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

          .whatIsIncluded-features-signup:hover {
            background-color: var(--accent-6);
          }
        `}</style>
        <header className="whatIsIncluded-header">{title}</header>
        <div className="whatIsIncluded-features">
          <div className="whatIsIncluded-features-subtitle">
            <Markdown source={subtitle} />
          </div>
          <Markdown source={features} />

          <a href="/" className="whatIsIncluded-features-signup">
            {signup}
          </a>
        </div>
      </section>
    </EditableComponent>
  )
}

export default WhatIsIncluded
