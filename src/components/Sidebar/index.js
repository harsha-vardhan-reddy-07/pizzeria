import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
        <SidebarMenu>
            <SidebarLink to='/'>Pizzas</SidebarLink>
            <SidebarLink to='/'>Deserts</SidebarLink>
            <SidebarLink to='/'>Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/'>Order Now</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar

// https://preview.themeforest.net/item/mate-react-redux-material-admin-dashboard/full_screen_preview/21234776?_ga=2.266096783.1878081482.1661157939-1241755600.1661157939
