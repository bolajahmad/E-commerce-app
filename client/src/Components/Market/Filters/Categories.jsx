import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Row, Col, Accordion } from 'react-bootstrap'

import { filterTextStyles } from '../Styles'


const Category = () => {
    return (
        <>
            <Router>
                <Accordion defaultActiveKey="categories">
                    <Row className='my-3 mx-auto'>
                        <Col sm={8} style={filterTextStyles}>
                            <b>Categories</b>
                        </Col>

                        <Col as='p' sm={{span: '2', offset: '2'}}>
                            <Accordion.Toggle eventKey="categories" style={{cursor: 'pointer'}}>
                                <FontAwesomeIcon icon='plus' color='rgb(15, 48, 30)' />
                            </Accordion.Toggle>
                        </Col>

                        <Accordion.Collapse eventKey="categories">
                            <Row className='pl-3'>
                                <ul>
                                    <li><Link to='/women-fashion'>Women Fashion</Link></li>
                                    <li><Link to='/men-fahion'>Men Fashion</Link></li>
                                    <li><Link to='/kids'>Kids</Link></li>
                                    <li><Link to='/textiles'>Textiles</Link></li>
                                    <li><Link to='/shoes'>Shoes</Link></li>
                                    <li><Link to='/curtains'>Curtains</Link></li>
                                    <li><Link to='/bedspraeds'>Bedspreads</Link></li>
                                    <li><Link to='/new-arrivals'>New Arrivals</Link></li>
                                    <li><Link to='/best-selling'>Best Selling</Link></li>
                                </ul>
                            </Row>
                        </Accordion.Collapse>
                    </Row>
                </Accordion>
            </Router>
        </>
    )
}

export default Category