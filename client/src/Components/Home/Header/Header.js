import React from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'


import HeaderContent from './HeaderContent/HeaderContent'


const HeaderStyles = {
    backgroundColor: 'rgba(79, 79, 182, 1)',
    height: '100vh'
}


const Header = () => {
    return (
        <div style={HeaderStyles}>
            <Navigation />
            <HeaderContent />
        </div>
    )
}


const Navigation = () => {
    return (
        <>
            <Navbar variant="dark" bg='dark' sticky='top' expand='md' className='px-5'>
                    <Navbar.Brand href='/'>Freaksy</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-4 mr-auto'>
                            <Nav.Item>
                                <Nav.Link href='/'>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/shop'>Shop</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='#about'>About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='#blog'>Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='#contact'>Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Nav>
                            <Nav.Item as='button' className='mx-2 bg-info border-0'>
                                <Nav.Link href='#contact'>Sign in</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default Header