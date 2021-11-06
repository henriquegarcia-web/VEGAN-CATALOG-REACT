import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toogle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toogle}>
      <Icon onClick={toogle}>
        <CloseIcon/>
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Destaque</SidebarLink>
        <SidebarLink to="/">Doces</SidebarLink>
        <SidebarLink to="/">Cardápio</SidebarLink>
      </SidebarMenu>
      <SidebarBtnWrap>
        <SidebarRoute to ="/">Ligar agora</SidebarRoute>
      </SidebarBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
