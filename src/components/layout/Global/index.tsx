import React, { ReactNode } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

interface IProps {
  children?: ReactNode
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
