import { TableBlokType, InjectStoryBlok } from '..'
import GetStarted from './getStarted'
import inject from './getStarted.storyblok'

export type GetStartedStoryBlokType = InjectStoryBlok<
  GetStartedType,
  {
    title: string
    steps: TableBlokType
  }
>

export type GetStartedType = React.FunctionComponent<{
  title: string
  steps?: Array<{ title: string; description: string }>
}>

export default inject(GetStarted)
