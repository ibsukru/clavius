import { InjectStoryBlok } from 'clavius.lib/src/components'
import inject from './footer'

import Footer from 'clavius.lib/src/components/footer/footer'
import { FooterType } from 'clavius.lib/src/components/footer'

type FooterStoryBlokPropType = {
  links: Array<{ key: string; value: string; _uid: string }>
}

export type FooterStoryBlokType = InjectStoryBlok<
  FooterType,
  FooterStoryBlokPropType
>

export default inject(Footer)
