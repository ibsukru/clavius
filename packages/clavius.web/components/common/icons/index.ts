import CheckIcon from './checkIcon'

export type IconDirectionType = 'up' | 'right' | 'down' | 'left'
export type IconAlignType = 'left' | 'right' | 'justify'

export type IconType = React.FunctionComponent<{
  width?: string | number
  height?: string | number
  size?: string | number
  filled?: boolean
  fill?: string
  color?: string
  direction?: IconDirectionType
  align?: IconAlignType
}>

export { CheckIcon }
