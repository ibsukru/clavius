import inject from './faq'

import { InjectStoryBlok } from '..'
import { Faq } from 'phoenix.lib/src/components'

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
