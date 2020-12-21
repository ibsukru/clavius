import inject from './getStarted'

import { TableBlokType, InjectStoryBlok } from 'clavius.lib/src/components'
import { GetStarted } from 'apollo.lib/src/components'
import { GetStartedType } from 'apollo.lib/src/components/getStarted'

export type GetStartedStoryBlokType = InjectStoryBlok<
  GetStartedType,
  {
    title: string
    steps: TableBlokType
  }
>

export default inject(GetStarted)
