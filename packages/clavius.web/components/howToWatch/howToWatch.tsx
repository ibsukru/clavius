import React from 'react'
import Markdown from 'react-markdown'
import style from './howToWatch.styles'

type HowToWatchPropType = {
  list?: Array<{
    type: string
    title: string
    devices: string
  }>
  title: string
}

const HowToWatch: React.FunctionComponent<HowToWatchPropType> = props => {
  const { list, title } = props

  return (
    <section className="howToWatch">
      <style jsx>{style}</style>
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
  )
}

export default HowToWatch
