import React from 'react'

const Book = ({title, author, pages, description, price, publisher}) => {
  return (
    <li className="list-group-item">
      <h3>{title}</h3>
      <small className="initialism">by {author}</small> <small className="text-muted">{pages} pages, {publisher}</small>
      <h4>${price}</h4>
      <p className="text-muted">{description}</p>
      <button className="btn btn-outline-success">Add to Cart</button>
    </li>
  )
}

export default Book
