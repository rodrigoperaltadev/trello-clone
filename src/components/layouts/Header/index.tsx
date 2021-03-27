import React, { FC } from 'react'

import { Button } from '../../common'

import './header.css'

const Header: FC = () => {
  return (
    <header className="header-container">
      <div className="nav-items-group">
        <Button onClick={() => console.log('yo')} />
        <Button onClick={() => console.log('nana te amo')} />
        <Button title={'Tableros'} onClick={() => console.log('nana te amo')} />
      </div>

      <span className="header-title">Trello</span>

     <div className="nav-items-group">
        <Button onClick={() => console.log('nana te amo')} />
        <Button onClick={() => console.log('nana te amo')} />
        <Button onClick={() => console.log('nana te amo')} />
      </div>
    </header>
  )
}

export default Header
