import React from 'react'

import './SearchButton.scss'


const SearchButton = ({ children, className }) => {
    return (
        <div className="searchButton-box">
            <button className={className}>
                {children}
            </button>
        </div>
    )
}

export default SearchButton