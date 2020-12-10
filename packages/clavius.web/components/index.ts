import Navigation from './navigation'
import Headline from './headline'
import Rails from './rails'
import Page from './page'
import WhatIsOn from './whatIsOn'
import GetStarted from './getStarted'
import HowToWatch from './howToWatch'
import FAQ from './faq'
import Footer from './footer'

import { Spinner } from './common'
import DynamicComponent from './dynamicComponent'
import Placeholder from './placeholder'
import SbEditable, { SbEditableContent } from 'storyblok-react'

export type StoryPropType<T> = { blok: SbEditable & T }

export type TableBlokType = {
  tbody: Array<{ body: Array<SbEditableContent & { value: string }> }>
}

export type Editable = SbEditable
export type EditableContent = SbEditableContent

export type StoryBlokPropType<T> = EditableContent & T

export type assetType = { filename: string }

export {
  Rails,
  DynamicComponent,
  Headline,
  Spinner,
  Navigation,
  Placeholder,
  Page,
  WhatIsOn,
  GetStarted,
  HowToWatch,
  FAQ,
  Footer,
}
