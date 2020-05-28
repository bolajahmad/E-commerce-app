import React from 'react'

import './Search.scss'


const Search = ({ searchData }) => {
    const {className, label, type, ...otherProps} = searchData
    return (
        <div className='search-box'>
            <label className={`visually-hidden ${className}`} htmlFor={type}>
                <span>{label}</span>
            </label>
            <input type={type} name={type} id={type} {...otherProps} />
        </div>
    )
}

export default Search