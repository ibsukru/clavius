import { I18nContextContextProvider, I18nContextContext } from './I18nContext'

export type I18nContextContextType = {
  locale: string
}
export type I18nContextContextProviderType = React.FunctionComponent<{
  locale: string
}>

export { I18nContextContextProvider, I18nContextContext }
