import { useContext } from 'react'
import { StoryBlokContext } from '../../contexts'

const useI18nContext = () => {
  return useContext(StoryBlokContext)
}

export default useI18nContext
