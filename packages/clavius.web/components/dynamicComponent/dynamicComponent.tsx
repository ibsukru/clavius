import Headline from '../headline'
import Navigation from '../navigation'
import Rails from '../rails'
import WhatIsOn from '../whatIsOn'
import Placeholder from '../placeholder'
import WhatIsOnEvent from '../whatIsOn/whatIsOnEvent'
import WhatIsIncluded from '../whatIsIncluded'
import GetStarted from '../getStarted'

const Components = {
  navigation: Navigation,
  headline: Headline,
  rails: Rails,
  whatIsOn: WhatIsOn,
  whatIsOnEvent: WhatIsOnEvent,
  whatIsIncluded: WhatIsIncluded,
  getStarted: GetStarted,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] === 'undefined') {
    return <Placeholder componentName={blok.component} />
  }

  const Component = Components[blok.component]

  return <Component blok={blok} />
}

export default DynamicComponent
