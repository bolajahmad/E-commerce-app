import React from 'react'

import { Row, Col, Card, Button } from 'react-bootstrap'


const Blog = () => {
    const CardStyles = {
        height: '300px',
    };

    return (
        <>
            <Row id='blog'>
                <Col as='h2' sm={12} className='text-center my-3'>Blog</Col>
                
                <Col sm={12}>
                    <Col as='p' sm={12}>Feeling confused or out of style and do not know what clothings to go for. Worry no more, <em><a href='#blog'>Fraeksy store stylists</a></em> have put together a couple of recommendations that are sure to give you the sort of sauce that will make you attractive to even the most gloomy creature. <em><a href='#blog'>See the full catalog...</a></em></Col>

                    <Row className='mx-3 my-2'>
                        <Col lg={4} md={6} sm={12} >
                            <Card style={CardStyles}>
                                <Card.Header style={{height: '10%'}}>
                                    <Card.Subtitle>Dress and slay like a Peacock</Card.Subtitle>
                                </Card.Header>
                                <Card.Body style={{height: '75%'}}>
                                    <p style={{height: '60%', overflow: 'hidden'}}>
                                        Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.
                                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada.                           
                                    </p>
                                   <Button variant='info'>Read More...</Button>
                                </Card.Body>
                                <Card.Footer as='p' style={{height: '15%'}}>
                                    <small>Posted By: Dotun Collins</small><br />
                                    <small>Date: March 3rd, 2020</small>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} >
                            <Card style={CardStyles}>
                                <Card.Header style={{height: '10%'}}>
                                    <Card.Subtitle>Rock your shorts with the confidence of a star</Card.Subtitle>
                                </Card.Header>
                                <Card.Body style={{height: '75%'}}>
                                    <p style={{height: '60%', overflow: 'hidden'}}>
                                        Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.                                
                                        Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.                                
                                    </p>
                                    <Button variant='info'>Read More...</Button>
                                </Card.Body>
                                <Card.Footer as='p' style={{height: '15%'}}>
                                    <small>Posted By: Slim Pauper</small><br />
                                    <small>Date: February 23rd, 2020</small>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12} >
                            <Card style={CardStyles}>
                                <Card.Header style={{height: '10%'}}>
                                    <Card.Subtitle>Make the Best decisions for your headwear</Card.Subtitle>
                                </Card.Header>
                                <Card.Body style={{height: '75%'}}>
                                    <p style={{height: '60%', overflow: 'hidden'}}> 
                                        Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.                                
                                        Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.                                
                                    </p>
                                   <Button variant='info'>Read More...</Button>
                                </Card.Body>
                                <Card.Footer as='p' style={{height: '15%'}}>
                                    <small>Posted By: Kope Codeine</small><br />
                                    <small>Date: February 21st, 2020</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col className='bg-secondary py-4'>                    
                    <Col as='h3' sm={12} className='text-center py-2' style={{fontSize: '1rem', textTransform: 'uppercase'}}>Keep up with the latest fashion trend news</Col>

                    <Row className='mx-3 my-2'>
                        <Col lg={4} md={6} sm={12} className='text-center' style={{color: 'silver'}}>
                            <h3 style={{color: 'rgb(44, 46, 63)'}}>Watch out for the next Nike-CR7 partnership</h3>
                            <p>
                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.
                                Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.
                            </p>
                            <Button>
                                Pre-order your customized or regular pair
                            </Button>
                        </Col>

                        <Col lg={4} md={6} sm={12} className='text-center' style={{color: 'silver'}}>
                            <h3 style={{color: 'rgb(44, 46, 63)'}}>Watch out for the next Nike-CR7 partnership</h3>
                            <p>
                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.
                                Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.
                            </p>
                            <Button>
                                Pre-order your customized or regular pair
                            </Button>
                        </Col>

                        <Col lg={4} md={6} sm={12} className='text-center' style={{color: 'silver'}}>
                            <h3 style={{color: 'rgb(44, 46, 63)'}}>Watch out for the next Nike-CR7 partnership</h3>
                            <p>
                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.
                                Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.
                            </p>
                            <Button>
                                Pre-order your customized or regular pair
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Blog