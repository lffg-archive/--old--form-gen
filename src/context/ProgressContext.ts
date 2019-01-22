import React from 'react'
import notImplemented from '../utils/debug/notImplemented'
import { Steps } from '../utils/steps'

export interface IProgressContext {
  currentStep: Steps
  changeCurrentStep: (toStep: Steps) => void
}

export default React.createContext<IProgressContext>({
  currentStep: 'GENERATOR',
  changeCurrentStep: notImplemented
})
