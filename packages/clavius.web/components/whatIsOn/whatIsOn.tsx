import { DynamicComponent, EditableContent } from '..'

const WhatIsOn: React.FunctionComponent<{
  title: string
  events?: Array<EditableContent>
}> = props => {
  const { title, events } = props

  return (
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
          flex: 100%;
        }

        @media (min-width: 760px) {
          .whatIsOn-event {
            flex: 50%;
          }
        }

        @media (min-width: 1200px) {
          .whatIsOn-event {
            flex: 32.33%;
          }
        }
      `}</style>

      <header className="whatIsOn-header">{title}</header>
      <ul className="whatIsOn-events">
        {events?.map(nestedBlok => (
          <li className="whatIsOn-event" key={nestedBlok._uid}>
            <DynamicComponent blok={nestedBlok} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WhatIsOn
