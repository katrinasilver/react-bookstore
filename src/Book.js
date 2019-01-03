import React from 'react'

const Book = ({id, title, author, pages, description, price, publisher, addCart, removeCart }) => {
  return (
    <li className="list-group-item" data-book={id}>
      <h3>{title}</h3>
      <small className="initialism">by {author}</small> <small className="text-muted">{pages} pages, {publisher}, ID: {id}</small>
        <h4>${price}</h4>
        <p className="text-muted">{description}</p>
        <button onClick={addCart} className="btn btn-outline-success">Add to Cart</button>&nbsp;
        <button onClick={removeCart} className="btn btn-outline-danger">Remove from Cart</button>
    </li>
  )
}

export default Book
