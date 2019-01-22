import React from 'react'
import FieldsManager from '../Fields/FieldsManager'
import Global from '../layout/Global'
import ProgressManager from '../Progress/ProgressManager'
import AppInterface from './Interface'

export default function App() {
  return (
    <Global>
      <ProgressManager>
        <FieldsManager>
          <AppInterface />
        </FieldsManager>
      </ProgressManager>
    </Global>
  )
}
