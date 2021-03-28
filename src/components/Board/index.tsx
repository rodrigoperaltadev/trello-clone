import React, { FC } from 'react'

import BoardHeader from './BoardHeader'
import BoardCardsLists from './BoardCardsLists'

import './board.css'

const Board: FC = () => {
  return (
    <main className="board-container">
      <BoardHeader />
      <BoardCardsLists />
    </main>
  )
}

export default Board
