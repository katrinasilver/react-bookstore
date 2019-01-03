import React from 'react'

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a href="/" className="navbar-brand">Roger's Personal Bargain Bin Bookstore</a>
        <div className="navbar-collapse">
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
          </ul> */}
          <form className="navbar-nav mr-auto">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button type="submit" className="btn btn-primary my-2 my-sm-0">Search</button>
          </form>
          <a href="/" className="cart btn btn-success ml-lg-3 mb-lg-0 mb-2">
            Cart Total: <span className="total">
              ${props.cartItems.reduce((val, acc) => val + acc.price, 0)}
            </span>
          </a>
        </div>
        </div>
    </nav>
  )
}

export default Header
