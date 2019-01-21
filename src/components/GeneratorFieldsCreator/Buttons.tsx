import React from 'react'

export default function Buttons() {
  return ['Adicionar', 'Remover'].map((name) => (
    <button key={name}>{name}</button>
  ))
}
