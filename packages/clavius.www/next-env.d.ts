/// <reference types="next" />
/// <reference types="next/types/global" />
import 'react'

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    // https://github.com/ryansolid/solid/issues/169
    jsx?: boolean
    global?: boolean
  }
}
