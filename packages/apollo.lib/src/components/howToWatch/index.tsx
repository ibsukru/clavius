import HowToWatchComponent from './howToWatch'

export type HowToWatchType = React.FunctionComponent<{
  list?: Array<{
    type: string
    title: string
    devices: string
  }>
  title: string
}>

export default HowToWatchComponent
