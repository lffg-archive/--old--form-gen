import React, { useState } from 'react'
import ProgressContext from '../../context/ProgressContext'
import StepBar from './StepBar'
import { Steps } from '../../utils/steps'

export default function ProgressManager() {
  const [step, setStep] = useState<Steps>('FIELDS')

  function changeStep(step: Steps) {
    setStep(step)
  }

  return (
    <ProgressContext.Provider value={{ step, changeStep }}>
      <StepBar currentStep={step} />
    </ProgressContext.Provider>
  )
}
