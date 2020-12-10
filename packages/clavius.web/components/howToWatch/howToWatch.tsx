import React from 'react'
import Markdown from 'react-markdown'
import { HowToWatchType } from '.'
import style from './howToWatch.styles'

const HowToWatch: HowToWatchType = props => {
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
