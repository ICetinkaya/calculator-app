import React from 'react'

 const Search = props => {
  return (
    <form>
      <input 
        name= "search"
        placeholder="Search User"
        value={props.search}
        onChange={props.onSearchChange}
      />
    </form>
  )
}

export default Search;