import { AssetBlokType, WithStoryBlok, EditableComponent } from '../..'
import WhatIsOnEvent from './whatIsOnEvent'

const WhatIsOnEventStoryBlok: WithStoryBlok<
  typeof WhatIsOnEvent,
  {
    alt: string
    img: AssetBlokType
  }
> = Component => props => {
  const { blok } = props

  return (
    <EditableComponent content={blok}>
      <Component {...{ src: blok.img.filename, alt: blok.alt }} />
    </EditableComponent>
  )
}

export default WhatIsOnEventStoryBlok
