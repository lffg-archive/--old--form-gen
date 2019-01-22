import classNames from 'classnames'
import React, { useContext } from 'react'
import styled from 'styled-components'
import ProgressContext from '../../context/ProgressContext'
import { canChangeStep, Steps } from '../../utils/steps'
import styles from './progress.module.scss'

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
      return alert('Não pode avançar por aí!')
    }

    changeCurrentStep(props.step)
  }

  return (
    <div
      className={classNames(
        styles.item,
        currentStep === props.step ? styles.active : '',
        !canChangeStep(currentStep, props.step) && currentStep !== props.step
          ? styles.disabled
          : ''
      )}
      onClick={handleClick}
    >
      <span className={styles.badge}>{props.num}</span>
      <div className={styles.row}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.desc}>{props.desc}</span>
      </div>
    </div>
  )
}
