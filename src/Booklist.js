import React, { Component } from 'react'
import Book from './Book'
import axios from 'axios'

export default class Booklist extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [
        // { id: 0, title: 'A', author: 'Author 1', pages: '300', inCart: false },
      ]
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  // componentWillUpdate() {
  //   this.addCart()
  // }

  compare = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
  sortable = (e) => {
    let sort = e.target.value
    let array = [...this.state.books]
    array.sort(this.compare(sort))

    this.setState({
      books: array
    })
  }

  getBooks = async () => {
    try {
      const url = 'http://localhost:8082/api/books'
      const response = await axios.get(url)
      this.setState({
        books: response.data
      })
    } catch (err) {
      console.log(err)
    }
  }

  addCart = async (id) => {
    try {
      const url = `http://localhost:8082/api/books/cart/add/${id}`
      await axios.patch(url)
      this.getBooks()
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="mt-4 mb-4">
        <span className="sort-widget">Sort by:&nbsp;
          <input type="button" className="sort btn btn-outline-secondary" onClick={this.sortable} value="author" />&nbsp;
          <input type="button" className="sort btn btn-outline-secondary" onClick={this.sortable} value="publisher" />&nbsp;
          <input type="button" className="sort btn btn-outline-secondary" onClick={this.sortable} value="title" />
        </span>

        <ul className="mt-3 list-group">
          {
            this.state.books.map(book =>
              <Book
                key={book.id}
                {...book}
                addCart={() => this.addCart(book.id)}
              />
            )
          }
        </ul>
      </div>
    )
  }
}
