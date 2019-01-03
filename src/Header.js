import React from 'react'

const Header = ({search, cartItems, onSearch, onChange}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a href="/" className="navbar-brand">Roger's Personal Bargain Books</a>
        <div className="navbar-collapse">
          <form className="navbar-nav mr-auto" onSubmit={onSearch}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search" value={search} onChange={onChange}/>
            <button type="submit" className="btn btn-primary my-2 my-sm-0">Search</button>
          </form>
          <a href="/" className="cart btn btn-success ml-lg-3 mb-lg-0 mb-2">
            Cart Total:
            <span className="total">
              ${ cartItems.reduce((val, acc) => val + acc.price, 0).toFixed(2) }
            </span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
