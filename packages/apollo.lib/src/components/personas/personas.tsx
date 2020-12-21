import classNames from 'classnames'
import usePersonaContext from 'clavius.lib/src/hooks/usePersonaContext'

const Personas: React.FunctionComponent<{ title?: string; size?: string }> = ({
  title,
  size,
}) => {
  const { favoriteSport } = usePersonaContext()

  const icons = {
    basketball: '🏀',
    cycling: '🚴‍♂️',
    boxing: '🥊',
    default: '🍺',
  }

  if (!favoriteSport) return null

  return (
    <div className="personas">
      <style jsx>{`
        .personas {
          display: flex;
          align-items: center;
        }
        .personas-persona {
          margin: 0 10px;
          opacity: 0.5;
          font-size: ${size || '1.6rem'};
        }
        .personas-persona:hover {
          opacity: 1;
        }
        .personas-persona.active {
          opacity: 1;
          font-size: ${size || '1.6rem'};
        }
        .personas-hint:not(:empty) {
          margin-right: 20px;
        }
      `}</style>

      <span className="personas-hint">{title}</span>

      {['default', 'boxing', 'basketball', 'cycling'].map(item => {
        const active = favoriteSport.toUpperCase() === item.toUpperCase()

        return (
          <a
            key={item}
            title={`PERSONA_${item.toUpperCase()}_FAN`.replace(
              `PERSONA_DEFAULT_FAN`,
              'DEFAULT',
            )}
            className={classNames('personas-persona', {
              active,
            })}
            href={`/builder?PERSONA_FAVORITE_SPORTS=${item}`}
          >
            {icons[item]}
          </a>
        )
      })}
    </div>
  )
}

export default Personas
