import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export interface IProps {
  children?: JSX.Element | JSX.Element[]
}

export default function Global(props: IProps) {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Header />
      <Body>{props.children}</Body>
      <Footer />
    </div>
  )
}
