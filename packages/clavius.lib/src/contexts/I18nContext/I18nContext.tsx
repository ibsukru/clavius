import { createContext, useState } from 'react'
import { I18nContextContextType, I18nContextContextProviderType } from '.'

export const I18nContextContext = createContext<I18nContextContextType>({
  locale: 'en',
})

export const I18nContextContextProvider: I18nContextContextProviderType = ({
  children,
  ...rest
}) => {
  const [locale] = useState<string>(rest.locale)

  const value: I18nContextContextType = {
    locale,
  }

  return (
    <I18nContextContext.Provider value={value}>
      {children}
    </I18nContextContext.Provider>
  )
}
