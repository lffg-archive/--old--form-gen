import React from 'react'
import { Steps } from '../utils/steps'

export interface IProgressContext {
  step: Steps
  changeStep: (toStep: Steps) => void
}

export default React.createContext<IProgressContext>({
  step: 'FIELDS',
  changeStep: () => {
    throw new Error('Not implemented.')
  }
})
