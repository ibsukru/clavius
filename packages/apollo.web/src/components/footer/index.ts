import { InjectStoryBlok } from 'clavius.lib/src/components'
import inject from './footer.storyblok'

import Footer from 'clavius.lib/src/components/footer/footer'

type FooterStoryBlokPropType = {
  links: Array<{ key: string; value: string; _uid: string }>
}

type FooterPropType = FooterStoryBlokPropType

export type FooterType = React.FunctionComponent<FooterPropType>

export type FooterStoryBlokType = InjectStoryBlok<
  FooterType,
  FooterStoryBlokPropType
>

export default inject(Footer)
