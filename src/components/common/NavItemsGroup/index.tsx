import React, { FC } from 'react'

import './navItemsGroup.css'

type NavItemsGruopProps = {
  children?: JSX.Element | JSX.Element[]
}

const NavItemsGruop: FC<NavItemsGruopProps> = ({ children }) => {
  return <div className="nav-items-group">{children}</div>
}

export default NavItemsGruop
