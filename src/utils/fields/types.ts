export type FieldType = 'input' | 'checkable' | 'select' | 'textarea' | 'extra'

interface BaseField {
  type: FieldType
  id: string
  attributes?: { [key: string]: any }
}

interface BaseInteractiveField {
  label: string
  isRequired?: boolean
  isDisabled?: boolean
}

// Used in CheckboxField and RadioField
export interface CheckableFieldChild {
  isChecked?: boolean
  value: string
  label: string
  isDisabled?: boolean
}

// Used in SelectField
export interface SelectFieldChild {
  isSelected?: boolean
  value: string
  text: string
  isDisabled?: boolean
}

export interface InputField extends BaseField, BaseInteractiveField {
  type: 'input'
  defaultValue?: string
  placeholder?: string
}

export interface CheckableField extends BaseField, BaseInteractiveField {
  type: 'checkable'
  checkType: 'checkbox' | 'radio'
  name: string
  options: CheckableFieldChild[]
}

export interface SelectField extends BaseField, BaseInteractiveField {
  type: 'select'
  isMultiple: boolean
  options: SelectFieldChild[]
}

export interface TextareaField extends BaseField, BaseInteractiveField {
  type: 'textarea'
  defaultValue?: string
  placeholder?: string
}

export interface ExtraField extends BaseField {
  type: 'extra'
  tagName: 'h4' | 'p'
  text: string
}

export type Field =
  | InputField
  | CheckableField
  | SelectField
  | TextareaField
  | ExtraField
