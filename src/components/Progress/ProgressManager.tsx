import React, { useState } from 'react'
import ProgressContext from '../../context/ProgressContext'
import { Steps } from '../../utils/steps'
import StepBar from './StepBar'

export interface IProps {
  children: (step: Steps) => JSX.Element
}

export default function ProgressManager(props: IProps) {
  const [currentStep, setCurrentStep] = useState<Steps>('FIELDS')

  function changeCurrentStep(step: Steps) {
    setCurrentStep(step)
  }

  return (
    <ProgressContext.Provider value={{ currentStep, changeCurrentStep }}>
      <StepBar />
      {props.children(currentStep)}
    </ProgressContext.Provider>
  )
}
