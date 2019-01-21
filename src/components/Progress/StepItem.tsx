import React, { useContext } from 'react'
import styled from 'styled-components'
import ProgressContext from '../../context/ProgressContext'
import { canChangeStep, Steps } from '../../utils/steps'

const Item = styled.div`
  border: solid 1px #ddd;
  border-radius: 1rem;
  padding: 1rem 2rem;

  &.active {
    border-color: red;
  }
`

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
    <Item
      className={currentStep === props.step ? 'active' : ''}
      onClick={handleClick}
    >
      <span className="badge badge-dark">{props.num}</span> {props.name} -{' '}
      {props.desc}
    </Item>
  )
}
