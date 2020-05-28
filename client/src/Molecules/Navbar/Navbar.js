import React from 'react'

import Logo from '../../Atoms/Logo'

import SearchBox from '../../Organisms/SearchBox'
import Nav from '../../Organisms/Nav'

import './Navbar.scss'


const Navbar = () => {
    return (
        <div className="navbar">
            <Logo className='logo' />
            
            <SearchBox className="searchBox" />

            <Nav className="nav-component" />
        </div>
    )
}

export default Navbar