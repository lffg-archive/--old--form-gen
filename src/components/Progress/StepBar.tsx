import React from 'react'
import styles from './progress.module.scss'
import StepItem from './StepItem'

export default function StepBar() {
  return (
    <div className={styles.progress}>
      <StepItem
        num={1}
        step="GENERATOR"
        name="Gerador"
        desc="Construa o seu formulário através do gerador"
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
