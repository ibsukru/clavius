import React from 'react'
import Markdown from 'react-markdown'
import { HowToWatchType } from '.'

const HowToWatch: HowToWatchType = props => {
  const { list, title } = props

  const icons = {
    'tv-and-streaming': '📺',
    'mobile-and-tablet': '📱',
    computer: '🖥️',
    'game-consoles': '🕹️',
  }

  return (
    <section className="howToWatch">
      <style jsx>{`
        .howToWatch {
          padding: 50px 0;
          margin: 0 auto;
          color: var(--background);
          background-color: var(--shade-7);
          text-align: center;
          border-top: 2px dashed var(--shade-6);
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
          display: flex;
          gap: 20px;
          flex-direction: column;
        }

        @media (min-width: 760px) {
          .howToWatch-steps {
            flex-direction: row;
          }
        }

        .howToWatch-step {
          background-color: var(--foreground);
          margin: 0 auto;
          padding: 10px;
          border-radius: var(--radius);
          flex: 1 1 0px;
          display: flex;
          flex-direction: column;
        }

        .howToWatch-number {
          display: block;
          text-align: center;
        }

        .howToWatch-description {
          font-size: 0.875rem;
          flex: 1;
          margin-bottom: 30px;
        }
        .howToWatch-type {
          font-size: 3.325rem;
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
                <span className="howToWatch-type">{icons[item.type]}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowToWatch
