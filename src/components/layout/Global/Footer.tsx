import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <p className="mb-0">
          Copyright &copy;{' '}
          <a href="https://lffg.github.io" className="text-white">
            <u>Luiz Felipe F.</u>
          </a>{' '}
          | Todos os direitos reservados.
          <br />
          Este projeto é <em>open-source</em>. Contribua pelo{' '}
          <a href="https://github.com/lffg/form-gen" className="text-white">
            <u>GitHub</u>
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
