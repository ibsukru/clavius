import React from 'react'
import SbEditable, { SbEditableContent } from 'storyblok-react'
import Markdown from 'react-markdown'

const HowToWatch: React.FunctionComponent<{
  blok: SbEditableContent & {
    title: string
    platforms: {
      tbody: { body: { value: string; _uid: string }[] }[]
      thead: { value: string }[]
    }
  }
}> = props => {
  const { blok } = props
  const { platforms, title } = blok
  const { tbody } = platforms

  const list = tbody.reduce<{ type: string; title: string; devices: string }[]>(
    (acc, item) => {
      const [type, title, devices] = item.body
      return acc.concat({
        type: type.value,
        title: title.value,
        devices: devices.value,
      })
    },
    [],
  )

  return (
    <SbEditable content={blok}>
      <section className="howToWatch">
        <style jsx>{`
          .header {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            margin: 0 0 30px 0;
          }

          .howToWatch {
            padding: 30px 0;
            margin: 0 auto;
            color: var(--background);
            background-color: var(--shade-7);
            text-align: center;
          }

          .wrapper {
            max-width: 60%;
            margin: 0 auto;
          }

          .stepHeader {
            font-weight: bold;
            margin-bottom: 10px;
          }

          .steps {
            margin: 0 auto;
            padding: 10px;
            display: flex;
            gap: 20px;
          }

          .step {
            background-color: var(--foreground);
            margin: 0 auto;
            padding: 10px;
            border-radius: var(--radius);
          }

          .number {
            display: block;
            text-align: center;
          }

          .description {
            font-size: 0.875rem;
          }
        `}</style>

        <div className="howToWatch-wrapper">
          <header className="header">{title}</header>
          <div className="steps">
            {list.map((item, index) => {
              return (
                <div className="step" key={item.type}>
                  <header className="stepHeader">
                    <span className="number">{index + 1}.</span>
                    {item.title}
                  </header>
                  <div className="description">
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
