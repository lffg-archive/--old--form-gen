import React from 'react'
import { Steps } from '../../utils/steps'
import styled from 'styled-components'
import StepItem from './StepItem'

const Bar = styled.section`
  display: flex;
  align-items: center;
  border: solid 1px #ddd;
`

export default function StepBar() {
  return (
    <Bar>
      <StepItem
        num={1}
        step="FIELDS"
        name="Campos"
        desc="Construa o seu formulário"
      />
      <StepItem
        num={2}
        step="TEMPLATE"
        name="Template"
        desc="Construa o template a ser usado durante a submissão do seu formulário"
      />
      <StepItem
        num={3}
        step="DONE"
        name="Conclusão"
        desc="Conclusão e instruções de instalação"
      />
    </Bar>
  )
}
