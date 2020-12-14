import { usePersonaContext } from '../../hooks'
import classNames from 'classnames'
import Select from '../common/select'

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
        select {
          appearance: none;
          text-rendering: auto;
          width: 100%;
          border-radius: var(--geist-radius);
          border: none;
          background: none;
          padding: 0;
          padding-right: 0px;
          outline: none;

          color: var(--secondary);
          font-size: 0.875rem;
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
      <span className="personas-select">
        <Select
          options={['default', 'boxing', 'basketball', 'cycling'].map(item => {
            const active = favoriteSport.toUpperCase() === item.toUpperCase()
            const value = item.toUpperCase()
            return {
              text: icons[item],
              value,
              selected: active,
            }
          })}
        />
      </span>

      <span className="personas-locale">
        <Select
          options={['nl-NL', 'en-NL'].map(locale => {
            return {
              text: locale,
              value: locale,
            }
          })}
        />
      </span>
    </div>
  )
}

export default Personas
