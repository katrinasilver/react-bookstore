import React from 'react'
import { MdShoppingCart, MdRemoveShoppingCart, MdDelete, MdEdit } from 'react-icons/md'

const Book = ({id, title, author, pages, description, price, publisher, website, addCart, removeCart, removeBook, editMode }) => {
  return (
    <li className="list-group-item" data-book={id}>
      <h3>{title}</h3>
      <small className="initialism">by {author}</small> <small className="text-muted">{pages} pages, {publisher}, ID: {id}</small>
        <h4>${price}</h4>
      <p className="text-muted">{description}&nbsp;
        <a href={website}>
          <small>{website}</small>
        </a>
      </p>

      <button onClick={addCart} className="btn btn-info"><MdShoppingCart /></button>&nbsp;
      <button onClick={removeCart} className="btn btn-outline-info"><MdRemoveShoppingCart /></button>&nbsp;
      <button onClick={editMode} className="btn btn-outline-info"><MdEdit /></button>&nbsp;
      <button onClick={removeBook} className="btn btn-outline-info"><MdDelete /></button>&nbsp;
    </li>
  )
}

export default Book
