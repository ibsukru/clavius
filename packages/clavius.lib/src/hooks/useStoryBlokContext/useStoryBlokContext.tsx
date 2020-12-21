import { useContext } from 'react'
import { StoryBlokContext } from '../../contexts'

const useStoryBlokContext = () => {
  return useContext(StoryBlokContext)
}

export default useStoryBlokContext
