import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

const Header = ({ cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container p-0">
        <a href="/" className="navbar-brand">Bargain Bin Bookstore</a>
        <div className="cart-container">
          <a href="/" className="cart btn btn-primary ml-lg-3 mb-lg-0 mb-2">
            <MdShoppingCart />
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
