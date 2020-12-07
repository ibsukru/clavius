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
        dd {
          margin: 0 0 20px 0;
          font-size: 0.875rem;
          display: none;
        }

        dd.active {
          display: block;
        }

        dt {
          cursor: pointer;
          font-weight: bold;
          margin: 5px 0;
        }
        dl {
          max-width: 60%;
          margin: 20px auto;
        }
      `}</style>
      <dl>
        {accordion.panels.map((panel, i) => {
          return (
            <Fragment key={panel._uid}>
              <dt
                onClick={() => {
                  setIndex(i === index ? undefined : i)
                }}
              >
                {panel.title}
              </dt>
              <dd className={index === i ? 'active' : ''}>{panel.content}</dd>
            </Fragment>
          )
        })}
      </dl>
    </Fragment>
  )
}

export default FAQ
