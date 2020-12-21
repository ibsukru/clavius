import { mapPersonaType } from '.'
import { sportsType } from '../contexts'

const mapPersonas: mapPersonaType = storyBlokResponse => {
  return (
    storyBlokResponse?.data?.story?.content?.personas?.tbody?.reduce<
      | {
          PERSONA_FAVORITE_SPORTS: sportsType[]
        }
      | undefined
    >((acc, item) => {
      if (!item?.body) return acc
      const [head, tail] = item.body

      if (head.value === 'PERSONA_FAVORITE_SPORTS')
        return {
          ...(acc || {}),
          PERSONA_FAVORITE_SPORTS: tail.value
            .split(',')
            .map(item => item.toUpperCase() as sportsType),
        }
    }, undefined) || {
      PERSONA_FAVORITE_SPORTS: [],
    }
  )
}

export default mapPersonas
