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

  getBooks = async () => {
    try {
      const url = 'http://localhost:8082/api/books'
      const response = await axios.get(url)
      const data = await response.data.sort()
      this.setState({
        books: data
      })
    } catch (err) {
      console.log(err)
    }
  }

  compare = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0

  sortable = (e) => {
    let sort = e.target.value
    let array = [...this.state.books]
    array.sort(this.compare(sort))

    this.setState({
      books: array
    })
  }

  render() {
    return (
      <div className="mt-4 mb-4">
        <span className="sort-widget">Sort by:&nbsp;
          <input type="button" className="author btn btn-outline-secondary" value="author" onClick={this.sortable} />&nbsp;
          <input type="button" className="title btn btn-outline-secondary" value="publisher" onClick={this.sortable} />&nbsp;
          <input type="button" className="title btn btn-outline-secondary" value="title" onClick={this.sortable} />&nbsp;
        </span>
        <ul className="mt-3 list-group">
          {
            this.state.books.map(book =>
              <Book
                key={book.id}
                {...book}
              />
            )
          }
        </ul>
      </div>
    )
  }
}
