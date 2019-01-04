import React, { Component } from 'react'
import Book from './Book'
import EditBook from './EditBook'
import SortButton from './SortButton'
import Search from './Search'
import AddBook from './AddBook'
import axios from 'axios'
const url = 'http://localhost:8082/api/books'

export default class Booklist extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [
        { id: 0, title: 'A', author: 'Author 1', pages: '300', inCart: false },
      ],
      keys: [],
      search: '',
      editing: false
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  bookLength = (i) => this.state.books.length + i

  compare = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0

  sortable = (e) => {
    let sort = e.target.value
    this.setState({
      books: [...this.state.books].sort(this.compare(sort))
    })
  }

  onChange = (e) => {
    if (!e.target.value) this.getBooks()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  editMode = (id) => {
    let editing = this.state.books.filter(book => book.id === id)
    this.setState({
      books: [...editing],
      editing: true
    })
  }

  addBook = async (book) => {
    try {
      await axios.post(url, book)
      this.getBooks()
    } catch (err) {
      console.log(err)
    }
  }

  getBooks = async () => {
    try {
      const response = await axios.get(url)
      this.setState({
        books: response.data,
        keys: ['author', 'publisher', 'title']
        //keys: Object.keys(response.data) // use if you want all the keys
      })
    } catch (err) {
      console.log(err)
    }
  }

  editBook = async (id, book) => {
    try {
      await axios.put(`${url}/${id}`, book)
      this.setState({
        editing: false
      })
      this.getBooks()
    } catch (err) {
      console.log(err)
    }
  }

  removeBook = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`)
      this.props.removeCart(response.data)
      this.getBooks()
    } catch (err) {
      console.log(err)
    }
  }

  onSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(url)
      const data = await response.data.filter(book => Object.values(book).includes(this.state.search))
      this.setState({
        books: data
      })
    } catch (err) {
      console.log(err)
    }
  }

  addCart = async (id) => {
    try {
      const response = await axios.patch(`${url}/cart/add/${id}`)
      this.props.addCart(response.data)
      this.getBooks()
    } catch (err) {
      console.log(err)
    }
  }

  removeCart = async (id) => {
    try {
      const response = await axios.patch(`${url}/cart/remove/${id}`)
      this.props.removeCart(response.data)
      this.getBooks()
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="mt-4 mb-4 row">
        <Search onSearch={this.onSearch} onChange={this.onChange} />
        <span className="sort-widget text-right col-lg-4">
          Sort by:&nbsp;{this.state.keys.map(ele => <SortButton onClick={this.sortable} sortBy={ele} key={ele} />)}
        </span>

        <ul className="col-lg-8 mt-3 pl-0 list-group">
          {
            this.state.books.map(book => this.state.editing ?
              <EditBook
                key={book.id} {...book}
                editBook={this.editBook}
              />
            :
              <Book
                key={book.id} {...book}
                addCart={() => this.addCart(book.id)}
                removeCart={() => this.removeCart(book.id)}
                editMode={() => this.editMode(book.id)}
                removeBook={() => this.removeBook(book.id)}
              />
            )
          }
        </ul>

        <div className="addBook col-lg-4 pr-0">
          <AddBook addBook={this.addBook} bookLength={this.bookLength} />
        </div>

      </div>
    )
  }
}
