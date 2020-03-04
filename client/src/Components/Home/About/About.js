import React from 'react'

import { Row, Col, Card } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faQuestion,  } from '@fortawesome/free-solid-svg-icons'


const CardStyles = {
    height: '20em',
    color: 'rgb(146, 146, 146)',
    fontSize: '0.7em',
    margin: '2em',
    padding: '3em 2em 2em',
    textAlign: 'center'
}

const About = () => {
    return (
        <>
           <Row id='about'>
                <Col>
                    <Row>
                        <Col md={4} sm={12} classname='text-center p-4'>
                            <Card classname='text-center' style={CardStyles}>
                                <Card.Subtitle as='h4'><FontAwesomeIcon icon={faShippingFast} size='3x'  /></Card.Subtitle>
                                <Card.Title as='h2'>Free and Quick Shipping</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                            </Card>
                        </Col>

                        <Col md={4} sm={12} classname='text-center p-4'>
                            <Card classname='text-center' style={CardStyles}>
                                <Card.Subtitle as='h4'><FontAwesomeIcon icon={faQuestion} size='3x' /></Card.Subtitle>
                                <Card.Title as='h2'>24/7 Customer Support</Card.Title>
                                <Card.Text>Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh</Card.Text>
                            </Card>
                        </Col>

                        <Col md={4} sm={12} classname='text-center'>
                            <Card classname='text-center m-4 p-3' style={CardStyles}>
                                <Card.Subtitle as='h4'><FontAwesomeIcon icon={faShippingFast} size='3x' /></Card.Subtitle>
                                <Card.Title as='h2'>Secure and Safe Payment Platform</Card.Title>
                                <Card.Text>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.</Card.Text>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col as='h2' sm={12}>Recommendations</Col>
                        <Col>
                            
                        </Col>
                    </Row>
                </Col>   
            </Row> 
        </>
    )
}

export default About