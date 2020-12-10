import HowToWatchComponent from './howToWatch'
import inject from './howToWatch.storyblok'
import { TableBlokType, WithStoryBlok } from '..'

export type HowToWatchType = React.FunctionComponent<{
  list?: Array<{
    type: string
    title: string
    devices: string
  }>
  title: string
}>

export type HowToWatchStoryBlokType = WithStoryBlok<
  HowToWatchType,
  {
    title: string
    platforms: TableBlokType
  }
>

export default inject(HowToWatchComponent)
