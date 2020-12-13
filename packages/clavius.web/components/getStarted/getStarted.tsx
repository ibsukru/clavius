import React from 'react'
import Markdown from 'react-markdown'
import { GetStartedType } from '.'

const GetStarted: GetStartedType = props => {
  const { steps, title } = props

  return (
    <section className="getStarted">
      <style jsx>{`
        .getStarted {
          padding: 50px 0;
          margin: 0 auto;
          color: var(--background);
          background-color: var(--shade-7);
          text-align: center;
          border-top: 2px dashed var(--shade-6);
        }

        .getStarted-header {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin: 0 0 30px 0;
        }

        .getStarted-wrapper {
          max-width: 60%;
          margin: 0 auto;
        }

        .getStarted-stepHeader {
          font-weight: bold;
          margin-bottom: 10px;
        }

        .getStarted-steps {
          margin: 0 auto;
          padding: 10px;
          display: flex;
          gap: 20px;
          flex-direction: column;
        }

        @media (min-width: 960px) {
          .getStarted-steps {
            flex-direction: row;
          }
        }

        .getStarted-step {
          background-color: var(--foreground);
          margin: 0 auto;
          padding: 10px;
          border-radius: var(--radius);
          width: 100%;
        }

        .getStarted-number {
          display: block;
          text-align: center;
        }

        .getStarted-description {
          font-size: 0.875rem;
        }
      `}</style>

      <div className="getStarted-wrapper">
        <header className="getStarted-header">{title}</header>
        <div className="getStarted-steps">
          {steps?.map((item, index) => {
            return (
              <div className="getStarted-step" key={item.title}>
                <header className="getStarted-stepHeader">
                  <span className="number">{index + 1}.</span>
                  {item.title}
                </header>
                <div className="getStarted-description">
                  <Markdown source={item.description} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GetStarted
