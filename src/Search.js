import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = (props) => {
  return (
    <form className="col-lg-4 p-0 form-inline" onSubmit={props.onSearch}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search" onChange={props.onChange} />
      <button type="submit" className="btn btn-primary my-2 my-sm-0"><FaSearch /></button>&nbsp;
    </form>
  )
}

export default Search
