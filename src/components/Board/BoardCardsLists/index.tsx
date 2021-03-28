import React, { FC } from 'react'

import { CardsList } from '../../'

import './boardCardsLists.css'

const BoardCardsLists: FC = () => {
  return (
    <div className="board-cards-lists-container">
      <CardsList />
      <CardsList />
      <CardsList />
      <CardsList />
      <CardsList />
      <CardsList />
      <CardsList />
      <CardsList />
    </div>
  )
}

export default BoardCardsLists
