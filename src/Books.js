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

  render() {
    return (
      <div className="app">

        <header className="app-header">
         <Header />
        </header>

        <div className="container">
          <Booklist />
        </div>

        <footer className="app-footer"></footer>
      </div>
    )
  }
}
