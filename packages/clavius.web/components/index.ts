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

export type WithBlokType<T> = { blok: EditableType & T }
export type StoryBlokComponent<T> = React.FunctionComponent<{
  blok: EditableContent & T
}>

export type WithStoryBlok<C, T> = (
  Component: C,
) => React.FunctionComponent<{
  blok: EditableContent & T
}>

export type TableBlokType = {
  tbody: Array<{ body: Array<SbEditableContent & { value: string }> }>
}

export const EditableComponent = SbEditable
export type EditableType = SbEditable
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
