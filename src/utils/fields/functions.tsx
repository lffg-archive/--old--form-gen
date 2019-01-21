import React from 'react'
import shortid from 'shortid'
import { Field } from './types'

function createFieldElement(field: Field) {
  switch (field.type) {
    case 'input':
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

    case 'checkable':
      return field.options.map((option) => {
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
      })

    case 'select':
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

    case 'textarea':
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

    case 'extra':
      const Tag = field.tagName

      return (
        <Tag id={field.id} {...field.attributes}>
          {field.text}
        </Tag>
      )
  }
}

export function GeneratedField(field: Field) {
  return (
    <div className="generated-field-wrapper">
      {'label' in field && <label htmlFor={field.id}>{field.label}</label>}
      {createFieldElement(field)}
    </div>
  )
}
