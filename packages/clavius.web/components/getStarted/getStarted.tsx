import React from 'react'
import SbEditable, { SbEditableContent } from 'storyblok-react'
import Markdown from 'react-markdown'

const GetStarted: React.FunctionComponent<{
  blok: SbEditableContent & {
    title: string
    steps: {
      tbody: { body: { value: string; _uid: string }[] }[]
      thead: { value: string }[]
    }
  }
}> = props => {
  const { blok } = props
  const { steps, title } = blok
  const { tbody, thead } = steps

  const list = thead.map((item, index) => {
    const body = tbody[0].body[index]
    return {
      title: item.value,
      description: body.value,
      key: body._uid,
    }
  })

  return (
    <SbEditable content={blok}>
      <section className="getStarted">
        <style jsx>{`
          .header {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            margin: 0 0 30px 0;
          }

          .getStarted {
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

        <div className="wrapper">
          <header className="header">{title}</header>
          <div className="steps">
            {list.map((item, index) => {
              return (
                <div className="step" key={item.key}>
                  <header className="stepHeader">
                    <span className="number">{index + 1}.</span>
                    {item.title}
                  </header>
                  <div className="description">
                    <Markdown source={item.description} />
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

export default GetStarted
