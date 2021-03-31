import React, { FC } from 'react'
import { BsPlus } from 'react-icons/bs'

import { CardsList } from '../../'
import { Button } from '../../common'

import './boardCardsLists.css'

const BoardCardsLists: FC = () => {
  return (
    <div className="board-cards-lists-container">
      <CardsList />
      <CardsList />
      <Button title={'Añada otra lista'} height="30px" onClick={() => alert('it is not implement yet')}>
        <BsPlus />
      </Button>
    </div>
  )
}

export default BoardCardsLists
