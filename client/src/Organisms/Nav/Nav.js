import React from 'react'

import NavItem from '../../Atoms/NavItem'

import './Nav.scss'


const Nav = () => {
    return (
        <nav className='nav'>
            <NavItem>Customer</NavItem>
            <NavItem>Support</NavItem>
            <NavItem>Cart</NavItem>
        </nav>
    )
}

export default Nav