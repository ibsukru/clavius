import React from 'react'
import Placeholder from '../placeholder'
import { Components, DynamicComponentType } from '.'

const DynamicComponent: DynamicComponentType = ({ blok }) => {
  if (typeof Components[blok.component] === 'undefined') {
    return <Placeholder componentName={blok.component} />
  }

  const Component = Components[blok.component]

  return <Component blok={blok} />
}

export default DynamicComponent
