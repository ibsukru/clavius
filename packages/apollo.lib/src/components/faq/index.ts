import { InjectStoryBlok } from 'clavius.lib/src/components'
import { Faq } from 'phoenix.lib/src/components'
import inject from './faq'

export type FaqStoryBlokType = InjectStoryBlok<
  typeof Faq,
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
