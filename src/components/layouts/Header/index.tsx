import React, { FC } from 'react'

import { BsFillBellFill, BsFillGrid3X3GapFill, BsHouseDoor, BsInfoCircle, BsKanbanFill, BsPlus } from 'react-icons/bs'

import { Button, NavItemsGroup } from '../../common'

import './header.css'

const Header: FC = () => {
  return (
    <header className="header-container">
      <NavItemsGroup>
        <Button onClick={() => console.log('yo')}>
          <BsFillGrid3X3GapFill color="white" />
        </Button>
        <Button onClick={() => console.log('nana te amo')}>
          <BsHouseDoor color="white" />
        </Button>
        <Button title={'Tableros'} onClick={() => console.log('nana te amo')}>
          <BsKanbanFill color="white" style={{ marginRight: '5px', marginLeft: '5px' }} />
        </Button>
      </NavItemsGroup>

      <span className="header-title">Trello</span>
      <NavItemsGroup>
        <Button onClick={() => console.log('yo')}>
          <BsPlus color="white" size={25} />
        </Button>
        <Button onClick={() => console.log('nana te amo')}>
          <BsInfoCircle color="white" size={20} />
        </Button>
        <Button onClick={() => console.log('nana te amo')}>
          <BsFillBellFill color="white" />
        </Button>
      </NavItemsGroup>
    </header>
  )
}

export default Header
