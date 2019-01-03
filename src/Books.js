import React, { Component } from 'react';
import Header from './Header'
import Booklist from './Booklist'
import axios from 'axios'
export default class Books extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cartItems: [],
      search: ''
    }
  }

  /*
    ask:
    * better way to render filter buttons
    * reduce does not update when item is removed from cart
    * the right way implement the search - currently on Books.js and not working
    -- should lifecycle method be added to Books.js?
    -- if it needs to move to Booklist, how to I pass it as props to the header? (it's a sibling component)
    * how do you persist cart items without a GET method for them?
  */

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSearch = async (e) => {
    e.preventDefault()
    try {
      const url = `http://localhost:8082/api/books/`
      const response = await axios.get(url)
      const data = await response.data.filter(book => book.title === this.state.search || book.author === this.state.search)

      this.setState({
        search: ''
      })
    } catch (err) {
      console.log(err)
    }
  }

  addBook = (book) => {
    this.setState({
      cartItems: [...this.state.cartItems, book]
    })
  }

  removeBook = (book) => {
    let removeOne = this.state.cartItems.filter(b => b !== book)
    this.setState({
      cartItems: removeOne
    })
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Header cartItems={this.state.cartItems} onSearch={this.onSearch} onChange={this.onChange} />
        </header>

        <div className="container">
          <Booklist addBook={this.addBook} removeBook={this.removeBook}/>
        </div>

        <footer className="app-footer"></footer>
      </div>
    )
  }
}
