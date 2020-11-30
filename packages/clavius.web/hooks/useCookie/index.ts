import useCookie from './useCookie'

export type setCookieType = (
  value: string,
  options?: Cookies.CookieAttributes,
) => void

export type useCookieType = (
  key: string,
  initialValue?: string,
) => [string | undefined, setCookieType]

export default useCookie
