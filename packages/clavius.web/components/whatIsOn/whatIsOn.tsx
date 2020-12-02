import SbEditable from 'storyblok-react'
import { DynamicComponent } from '..'

const WhatIsOn = props => {
  const { blok } = props
  const { title } = blok

  return (
    <SbEditable content={blok}>
      <section>
        <style jsx>{`
          ul {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }
          li {
            flex: 0 0 32.33%;
          }
          section {
            margin: 30px auto;
            max-width: 80%;
          }
          header {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            margin: 20px 0 30px 0;
          }
        `}</style>

        <header>{title}</header>
        <ul>
          {blok.events?.map(nestedBlok => (
            <li key={nestedBlok._uid}>
              <DynamicComponent blok={nestedBlok} />
            </li>
          ))}
        </ul>
      </section>
    </SbEditable>
  )
}

export default WhatIsOn
