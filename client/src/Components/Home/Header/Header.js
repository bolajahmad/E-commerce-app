import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'


import HeaderContent from './HeaderContent/HeaderContent'


const HeaderStyles = {
    backgroundColor: 'rgb(238, 164, 28)',
}


const Header = () => {
    return (
        <div className='min-vh-100' style={HeaderStyles}>
            <Navigation />
            <HeaderContent />
        </div>
    )
}


const Navigation = () => {
    return (
        <>
            <Navbar sticky='top' expand='md' className='px-5' style={{background: 'rgb(54, 224, 54)'}}>
                    <Navbar.Brand href='/'>Freaksy</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-5 mr-auto'>
                            <Nav.Item>
                                <Nav.Link href='/'>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/shop'>Market</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='#blog'>Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='#contact'>Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Nav className='mr-2'>
                            <Nav.Item>
                                <Nav.Link href='#contact' >Sign in</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default Header