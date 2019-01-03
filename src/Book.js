import React from 'react'

const Book = ({id, title, author, pages, description, price, publisher, addCart }) => {
  return (
    <li className="list-group-item" data-book={id}>
      <h3>{title} id: {id}</h3>
        <small className="initialism">by {author}</small> <small className="text-muted">{pages} pages, {publisher}</small>
        <h4>${price}</h4>
        <p className="text-muted">{description}</p>
        <button onClick={addCart} className="btn btn-outline-success">Add to Cart</button>
    </li>
  )
}

export default Book
