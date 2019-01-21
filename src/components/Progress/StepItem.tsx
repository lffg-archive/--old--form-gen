import React, { useContext } from 'react'
import ProgressContext from '../../context/ProgressContext'
import { Steps, canChangeStep } from '../../utils/steps'
import styled from 'styled-components'

const Item = styled.div`
  border: solid 1px #ddd;
  border-radius: 1rem;
  padding: 1rem 2rem;

  &.active {
    border-color: red;
  }
`

export interface IProps {
  isActive: boolean
  step: Steps
  num: number
  name: string
  desc: string
}

export default function StepItem(props: IProps) {
  const { step, changeStep } = useContext(ProgressContext)

  function handleClick() {
    if (!canChangeStep(step, props.step)) {
      return alert('Não pode avançar por aí!')
    }

    changeStep(props.step)
  }

  return (
    <Item className={props.isActive ? 'active' : ''} onClick={handleClick}>
      <span className="badge badge-dark">{props.num}</span> {props.name} -{' '}
      {props.desc}
    </Item>
  )
}
