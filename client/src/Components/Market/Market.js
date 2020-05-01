import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navigation from './Navigation'
import Filter from './Filters/Filters'


const Market = () => {
    return (
        <>
            <Container className='min-vh-100' fluid>
                <Row>
                    <Col sm={12} className='px-2 py-1' style={{background: 'rgb(6, 29, 13)', color: 'rgb(255, 246, 239)', fontSize: '0.65rem', fontWeight: 'bold'}}>
                        <Row>
                            <Col sm={2} className='text-center pl-3'>
                                <Row>
                                        <Col sm={3}>
                                            <FontAwesomeIcon icon={['fab', 'facebook']} size='md' color='rgb(255, 246, 239)' />
                                        </Col>

                                        <Col sm={3}>
                                        <FontAwesomeIcon icon={['fab', 'instagram']} size='md' color='rgb(255, 246, 239)' />
                                        </Col>

                                        <Col sm={3}>
                                        <FontAwesomeIcon icon={['fab', 'twitter']} size='md' color='rgb(255, 246, 239)' />
                                        </Col>

                                        <Col sm={3}>
                                        <FontAwesomeIcon icon={['fab', 'youtube']} size='md' color='rgb(255, 246, 239)' />
                                        </Col>
                                </Row>
                            </Col>

                            <Col sm={{span: '6', offset: '1'}}>
                                <Row>
                                    <Col sm={4} className='text-center'>
                                       Free Delivery Anywhere In Lagos
                                    </Col>

                                    <Col sm={3} className='text-center'>
                                        30 Days Return Policy
                                    </Col>

                                    <Col sm={2} className='text-center'>
                                        24/7 Support
                                    </Col>

                                    <Col sm={{span: '2', offset: '1'}} className='text-center'>
                                        Learn More
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={{span: '1', offset: '2'}} className='text-center'>
                                Blog
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={12} className='px-0'>
                        <Navigation />
                    </Col>
                </Row>

                <Row className='py-3 mx-4'>
                    <Col sm={12}>
                        <Row>
                            <Col sm={6}>
                                <Row>
                                    <Col sm={2}>
                                        New
                                    </Col>

                                    <Col sm={3}>
                                        Best Seller
                                    </Col>

                                    <Col sm={3}>
                                        Most Viewed
                                    </Col>

                                    <Col sm={4}>
                                        Devices & Laptops
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={6}>
                                <Row>
                                <Col sm={3}>
                                        Fabrics
                                    </Col>

                                    <Col sm={3}>
                                        Accessories
                                    </Col>

                                    <Col sm={3}>
                                        Electronics
                                    </Col>

                                    <Col sm={3}>
                                        All Categories
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            
                <Row className='mt-4'>
                    <Col sm={12} className='mt-4'>
                        <Row>
                            <Col sm={3} className='pl-2'>
                                <Filter />
                            </Col>

                            <Col sm={9}>
                                Men Wears
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Market