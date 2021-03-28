import React, { FC } from 'react'
import { Board } from '../../components'
import { Header } from '../../components/layouts'

import './pageContainer.css'

const Home: FC = () => {
  return (
    <div className="container">
      <PageContainer>
        <Header />
        <Board />
      </PageContainer>
    </div>
  )
}

export default Home

type PageContainerProps = {
  children?: JSX.Element | JSX.Element[]
}

const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return <div className="page-container">{children}</div>
}
