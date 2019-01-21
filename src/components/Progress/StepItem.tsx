import classNames from 'classnames'
import React, { useContext } from 'react'
import styled from 'styled-components'
import ProgressContext from '../../context/ProgressContext'
import { canChangeStep, Steps } from '../../utils/steps'

export interface IProps {
  step: Steps
  num: number
  name: string
  desc: string
}

export default function StepItem(props: IProps) {
  const { currentStep, changeCurrentStep } = useContext(ProgressContext)

  function handleClick() {
    if (!canChangeStep(currentStep, props.step)) {
      // return alert('Não pode avançar por aí!')
    }

    changeCurrentStep(props.step)
  }

  return (
    <div
      className={classNames(
        'progress-item',
        currentStep === props.step ? 'progress-item--active' : '',
        !canChangeStep(currentStep, props.step) && currentStep !== props.step
          ? 'progress-item--disabled'
          : ''
      )}
      onClick={handleClick}
    >
      <span className="progress-item__badge">{props.num}</span>
      <div className="progress-item__row">
        <span className="progress-item__name">{props.name}</span>
        <span className="progress-item__desc">{props.desc}</span>
      </div>
    </div>
  )
}
