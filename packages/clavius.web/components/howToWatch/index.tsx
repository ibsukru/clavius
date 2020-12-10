import HowToWatchComponent from './howToWatch'
import inject from './howToWatch.storyblok'
import { TableBlokType, InjectStoryBlok } from '..'

export type HowToWatchType = React.FunctionComponent<{
  list?: Array<{
    type: string
    title: string
    devices: string
  }>
  title: string
}>

export type HowToWatchStoryBlokType = InjectStoryBlok<
  HowToWatchType,
  {
    title: string
    platforms: TableBlokType
  }
>

export default inject(HowToWatchComponent)
