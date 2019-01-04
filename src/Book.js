import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { MdRemoveShoppingCart } from 'react-icons/md'

const Book = ({id, title, author, pages, description, price, publisher, addCart, removeCart }) => {
  return (
    <li className="list-group-item" data-book={id}>
      <h3>{title}</h3>
      <small className="initialism">by {author}</small> <small className="text-muted">{pages} pages, {publisher}, ID: {id}</small>
        <h4>${price}</h4>
        <p className="text-muted">{description}</p>
      <button onClick={addCart} className="btn btn-success"><MdShoppingCart /></button>&nbsp;
        <button onClick={removeCart} className="btn btn-outline-success"><MdRemoveShoppingCart /></button>
    </li>
  )
}

export default Book
