import React from 'react'

import Search from '../../Atoms/InputFields/Search'
import SearchButton from '../../Atoms/Buttons/SearchButton'

import './SearchBox.scss'


const SearchBox = () => {
    const searchData = {
        label: "search product",
        className: "search",
        type: "search", 
        name: "search", 
        id: "search", 
        placeholder: "enter product to search"
    }
    
    return (
        <div className='search-box-molecule'>
            <Search searchData={searchData} />
            <SearchButton className='button-search'>Search Product</SearchButton>   
        </div>
    )
}

export default SearchBox