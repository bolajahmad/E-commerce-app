import React from 'react'

import { Navbar, Nav, Form, Row, Col } from 'react-bootstrap'


const Navigation = () => {
    return (
        <>
            <Navbar bg='dark' expand='md'>
                <Navbar.Brand href='/'>Gigi</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navigation" />
                <Navbar.Collapse id="main-navigation">
                    <Row>
                        <Nav className='ml-auto'>
                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Col sm={2}>
                                        <div className="justify-content-center text-center my-3 px-3">
                                            <img className="img-fluid mx-2" height='50' width='50'
                                            src={require("../../Pictures/search-icon.svg")}
                                            alt="Talos" />
                                        </div>
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Nav>
                    </Row>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation