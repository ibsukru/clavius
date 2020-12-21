import * as React from 'react'
import { IconType } from '..'
import { withSize } from '../shared'

const CheckIcon: IconType = props => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default withSize(CheckIcon)
