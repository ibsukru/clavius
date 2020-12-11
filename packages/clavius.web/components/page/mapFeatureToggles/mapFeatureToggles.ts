import { mapFeatureTogglesType } from '.'

const mapFeatureToggles: mapFeatureTogglesType = storyBlokResponse => {
  return storyBlokResponse?.data?.story?.content?.experiments?.tbody?.reduce<
    | {
        [key: string]: string
      }
    | undefined
  >((acc, item) => {
    if (!item?.body) return acc
    const [experiment, variant] = item.body

    return {
      ...(acc || {}),
      [experiment.value]: variant.value,
    }
  }, undefined)

  return undefined
}

export default mapFeatureToggles
