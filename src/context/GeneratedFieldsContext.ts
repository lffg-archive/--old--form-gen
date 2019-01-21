import React from 'react'
import notImplemented from '../utils/debug/notImplemented'
import { Field } from '../utils/fields/types'

export interface IGeneratedFieldsContext {
  fields: Field[]
  add: (field: Field) => void
  edit: (fieldId: string, updatedField: Field) => void
  remove: (fieldId: string) => void
  move: (fieldId: string, action: 'up' | 'down') => void
}

export default React.createContext<IGeneratedFieldsContext>({
  fields: [],
  add: notImplemented,
  edit: notImplemented,
  remove: notImplemented,
  move: notImplemented
})
