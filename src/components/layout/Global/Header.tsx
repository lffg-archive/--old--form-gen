import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Gerador de Formulários <span className="badge badge-dark">3.0.0</span>
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="https://github.com/lffg/form-gen" className="nav-link">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
