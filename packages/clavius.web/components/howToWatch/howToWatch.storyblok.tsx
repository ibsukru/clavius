import SbEditable, { SbEditableContent } from 'storyblok-react'
import { StoryPropType, TableBlokType } from '..'
import HowToWatch from './howToWatch'

type HowToWatchStoryBlokPropType = SbEditableContent & {
  title: string
  platforms: TableBlokType
}

const HowToWatchStoryBlok: React.FunctionComponent<
  StoryPropType<HowToWatchStoryBlokPropType>
> = props => {
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
    if (!item || item.body) return acc

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
      <HowToWatch {...{ title, list }} />
    </SbEditable>
  )
}

export default HowToWatchStoryBlok
