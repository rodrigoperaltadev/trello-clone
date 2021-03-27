import React, { FC } from 'react'

import { Button } from '../../common'

import './header.css'

const Header: FC = () => {
  return (
    <header className="header-container">
      <Button onClick={() => console.log('nana te amo')} />
      <Button onClick={() => console.log('nana te amo')} />
      <Button onClick={() => console.log('nana te amo')} />
      <span className="header-title">Trello</span>
    </header>
  )
}

export default Header
