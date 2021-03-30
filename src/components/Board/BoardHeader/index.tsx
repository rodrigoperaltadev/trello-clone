import React, { FC } from 'react'
import { BsChevronDown, BsPeople, BsStar, BsThreeDots } from 'react-icons/bs'

import { notImplementOnClick } from '../../../utils/functions'

import { Button, NavItemsGroup } from './../../common'

import './boardHeader.css'

const BoardHeader: FC = () => {
  return (
    <section className="board-header-container">
      <NavItemsGroup>
        <Button title={'Tablero'} onClick={notImplementOnClick} reverseDirection>
          <BsChevronDown style={{ marginRight: '5px' }} color="white" />
        </Button>
        <Button title={'Nombre del tablero'} onClick={notImplementOnClick} />
        <Button onClick={() => console.log('hola soy un boton')}>
          <BsStar color="white" />
        </Button>
      </NavItemsGroup>
      <NavItemsGroup>
        <Button title={'Espacio de trabajo'} onClick={notImplementOnClick} />
        <Button title={'Visible para el equipo'} onClick={notImplementOnClick}>
          <BsPeople color="white" style={{ marginLeft: '8px' }} />
        </Button>
      </NavItemsGroup>
      <NavItemsGroup>
        <Button title={'Invitar'} onClick={notImplementOnClick} />
      </NavItemsGroup>
      <NavItemsGroup>
        <Button title={'Buttler'} onClick={notImplementOnClick}></Button>
        <Button title={'Mostrar menú'} onClick={notImplementOnClick}>
          <BsThreeDots color="white" style={{ marginLeft: '8px' }} />
        </Button>
      </NavItemsGroup>
    </section>
  )
}

export default BoardHeader
