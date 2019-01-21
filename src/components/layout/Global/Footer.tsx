import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  color: #fff;
  text-decoration: underline;

  &:hover {
    color: #ddd;
  }
`

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <p className="mb-0">
          Copyright &copy; <A href="https://lffg.github.io">Luiz Felipe F.</A> |
          Todos os direitos reservados.
          <br />
          Este projeto é <em>open-source</em>. Contribua pelo{' '}
          <A href="https://github.com/lffg/form-gen">GitHub</A>.
        </p>
      </div>
    </footer>
  )
}
