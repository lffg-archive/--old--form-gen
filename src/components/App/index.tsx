import React from 'react'
import GeneratorManager from '../Generator/GeneratorManager'
import Global from '../layout/Global'
import ProgressManager from '../Progress/ProgressManager'

const Fields = <h1>Campos</h1>
const Template = <h1>Template</h1>
const Done = <h1>Instalação</h1>

export default function App() {
  return (
    <Global>
      <ProgressManager>
        {(step) => (
          <GeneratorManager>
            {
              {
                FIELDS: Fields,
                TEMPLATE: Template,
                DONE: Done
              }[step]
            }
          </GeneratorManager>
        )}
      </ProgressManager>
    </Global>
  )
}
