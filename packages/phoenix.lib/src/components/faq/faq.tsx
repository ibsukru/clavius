import { Fragment, useState } from 'react'
import { FaqType } from '.'

const Faq: FaqType = props => {
  const [index, setIndex] = useState<number | undefined>()

  const [accordion] = props.questions

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
          margin: 8px 0;
          border-bottom: 1px dotted var(--shade-6);
          padding: 5px 0;
          display: flex;
        }

        .faq-description {
          margin: 0 0 20px 0;
          font-size: 0.875rem;
          display: none;
        }

        .faq-description.active {
          display: block;
        }

        .faq-title-text {
          flex: 1;
        }
      `}</style>
      <dl className="faq">
        {accordion.panels.map((panel, i) => {
          const active = i === index

          return (
            <Fragment key={panel._uid}>
              <dt
                onClick={() => {
                  setIndex(active ? undefined : i)
                }}
                className="faq-title"
              >
                <div className="faq-title-text">{panel.title}</div>

                <span className="faq-title-expand">{active ? '👈' : '👇'}</span>
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

export default Faq
