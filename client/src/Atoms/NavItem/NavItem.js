import React from 'react'

import './NavItem.scss'


const NavItem = ({ href, children }) => {
    return (
        <div>
            <li>
                {children}
            </li>
        </div>
    )
}

export default NavItem