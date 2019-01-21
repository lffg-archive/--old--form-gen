import React from 'react'

export interface IGeneratedFieldsContext {
  fields: any
  dispatch: any
}

export default React.createContext<IGeneratedFieldsContext>({
  fields: undefined,
  dispatch: undefined
})
