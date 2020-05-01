import React from 'react'

import { Navbar, Nav, Form } from 'react-bootstrap'


const Navigation = () => {
    return (
        <>
            <Navbar bg='light' expand='md'>
                <Navbar.Brand href='/' className='ml-3'>Gigi</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navigation" />
                <Navbar.Collapse id="main-navigation">
                    <Nav className='mx-auto'>
                        <Nav.Item>
                            <Form inline>
                                <Form.Control type="text" placeholder="Search" className="mr-sm-0" />
                                <div className="justify-content-center text-center px-1">
                                    <img className="img-fluid" width="50" height="50"
                                    src={require("../../Pictures/search-icon.svg")}
                                    alt="Talos" />
                                </div>
                            </Form>  
                        </Nav.Item>
                    </Nav>

                    <Nav className='mr-3'>
                            <Nav.Item className='ml-2'>
                                <div className="justify-content-center text-center px-1">
                                    <figure className='mx-0'>
                                        <img className="img-fluid" width="40" height="40"
                                        src={require("../../Pictures/avatar.svg")}
                                        alt="Talos" />
                                        <figcaption style={{fonstSize: '0.6rem', fonstWeight: '600', color: 'rgba(245, 112, 10, 0.75)'}}>Log In</figcaption>
                                    </figure>
                                </div>
                            </Nav.Item>

                            <Nav.Item className='mx-auto mb-0 pb-0'>
                                <div className="justify-content-center text-center px-1">
                                    <figure>
                                        <img className="img-fluid" width="40" height="40"
                                        src={require("../../Pictures/wishlist-icon.svg")}
                                        alt="Talos" />
                                        <figcaption style={{fonstSize: '0.6rem', fonstWeight: '600', color: 'rgba(245, 112, 10, 0.75)'}}>Wishlist</figcaption>
                                    </figure>
                                </div>
                            </Nav.Item>

                            <Nav.Item className='mr-2'>
                                <div className="justify-content-center text-center px-1">
                                    <figure>
                                        <img className="img-fluid" width="40" height="40"
                                        src={require("../../Pictures/cart-icon.svg")}
                                        alt="Talos" />
                                        <figcaption style={{fonstSize: '0.6rem', fonstWeight: '600', color: 'rgba(245, 112, 10, 0.75)'}}>Cart</figcaption>
                                    </figure>
                                </div>
                            </Nav.Item>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation