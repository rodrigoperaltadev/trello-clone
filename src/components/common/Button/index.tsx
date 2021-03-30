import React, { FC } from 'react'

import './Button.css'

type ButtonProps = {
  children?: JSX.Element | JSX.Element[]
  title?: string
  dark?: boolean
  transparent?: boolean
  fontSize?: string
  justify?: string
  block?: boolean
  reverseDirection?: boolean
  onClick: () => void
}

const Button: FC<ButtonProps> = props => {
  const { children, title, dark, transparent, fontSize, justify, block, reverseDirection, onClick } = props

  const styles = {
    container: {
      justifyContent: justify || 'center',
      width: block ? '100%' : '',
    },
    titleButton: {
      color: '#293a5b',
      fontSize: fontSize || '16px',
    },
  }

  const buttonClassNames = `${transparent ? 'button-transparent' : 'button'} ${
    reverseDirection ? 'button-reverse-content' : ''
  }`

  return (
    <div style={styles.container} className={buttonClassNames} onClick={onClick}>
      {children}
      {title && <div style={dark ? styles.titleButton : {}}>{title}</div>}
    </div>
  )
}

export default Button
