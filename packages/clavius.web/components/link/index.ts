import { LinkProps } from 'next/link'

export const blank = {
  target: '_blank',
  rel: 'noreferrer',
}

export type linkType = string | LinkProps
