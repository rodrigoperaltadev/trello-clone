import React, { FC } from 'react'
import { BsPlus, BsThreeDots } from 'react-icons/bs'
import { Button } from '../common'

import './cardsList.css'

const CardsListHeader: FC = () => {
  return (
    <div className="cards-list-header">
      <h5 className="cards-list-header-title">To do</h5>
      <Button onClick={() => console.log('hace algo')} transparent />
    </div>
  )
}

const Card: FC = () => {
  return (
    <div className="card">
      <h6 className="card-title">Tarea 1</h6>
    </div>
  )
}

const CardListContent: FC = () => {
  return (
    <div className="cards-list-content">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

const CardListFooter: FC = () => {
  return (
    <div className="cards-list-footer">
      <Button
        onClick={() => console.log('hace algo')}
        title={'Añadir otra tarjeta'}
        fontSize={'13px'}
        transparent
        dark
        block
        justify="flex-start"
      >
        <BsPlus />
      </Button>
      <Button onClick={() => console.log('hace algo')} transparent dark>
        <BsThreeDots />
      </Button>
    </div>
  )
}

const CardsList: FC = () => {
  return (
    <div className="cards-list">
      <CardsListHeader />
      <CardListContent />
      <CardListFooter />
    </div>
  )
}

export default CardsList
