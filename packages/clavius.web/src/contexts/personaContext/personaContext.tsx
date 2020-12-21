import { useRouter } from 'next/dist/client/router'
import { createContext, useState } from 'react'
import { PersonaContextProviderType, PersonaContextType, personasType } from '.'
import { sportsType } from '..'
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
  const { query } = useRouter()

  const [personas] = useState<personasType>(rest.personas)

  // for testing purposes
  const overrides = (query.PERSONA_FAVORITE_SPORTS as string | undefined)
    ?.split(',')
    .map(item => item.toUpperCase()) as sportsType[] | undefined

  const favoriteSports = overrides || personas.PERSONA_FAVORITE_SPORTS

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
