import React from 'react'

const Header = ({ cartItems }) => {
  console.log('hello');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a href="/" className="navbar-brand">Roger's Personal Bargain Books</a>
        <div className="cart-container">
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
