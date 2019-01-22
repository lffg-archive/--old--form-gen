import React, { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'

const dialogRoot = document.getElementById('dialog-root')

interface IProps {
  children: ReactNode
}

export default React.memo(function Dialog(props: IProps) {
  const el = document.createElement('div')

  useEffect(() => {
    dialogRoot!.appendChild(el)
    return () => dialogRoot!.removeChild(el)
  }, [])

  return ReactDOM.createPortal(props.children, el)
})
