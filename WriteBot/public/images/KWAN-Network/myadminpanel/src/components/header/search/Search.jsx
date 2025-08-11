
import React from 'react'

const Search = () => {
  return (
    <div>
      <div className="search-bar">
        <form
          className="search-form d-flex align-items-center ms-4" method="POST" action="#">
          <input className='search-input'
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          <button type="submit" title="search" className='search-btn ms-3'>
            <i className="bi bi-search"></i>
          </button>
        </form>
        
      </div>
    </div>
  )
}

export default Search
