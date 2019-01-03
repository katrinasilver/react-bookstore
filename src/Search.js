import React from 'react'

const Search = (props) => {
  return (
    <form className="col-lg-8 p-0 form-inline" onSubmit={props.onSearch}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search" onChange={props.onChange} />
      <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Find Book</button>&nbsp;
    </form>
  )
}

export default Search
