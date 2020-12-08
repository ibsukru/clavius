import React from 'react'
import SbEditable, { SbEditableContent } from 'storyblok-react'
import Markdown from 'react-markdown'

const HowToWatch: React.FunctionComponent<{
  blok: SbEditableContent & {
    title: string
    platforms: {
      tbody?: { body: Array<{ value: string; _uid: string }> }[]
    }
  }
}> = props => {
  const { blok } = props
  const { platforms, title } = blok
  const { tbody } = platforms

  const list = tbody?.reduce<
    { type: string; title: string; devices: string }[]
  >((acc, item) => {
    if (!item || item.body) return acc

    const { body } = item

    if (!Array.isArray(body)) return acc

    return (acc || []).concat({
      type: body[0]?.value,
      title: body[1]?.value,
      devices: body[2]?.value,
    })
  }, undefined)

  return (
    <SbEditable content={blok}>
      <section className="howToWatch">
        <style jsx>{`
          .howToWatch {
            padding: 30px 0;
            margin: 0 auto;
            color: var(--background);
            background-color: var(--shade-7);
            text-align: center;
          }

          .howToWatch-header {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            margin: 0 0 30px 0;
          }

          .howToWatch-wrapper {
            max-width: 60%;
            margin: 0 auto;
          }

          .howToWatch-stepHeader {
            font-weight: bold;
            margin-bottom: 10px;
          }

          .howToWatch-steps {
            margin: 0 auto;
            padding: 10px;
            display: flex;
            gap: 20px;
            flex-direction: column;
          }

          @media (min-width: 2760px) {
            .howToWatch-steps {
              flex-direction: row;
            }
          }

          .howToWatch-step {
            background-color: var(--foreground);
            margin: 0 auto;
            padding: 10px;
            border-radius: var(--radius);
          }

          .howToWatch-number {
            display: block;
            text-align: center;
          }

          .howToWatch-description {
            font-size: 0.875rem;
          }
        `}</style>

        <div className="howToWatch-wrapper">
          <header className="howToWatch-header">{title}</header>
          <div className="howToWatch-steps">
            {list?.map((item, index) => {
              return (
                <div className="howToWatch-step" key={item.type}>
                  <header className="howToWatch-stepHeader">
                    <span className="howToWatch-number">{index + 1}.</span>
                    {item.title}
                  </header>
                  <div className="howToWatch-description">
                    <Markdown source={item.devices} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </SbEditable>
  )
}

export default HowToWatch
