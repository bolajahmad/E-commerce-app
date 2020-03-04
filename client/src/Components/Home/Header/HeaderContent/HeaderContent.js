import React from 'react'

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Card, Button } from 'react-bootstrap'

import OverlayTwo from '../../../../Pictures/OverlayTwo.png' 
import OverlayThree from '../../../../Pictures/OverlayThree.png' 


const HeaderContent = () => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaytSpeed: 3500,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    }

    const styles = {
        CardStyles: {
            position: 'relative', 
            top: '30%', 
            background: 'none', 
            color: 'rgb(200, 200, 200)', 
            border: 'none', 
            lineHeight: '3em'
        },
        ImageStylesThree: {
            height: '20%', 
            width: '50%', 
            float: 'right',
            zIndex: '-1',
        },
        ImageStylesTwo: {
            height: '20%', 
            width: '50%', 
            float: 'right',
            zIndex: '-1',
        },
        OverlayContentStyles: { 
            width: '70%'
        }
    };


    return (
        <>
            <Slider {...settings}>
                <div>
                    <Card style={styles.CardStyles}>
                        <Card.Body>
                            <Card.Img src={OverlayThree} style={styles.ImageStylesThree} />
                            <Card.ImgOverlay style={styles.OverlayContentStyles}>
                                <Card.Subtitle as='p'><em style={{backgroundColor: 'rgb(40, 40, 40)', color: 'rgb(146, 146, 146)', fontSize: '0.6rem'}}># New Arrival</em></Card.Subtitle>
                                <Card.Title>Check out the latest Balenciaga Drip series</Card.Title>
                                <Card.Text style={{lineHeight: '2em'}}>Look saucy and kingly while rocking these limited edition fresh pair of Balenciaga-Lebron collaboration.</Card.Text>
                                <Button variant='warning'>Explore Now</Button>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={styles.CardStyles}>
                        <Card.Body>
                            <Card.Img src={OverlayTwo} style={styles.ImageStylesTwo} />
                            <Card.ImgOverlay style={styles.OverlayContentStyles}>
                                <Card.Subtitle as='p'><em style={{backgroundColor: 'rgb(40, 40, 40)', color: 'rgb(146, 146, 146)', fontSize: '0.6rem'}}># New Arrival</em></Card.Subtitle>
                                <Card.Title>Check out the latest Balenciaga Drip series</Card.Title>
                                <Card.Text style={{lineHeight: '2em'}}>Look saucy and kingly while rocking these limited edition fresh pair of Balenciaga-Lebron collaboration.</Card.Text>
                                <Button variant='warning'>Explore Now</Button>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </div>
            </Slider>
        </>
    )
}

export default HeaderContent