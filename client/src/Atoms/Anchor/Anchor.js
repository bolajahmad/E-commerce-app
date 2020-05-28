import React from 'react'

import './Anchor.scss'


const Anchor = ({ href, children }) => {
    return (
        <span classsName="anchor-box">
            <a className="anchor" href={href}>
                {children}
            </a>
        </span>
    )
}

export default Anchor