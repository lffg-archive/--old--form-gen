import React, { ReactNode, useState } from 'react'
import ProgressContext from '../../context/ProgressContext'
import { Steps } from '../../utils/steps'
import StepBar from './StepBar'

export interface IProps {
  children: ReactNode
}

export default function ProgressManager(props: IProps) {
  const [currentStep, setCurrentStep] = useState<Steps>('GENERATOR')

  function changeCurrentStep(step: Steps) {
    setCurrentStep(step)
  }

  return (
    <ProgressContext.Provider value={{ currentStep, changeCurrentStep }}>
      <StepBar />
      {props.children}
    </ProgressContext.Provider>
  )
}
