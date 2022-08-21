import React from 'react'
import { Bars, Nav, NavLink, NavIcon } from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavLink to='/'>Pizzeria</NavLink>

            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars />
            </NavIcon>

        </Nav>
    </>
  )
}

export default Navbar
