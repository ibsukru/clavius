export const normalizeVariants: <T>(
  experiment: {
    key: string
    variant: T[]
    component: string
  }[],
) => { [key: string]: T[] } = experiment => {
  return experiment.reduce((acc, item) => {
    return {
      ...acc,
      [item.key]: item.variant,
    }
  }, {})
}

export default normalizeVariants
