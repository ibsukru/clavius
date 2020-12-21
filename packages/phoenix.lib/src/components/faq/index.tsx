import Faq from './faq'

export type FaqType = React.FunctionComponent<{
  questions: Array<{
    panels: Array<{
      title: string
      content: string
      _uid: string
    }>
  }>
}>

export default Faq
