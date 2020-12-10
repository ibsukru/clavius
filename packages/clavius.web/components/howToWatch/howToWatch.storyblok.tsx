import SbEditable from 'storyblok-react'
import { TableBlokType, WithStoryBlok } from '..'
import HowToWatch from './howToWatch'

const HowToWatchStoryBlok: WithStoryBlok<
  typeof HowToWatch,
  {
    title: string
    platforms: TableBlokType
  }
> = Component => props => {
  const { blok } = props

  const { platforms, title } = blok
  const { tbody } = platforms

  const list = tbody.reduce<
    | Array<{
        type: string
        title: string
        devices: string
      }>
    | undefined
  >((acc, item) => {
    const { body } = item

    const { value: type } = body[0]
    const { value: title } = body[1]
    const { value: devices } = body[2]

    return [
      ...(acc || []),
      {
        type,
        title,
        devices,
      },
    ]
  }, undefined)

  return (
    <SbEditable content={blok}>
      <Component {...{ title, list }} />
    </SbEditable>
  )
}

export default HowToWatchStoryBlok
