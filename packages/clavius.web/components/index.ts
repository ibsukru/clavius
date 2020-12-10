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

export const EditableComponent = SbEditable

export type EditableContentTpe = SbEditableContent

export type WithStoryBlok<C, T> = (
  Component: C,
) => React.FunctionComponent<{
  blok: EditableContentTpe & T
}>

export type TableBlokType = {
  tbody: Array<{ body: Array<EditableContentTpe & { value: string }> }>
}

export type AssetBlokType = { filename: string }

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
