import { useContext } from 'react'
import { PersonaContext } from '../../contexts'

const usePersonaContext = () => {
  return useContext(PersonaContext)
}

export default usePersonaContext
