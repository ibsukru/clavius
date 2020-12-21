import { HowToWatchStoryBlokType } from '.'
import { EditableComponent } from 'clavius.lib/src/components'

const HowToWatchStoryBlok: HowToWatchStoryBlokType = Component => props => {
  const { blok } = props

  const { platforms, title } = blok
  const { tbody } = platforms

  const list = tbody?.reduce<
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
    <EditableComponent content={blok}>
      <Component {...{ title, list }} />
    </EditableComponent>
  )
}

export default HowToWatchStoryBlok
