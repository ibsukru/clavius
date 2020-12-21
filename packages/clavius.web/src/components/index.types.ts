import SbEditable, { SbEditableContent } from 'storyblok-react'

export const EditableComponent = SbEditable

export type EditableContentTpe = SbEditableContent

export type InjectStoryBlokPropType<T> = React.FunctionComponent<{
  blok: EditableContentTpe & T
}>

export type InjectStoryBlok<C, T> = (
  Component: C,
) => React.FunctionComponent<{
  blok: EditableContentTpe & T
}>

export type TableBlokType = {
  tbody: Array<{ body: Array<EditableContentTpe & { value: string }> }>
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
