import React from 'react'

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Row, Col, Card, Image } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faQuestion,  } from '@fortawesome/free-solid-svg-icons'

import RecomOne from '../../../Pictures/RecomOne.jpg'
import RecomTwo from '../../../Pictures/RecomTwo.jpg'
import RecomThree from '../../../Pictures/RecomThree.jpg'
import RecomFour from '../../../Pictures/RecomFour.jpg'


const About = () => {
    const CardStyles = {
        height: '20em',
        color: 'rgb(4, 48, 4)',
        fontSize: '0.7em',
        margin: '2em',
        padding: '3em 2em 2em',
        textAlign: 'center'
    };

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
                        <Recommendations />
                    </Row>
                </Col>   
            </Row> 
        </>
    )
}


const Recommendations = () => {
    const settings = {
        dots: false,
        autoplay: true,
        autoplaytSpeed: 3500,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <Col as='h2' sm={12} className='text-center m-0'>Recommendations</Col>
            <Col className='recom p-5'>
                <Slider {...settings}>
                    <Row>
                        <Col md={4}>
                            <Image src={RecomOne} roundedCircle height='150' width='150' />
                            <div>
                                <h3>Jamal Kareem</h3>
                                <p>Architecture</p>
                            </div>
                            <div style={{clear: 'both'}}>
                                <p>The shoes I got from freaksy stores was so cheap I thiught it was a fake but I've been using it for months and there is no loss of quality. Top-notch stuff</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Image src={RecomThree} roundedCircle height='150' width='150' />
                            <div>
                                <h3>Aisha Idiom S.</h3>
                                <p>Pornstar</p>
                            </div>
                            <div>
                                <p>I got my thongs from Freaksy and every customer at the club has been wanting to fuck me</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Image src={RecomFour} roundedCircle height='150' width='150' />
                            <div>
                                <h3>Johnny Doe</h3>
                                <p>Website devlopper</p>
                            </div>
                            <div>
                                <p>Nice store. Delivery was flawless and quick. I even got a refund on my shirt because I chose a bigger pair.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Image src={RecomTwo} roundedCircle height='150' width='150' />
                            <div>
                                <h3>Zubairu Dumbo</h3>
                                <p>Lawyer</p>
                            </div>
                            <div>
                                <p>Only Place i go to for all my clothings. They are just perfect.</p>
                            </div>
                        </Col>
                    </Row>
                </Slider>
            </Col>
        </>
    )
}

export default About