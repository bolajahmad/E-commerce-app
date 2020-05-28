import React from 'react'

import NavItem from '../../Atoms/NavItem'
import Anchor from '../../Atoms/Anchor'

import './CollectionList.scss'


const CollectionList = () => {
    return (
        <nav className='collection-nav'>
            <NavItem>
                <Anchor href="/">Food</Anchor> &amp; <Anchor href="/">Drinks</Anchor>
            </NavItem>

            <NavItem>
                <Anchor href="/">Health</Anchor> &amp; <Anchor href="/">Beauty</Anchor>
            </NavItem>

            <NavItem>
                <Anchor href="/">Stores</Anchor>
            </NavItem>

            <NavItem>
                <Anchor href="/">Home</Anchor> &amp; <Anchor href="/">Office</Anchor>
            </NavItem>

            <NavItem>
                <Anchor href="/">Phones</Anchor> &amp; <Anchor href="/">Tablets</Anchor>
            </NavItem>

            <NavItem>
                <Anchor href="/">Computers</Anchor>
            </NavItem>

            <NavItem>
                <Anchor href="/">Electronics</Anchor>
            </NavItem>

            <NavItem>
                <Anchor href="/">Fashion</Anchor>
            </NavItem>

            <NavItem>
                <Anchor href="/">Games</Anchor>
            </NavItem>

            <NavItem>
                <Anchor href="/">View all categories</Anchor>
            </NavItem>
        </nav>
    )
}

export default CollectionList