import Headline from '../headline'
import Rails from '../rails'
import WhatIsOn from '../whatIsOn'
import WhatIsOnEvent from '../whatIsOn/whatIsOnEvent'
import WhatIsIncluded from '../whatIsIncluded'
import GetStarted from '../getStarted'
import HowToWatch from '../howToWatch'
import FAQ from '../faq'
import Footer from '../footer'
import React from 'react'
import Placeholder from '../placeholder'

const Components = {
  headline: Headline,
  rails: Rails,
  whatIsOn: WhatIsOn,
  whatIsOnEvent: WhatIsOnEvent,
  whatIsIncluded: WhatIsIncluded,
  getStarted: GetStarted,
  howToWatch: HowToWatch,
  faq: FAQ,
  footer: Footer,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] === 'undefined') {
    return <Placeholder componentName={blok.component} />
  }

  const Component = Components[blok.component]

  return <Component blok={blok} />
}

export default DynamicComponent
