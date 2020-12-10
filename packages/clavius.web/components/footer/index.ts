import { InjectStoryBlok } from '..'
import Footer from './footer'
import inject from './footer.storyblok'

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
