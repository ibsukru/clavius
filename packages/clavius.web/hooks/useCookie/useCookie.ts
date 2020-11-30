import Cookies from 'js-cookie'

import { useState } from 'react'
import { useCookieType, setCookieType } from '.'

const useCookie: useCookieType = (key, initialValue) => {
  const [item, setInnerValue] = useState(() => {
    return Cookies.get(key) || initialValue
  })

  const setValue: setCookieType = (value, options) => {
    setInnerValue(value)
    Cookies.set(key, value, options)
  }

  return [item, setValue]
}

export default useCookie
