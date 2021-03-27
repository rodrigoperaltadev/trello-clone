import React, { FC } from 'react'

import './Button.css'

interface ButtonProps {
  title?: string
  icon?: string
  onClick: () => void
}

const Button: FC<ButtonProps> = props => {
  return (
    <div className="button" onClick={props.onClick}>
      <span>{props.title}</span>
    </div>
  )
}

export default Button
