import React from 'react'

import CollectionList from '../../Organisms/CollectionList'

import Navbar from '../../Molecules/Navbar'

import './Home.scss'


const Header = () => {
    return (
        <div>
            <Navbar />

            <CollectionList />
        </div>
    )
}

export default Header