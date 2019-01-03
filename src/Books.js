import React, { Component } from 'react';
import Header from './Header'
import Booklist from './Booklist'

export default class Books extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cartItems : []
    }
  }

  addBook = (book) => {
    this.setState({
      cartItems: [...this.state.cartItems, book]
    })
  }

  render() {
    return (
      <div className="app">

        <header className="app-header">
         <Header cartItems={this.state.cartItems} />
        </header>

        <div className="container">
          <Booklist addBook={this.addBook} />
        </div>

        <footer className="app-footer"></footer>
      </div>
    )
  }
}
