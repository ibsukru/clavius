import { IconType } from '..'
import { withSize } from '../shared'

const ScrollIcon: IconType = props => {
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
      <path d="M17 8.517L12 3 7 8.517m0 6.963l5 5.517 5-5.517" />
    </svg>
  )
}

export default withSize(ScrollIcon)
