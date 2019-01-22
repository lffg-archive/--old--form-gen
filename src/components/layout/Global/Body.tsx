import React, { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

export default function Body(props: IProps) {
  return <div className="container py-4 flex-grow-1">{props.children}</div>
}
