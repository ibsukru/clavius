import Footer from './footer'

type FooterPropType = {
  links: Array<{ key: string; value: string; _uid: string }>
}

export type FooterType = React.FunctionComponent<FooterPropType>

export default Footer
