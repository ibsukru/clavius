import React from 'react'
import Placeholder from '../placeholder'
import { Components, DynamicComponentType } from '.'

const DynamicComponent: DynamicComponentType = ({ blok }) => {
  const Component = Components[blok.component]

  if (!Component) {
    return <Placeholder componentName={blok.component} />
  }

  return <Component {...{ blok }} />
}

export default DynamicComponent
