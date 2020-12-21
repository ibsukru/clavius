import { InjectStoryBlok } from '..'
import Faq from './faq'
import inject from './faq.storyblok'

export type FaqType = React.FunctionComponent<{
  questions: Array<{
    panels: Array<{
      title: string
      content: string
      _uid: string
    }>
  }>
}>

export type FaqStoryBlokType = InjectStoryBlok<
  FaqType,
  {
    questions: Array<{
      panels: Array<{
        title: string
        content: string
        _uid: string
      }>
    }>
  }
>

export default inject(Faq)
