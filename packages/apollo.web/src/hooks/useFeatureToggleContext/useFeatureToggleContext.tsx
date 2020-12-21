import { useContext } from 'react'
import { FeatureToggleContext } from '../../contexts'

const useFeatureToggleContext = () => {
  return useContext(FeatureToggleContext)
}

export default useFeatureToggleContext
