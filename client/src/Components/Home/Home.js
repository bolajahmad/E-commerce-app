import React from 'react'

import { Container } from 'react-bootstrap'

import Header from './Header/Header'
import About from './About/About'
import Blog from './Blog/Blog'

import styled from 'styled-components'


const Home = () => {
    return (
        <Container style={{padding: '0'}} fluid>
            <Header />
            <About />
            <Blog />
        </Container>
    )
}

export default Home