import SbEditable from 'storyblok-react'
import { DynamicComponent } from '..'

const WhatIsOn = props => {
  const { blok } = props
  const { title } = blok

  return (
    <SbEditable content={blok}>
      <section className="whatIsOn">
        <style jsx>{`
          .whatIsOn {
            margin: 30px auto;
            max-width: 80%;
          }

          .whatIsOn-header {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            margin: 20px 0 30px 0;
          }

          .whatIsOn-events {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }

          .whatIsOn-event {
            flex: 0 0 32.33%;
          }
        `}</style>

        <header className="whatIsOn-header">{title}</header>
        <ul className="whatIsOn-events">
          {blok.events?.map(nestedBlok => (
            <li className="whatIsOn-event" key={nestedBlok._uid}>
              <DynamicComponent blok={nestedBlok} />
            </li>
          ))}
        </ul>
      </section>
    </SbEditable>
  )
}

export default WhatIsOn
