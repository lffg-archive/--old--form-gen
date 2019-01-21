import React from 'react'
import { Steps } from '../utils/steps'

export interface IProgressContext {
  currentStep: Steps
  changeCurrentStep: (toStep: Steps) => void
}

export default React.createContext<IProgressContext>({
  currentStep: 'FIELDS',
  changeCurrentStep: () => {
    throw new Error('Not implemented.')
  }
})
