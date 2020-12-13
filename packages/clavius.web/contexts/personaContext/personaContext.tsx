import { createContext, useState } from 'react'
import { PersonaContextProviderType, PersonaContextType, personasType } from '.'
import getPersonaVariantKey from './getPersonaVariantKey'

export const PersonaContext = createContext<PersonaContextType>({
  personas: {} as { PERSONA_FAVORITE_SPORTS: [] },
  favoriteSports: ['DEFAULT'],
  favoriteSport: 'DEFAULT',
  key: 'DEFAULT',
})

export const PersonaContextProvider: PersonaContextProviderType = ({
  children,
  ...rest
}) => {
  const [personas] = useState<personasType>(rest.personas)

  const { PERSONA_FAVORITE_SPORTS: favoriteSports } = personas

  const [favoriteSport] = favoriteSports

  const value: PersonaContextType = {
    personas,
    favoriteSports,
    favoriteSport,
    key: getPersonaVariantKey(favoriteSport),
  }

  return (
    <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>
  )
}
