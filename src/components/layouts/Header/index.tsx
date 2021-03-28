import React, { FC } from 'react'

import { Button, NavItemsGroup } from '../../common'

import './header.css'

const Header: FC = () => {
  return (
    <header className="header-container">
      <NavItemsGroup>
        <Button onClick={() => console.log('yo')} />
        <Button onClick={() => console.log('nana te amo')} />
        <Button title={'Tableros'} onClick={() => console.log('nana te amo')} />
      </NavItemsGroup>

      <span className="header-title">Trello</span>
      <NavItemsGroup>
        <Button onClick={() => console.log('yo')} />
        <Button onClick={() => console.log('nana te amo')} />
        <Button title={'Tableros'} onClick={() => console.log('nana te amo')} />
      </NavItemsGroup>
    </header>
  )
}

export default Header
