import React from 'react'
import StepItem from './StepItem'

import './Progress.css'

export default function StepBar() {
  return (
    <div className="progress">
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
    </div>
  )
}
