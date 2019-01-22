import React from 'react'

export default function Buttons() {
  return ['Adicionar', 'Editar', 'Remover'].map((name) => (
    <button key={name}>{name}</button>
  ))
}
