import React, { useState } from 'react'
import ProgressContext from '../../context/ProgressContext'
import StepBar from './StepBar'
import { Steps } from '../../utils/steps'

export default function ProgressManager() {
  const [currentStep, setCurrentStep] = useState<Steps>('FIELDS')

  function changeCurrentStep(step: Steps) {
    setCurrentStep(step)
  }

  return (
    <ProgressContext.Provider value={{ currentStep, changeCurrentStep }}>
      <StepBar />
    </ProgressContext.Provider>
  )
}
