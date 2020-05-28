import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import { Row, Col, Accordion, ListGroup } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Category from './Categories'
import { filterTextStyles } from '../Styles'


const Filter = () => {
    return (
        <>
            <Router>
                <Row style={{background: 'rgba(245, 112, 10, 0.425)'}}>
                    <Col sm={12}>
                        <Category />

                        <Accordion defaultActiveKey="rating">
                            <Row className='my-3 mx-auto'>
                                <Col sm={8} style={filterTextStyles}>
                                    <b>Rating</b>
                                </Col>

                                <Col as='p' sm={{span: '2', offset: '2'}}>
                                    <Accordion.Toggle eventKey="rating" style={{cursor: 'pointer'}}>
                                        <FontAwesomeIcon icon='plus' color='rgb(15, 48, 30)' />
                                    </Accordion.Toggle>
                                </Col>

                                <Accordion.Collapse eventKey="rating">
                                    <Row>
                                        <ul>
                                            <li><Link to='4-star'>
                                                <em style={{fontSize: '0.7rem'}}>
                                                    <FontAwesomeIcon icon='star' color='rgb(94, 255, 166)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(94, 255, 166)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(94, 255, 166)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(94, 255, 166)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(225, 225, 225)' /> & UP
                                                </em>
                                            </Link></li>

                                            <li><Link to='4-star'>
                                                <em style={{fontSize: '0.7rem'}}>
                                                    <FontAwesomeIcon icon='star' color='rgb(94, 255, 166)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(94, 255, 166)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(94, 255, 166)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(225, 225, 225)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(225, 225, 225)' /> & UP
                                                </em>
                                            </Link></li>

                                            <li><Link to='4-star'>
                                                <em style={{fontSize: '0.7rem'}}>
                                                    <FontAwesomeIcon icon='star' color='rgb(94, 255, 166)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(94, 255, 166)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(225, 225, 225)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(225, 225, 225)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(225, 225, 225)' /> & UP
                                                </em>
                                            </Link></li>

                                            <li><Link to='4-star'>
                                                <em style={{fontSize: '0.7rem'}}>
                                                    <FontAwesomeIcon icon='star' color='rgb(94, 255, 166)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(225, 225, 225)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(225, 225, 225)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(225, 225, 225)' /> 
                                                    <FontAwesomeIcon icon='star' color='rgb(225, 225, 225)' /> & UP
                                                </em>
                                            </Link></li>
                                        </ul>
                                    </Row>
                                </Accordion.Collapse>
                            </Row>
                        </Accordion>

                        <Accordion defaultActiveKey="color">
                            <Row className='my-3 mx-auto'>
                                <Col sm={8} style={filterTextStyles}>
                                    <b>Color</b>
                                </Col>

                                <Col as='p' sm={{span: '2', offset: '2'}}>
                                    <Accordion.Toggle eventKey="color" style={{cursor: 'pointer'}}>
                                        <FontAwesomeIcon icon='plus' color='rgb(15, 48, 30)' />
                                    </Accordion.Toggle>
                                </Col>

                                <Accordion.Collapse eventKey="color">
                                    <Row>
                                        <ListGroup>
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        </ListGroup>
                                    </Row>
                                </Accordion.Collapse>
                            </Row>
                        </Accordion>

                        <Accordion defaultActiveKey="price">
                            <Row className='my-3 mx-auto'>
                                <Col sm={8} style={filterTextStyles}>
                                    <b>Price</b>
                                </Col>

                                <Col as='p' sm={{span: '2', offset: '2'}}>
                                    <Accordion.Toggle eventKey="price" style={{cursor: 'pointer'}}>
                                        <FontAwesomeIcon icon='plus' color='rgb(15, 48, 30)' />
                                    </Accordion.Toggle>
                                </Col>

                                <Accordion.Collapse eventKey="price">
                                    <Row>
                                        <ListGroup>
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        </ListGroup>
                                    </Row>
                                </Accordion.Collapse>
                            </Row>
                        </Accordion>

                        <Accordion defaultActiveKey="size">
                            <Row className='my-3 mx-auto'>
                                <Col sm={8} style={filterTextStyles}>
                                    <b>Size</b>
                                </Col>

                                <Col as='p' sm={{span: '2', offset: '2'}}>
                                    <Accordion.Toggle eventKey="size" style={{cursor: 'pointer'}}>
                                        <FontAwesomeIcon icon='plus' color='rgb(15, 48, 30)' />
                                    </Accordion.Toggle>
                                </Col>

                                <Accordion.Collapse eventKey="size">
                                    <Row>
                                        <ListGroup>
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        </ListGroup>
                                    </Row>
                                </Accordion.Collapse>
                            </Row>
                        </Accordion>

                        <Accordion defaultActiveKey="vendors">
                            <Row className='my-3 mx-auto'>
                                <Col sm={8} style={filterTextStyles}>
                                    <b>Vendors</b>
                                </Col>

                                <Col as='p' sm={{span: '2', offset: '2'}}>
                                    <Accordion.Toggle eventKey="vendors" style={{cursor: 'pointer'}}>
                                        <FontAwesomeIcon icon='plus' color='rgb(15, 48, 30)' />
                                    </Accordion.Toggle>
                                </Col>

                                <Accordion.Collapse eventKey="vendors">
                                    <Row>
                                        <ListGroup>
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        </ListGroup>
                                    </Row>
                                </Accordion.Collapse>
                            </Row>
                        </Accordion>

                        <Accordion defaultActiveKey="tags">
                            <Row className='my-3 mx-auto'>
                                <Col sm={8} style={filterTextStyles}>
                                    <b>Tags</b>
                                </Col>

                                <Col as='p' sm={{span: '2', offset: '2'}}>
                                    <Accordion.Toggle eventKey="tags" style={{cursor: 'pointer'}}>
                                        <FontAwesomeIcon icon='plus' color='rgb(15, 48, 30)' />
                                    </Accordion.Toggle>
                                </Col>

                                <Accordion.Collapse eventKey="tags">
                                    <Row>
                                        <ListGroup>
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        </ListGroup>
                                    </Row>
                                </Accordion.Collapse>
                            </Row>
                        </Accordion>
                    </Col>
                </Row>
            </Router>
        </>
    )
}

export default Filter