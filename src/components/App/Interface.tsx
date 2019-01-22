import React, { useContext, useState } from 'react'
import ProgressContext from '../../context/ProgressContext'
import { Steps } from '../../utils/steps'
import Modal from '../Lib/Modal'

export default function Interface() {
  const [isOpened, setIsOpened] = useState(false)
  const { currentStep, changeCurrentStep } = useContext(ProgressContext)

  function changeStep(e: React.MouseEvent<HTMLButtonElement>) {
    changeCurrentStep((e.target as HTMLButtonElement).dataset.step as Steps)
  }

  function toggleDialog() {
    setIsOpened((prev) => !prev)
  }

  return (
    <>
      <div className="mb-3">
        <h1>
          Etapa atual: <samp>{currentStep}</samp>
        </h1>
        {(['GENERATOR', 'TEMPLATE', 'INSTALL'] as Steps[]).map((step) => (
          <button key={step} onClick={changeStep} data-step={step}>
            {step}
          </button>
        ))}
      </div>
      <button onClick={toggleDialog}>Abrir Dialog</button>
      {isOpened && <Modal children="oi" />}
    </>
  )
}
