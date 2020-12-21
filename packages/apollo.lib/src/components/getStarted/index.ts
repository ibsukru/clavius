import GetStarted from './getStarted'

export type GetStartedType = React.FunctionComponent<{
  title: string
  steps?: Array<{ title: string; description: string }>
}>

export default GetStarted
