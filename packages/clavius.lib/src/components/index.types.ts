import SbEditable, { SbEditableContent } from 'storyblok-react'

export const EditableComponent = SbEditable

export type EditableContentType = SbEditableContent

export type InjectStoryBlokPropType<T> = React.FunctionComponent<{
  blok: EditableContentType & T
}>

export type InjectStoryBlok<C, T> = (
  Component: C,
) => React.FunctionComponent<{
  blok: EditableContentType & T
}>

export type TableBlokType = {
  tbody: Array<{ body: Array<EditableContentType & { value: string }> }>
}

export type ImageStoryBlokType = {
  title: string
  asset: AssetBlokType
  component: string
}

export type TitleStoryBlokKindType = 'h1' | 'h2' | 'h3'

export type TitleStoryBlokType = {
  text: string
  kind: TitleStoryBlokKindType
  component: string
}

export type AssetBlokType = { filename: string }
