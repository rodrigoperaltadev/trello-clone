import React, { FC } from 'react'

import './Button.css'

interface ButtonProps {
  title?: string
  icon?: string
  dark?: boolean
  transparent?: boolean
  fontSize?: string
  onClick: () => void
}

const Button: FC<ButtonProps> = props => {
  const { title, icon, dark, transparent, fontSize, onClick } = props

  const styles = {
    titleButton: {
      color: '#293a5b',
      fontSize: fontSize || '16px',
    },
  }

  return (
    <div className={transparent ? 'button-transparent' : 'button'} onClick={onClick}>
      <div style={dark ? styles.titleButton : {}}>{title}</div>
    </div>
  )
}

export default Button
