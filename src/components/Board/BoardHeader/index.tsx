import React, { FC } from 'react'

import { Button, NavItemsGroup } from './../../common'

import './boardHeader.css'

const BoardHeader: FC = () => {
  return (
    <section className="board-header-container">
      <NavItemsGroup>
        <Button onClick={() => console.log('hola soy un boton')} />
        <Button onClick={() => console.log('hola soy un boton')} />
        <Button onClick={() => console.log('hola soy un boton')} />
      </NavItemsGroup>
      <NavItemsGroup>
        <Button onClick={() => console.log('hola soy un boton')} />
        <Button onClick={() => console.log('hola soy un boton')} />
      </NavItemsGroup>
      <NavItemsGroup>
        <Button onClick={() => console.log('hola soy un boton')} />
        <Button onClick={() => console.log('hola soy un boton')} />
      </NavItemsGroup>
      <NavItemsGroup>
        <Button onClick={() => console.log('hola soy un boton')} />
        <Button onClick={() => console.log('hola soy un boton')} />
      </NavItemsGroup>
    </section>
  )
}

export default BoardHeader
