import React, { Component } from 'react';
import Header from './Header'
import Booklist from './Booklist'
export default class Books extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cartItems: []
    }
  }

  addBook = (book) => {
    this.setState({
      cartItems: [...this.state.cartItems, book]
    })
  }

  removeBook = (book) => {
    let books = this.state.cartItems.filter(b => b.id !== book.id)
    this.setState({
      cartItems: [...books]
    })
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Header cartItems={this.state.cartItems} />
        </header>

        <div className="container">
          <Booklist addBook={this.addBook} removeBook={this.removeBook}/>
        </div>

        <footer className="app-footer"></footer>
      </div>
    )
  }
}
