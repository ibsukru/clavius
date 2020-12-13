import { storyBlokComponentType } from '../../../contexts/featureToggleContext'

export const getVariants: <T extends { component: string }>(
  experiments: {
    [key: string]: ({ component: string } | T)[]
  },
  component: storyBlokComponentType,
) => { [key: string]: T[] } = (experiments, component) => {
  return Object.entries(experiments).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: value.filter(item => item.component === component),
    }
  }, {})
}

export default getVariants
