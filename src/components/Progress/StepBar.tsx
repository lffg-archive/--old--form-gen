import React from 'react'
import { Steps } from '../../utils/steps'
import styled from 'styled-components'
import StepItem from './StepItem'

const Bar = styled.section`
  display: flex;
  align-items: center;
  border: solid 1px #ddd;
`

export interface IProps {
  currentStep: Steps
}

export default function StepBar(props: IProps) {
  return (
    <Bar>
      {[
        {
          step: 'FIELDS' as Steps,
          name: 'Campos',
          desc: 'Construa o seu formulário'
        },
        {
          step: 'TEMPLATE' as Steps,
          name: 'Template',
          desc:
            'Construa o template a ser usado durante a submissão do seu formulário'
        },
        {
          step: 'DONE' as Steps,
          name: 'Conclusão',
          desc: 'Conclusão e instruções de instalação'
        }
      ]
        .map((step) => ({ ...step, isActive: step.step === props.currentStep }))
        .map((props, index) => (
          <StepItem {...props} num={index + 1} />
        ))}
    </Bar>
  )
}
