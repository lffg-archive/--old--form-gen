import React from 'react'
import shortid from 'shortid'
import {
  CheckableField,
  ExtraField,
  Field,
  FieldType,
  InputField,
  SelectField,
  TextareaField
} from '../../utils/fields/types'

function GeneratedInputField({ field }: { field: InputField }) {
  return (
    <input
      id={field.id}
      defaultValue={field.defaultValue}
      placeholder={field.placeholder}
      required={field.isRequired}
      disabled={field.isDisabled && !field.isRequired}
      {...field.attributes}
    />
  )
}

function GeneratedCheckableField({ field }: { field: CheckableField }) {
  return (
    <>
      {field.options.map((option) => {
        const id = `${field.id}-${shortid.generate()}`

        return (
          <div key={id}>
            <input
              id={id}
              type={field.checkType}
              name={field.name}
              value={option.value}
              defaultChecked={option.isChecked}
              disabled={option.isDisabled}
              required={field.isRequired}
            />
            <label htmlFor={id}>{option.label}</label>
          </div>
        )
      })}
    </>
  )
}

function GeneratedSelectField({ field }: { field: SelectField }) {
  return (
    <select
      id={field.id}
      multiple={field.isMultiple}
      required={field.isRequired}
      disabled={field.isDisabled && !field.isRequired}
    >
      {field.options.map((option) => (
        <option
          key={`${field.id}-${shortid.generate()}`}
          value={option.value}
          selected={option.isSelected}
          disabled={option.isDisabled}
          children={option.text}
        />
      ))}
    </select>
  )
}

function GeneratedTextareaField({ field }: { field: TextareaField }) {
  return (
    <textarea
      id={field.id}
      defaultValue={field.defaultValue}
      placeholder={field.placeholder}
      required={field.isRequired}
      disabled={field.isDisabled && !field.isRequired}
      {...field.attributes}
    />
  )
}

function GeneratedExtraField({ field }: { field: ExtraField }) {
  const Tag = field.tagName

  return (
    <Tag id={field.id} {...field.attributes}>
      {field.text}
    </Tag>
  )
}

export function GeneratedField({ field }: { field: Field }) {
  let el: JSX.Element

  switch (field.type) {
    case 'input':
      el = <GeneratedInputField field={field} />
      break
    case 'checkable':
      el = <GeneratedCheckableField field={field} />
      break
    case 'select':
      el = <GeneratedSelectField field={field} />
      break
    case 'textarea':
      el = <GeneratedTextareaField field={field} />
      break
    case 'extra':
      el = <GeneratedExtraField field={field} />
      break
    default:
      throw new Error('Invalid option.')
  }

  return (
    <div className="generated-field-wrapper">
      {'label' in field && <label htmlFor={field.id}>{field.label}</label>}
      <div>{el}</div>
    </div>
  )
}
