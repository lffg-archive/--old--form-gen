import React, { useState } from 'react'
import GeneratedFieldsContext from '../../context/GeneratedFieldsContext'
import { Field } from '../../utils/fields/types'

export interface IProps {
  children: JSX.Element | JSX.Element[]
}

export default function GeneratorManager(props: IProps) {
  const [fields, setFields] = useState<Field[]>([])

  function add(field: Field) {
    setFields((prevFields) => [...prevFields, field])
  }

  function edit(fieldId: string, updatedField: Field) {
    setFields((prevFields) => {
      const index = prevFields.findIndex(({ id }) => id === fieldId)
      prevFields[index] = { ...prevFields[index], ...updatedField }
      return prevFields
    })
  }

  function remove(fieldId: string) {
    setFields((prevFields) => prevFields.filter(({ id }) => id !== fieldId))
  }

  function move(fieldId: string, action: 'up' | 'down') {
    setFields((prevFields) => {
      const fromIndex = prevFields.findIndex(({ id }) => id === fieldId)
      const toIndex = action === 'up' ? fromIndex + 1 : fromIndex - 1

      const from = prevFields[fromIndex]
      prevFields[fromIndex] = prevFields[toIndex]
      prevFields[toIndex] = from

      return prevFields
    })
  }

  return (
    <GeneratedFieldsContext.Provider
      value={{ fields, add, edit, remove, move }}
    >
      {props.children}
    </GeneratedFieldsContext.Provider>
  )
}
