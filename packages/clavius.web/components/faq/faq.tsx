import { Fragment, useState } from 'react'

type componentType = { component: string }
const FAQ: React.FunctionComponent<{
  blok: componentType & {
    questions: Array<
      componentType & {
        panels: Array<{
          title: string
          content: string
          _uid: string
        }>
      }
    >
  }
}> = props => {
  const [index, setIndex] = useState<number | undefined>()

  const [accordion] = props.blok.questions

  return (
    <Fragment>
      <style jsx>{`
        .faq {
          max-width: 60%;
          margin: 20px auto;
        }

        .faq-title {
          cursor: pointer;
          font-weight: bold;
          margin: 5px 0;
        }

        .faq-description {
          margin: 0 0 20px 0;
          font-size: 0.875rem;
          display: none;
        }

        .faq-description.active {
          display: block;
        }
      `}</style>
      <dl className="faq">
        {accordion.panels.map((panel, i) => {
          return (
            <Fragment key={panel._uid}>
              <dt
                onClick={() => {
                  setIndex(i === index ? undefined : i)
                }}
                className="faq-title"
              >
                {panel.title}
              </dt>
              <dd className={`faq-description ${index === i ? 'active' : ''}`}>
                {panel.content}
              </dd>
            </Fragment>
          )
        })}
      </dl>
    </Fragment>
  )
}

export default FAQ
