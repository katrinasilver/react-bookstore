import React, { Component } from 'react'
// import axios from 'axios'

export default class AddBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      author: '',
      publisher: '',
      pages: '',
      price: '',
      description: '',
      inCart: false
    }
  }

  makeId = () => {
    this.uniqueId = this.uniqueId || this.props.bookLength(1)
    return this.uniqueId++
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async (e) => {
    e.preventDefault()

    let book = {
      id: +this.makeId(),
      title: this.state.title,
      author: this.state.author,
      publisher: this.state.publisher,
      pages: this.state.pages,
      price: +this.state.price,
      description: this.state.description
    }

    this.setState({
      id: '',
      title: '',
      author: '',
      publisher: '',
      pages: '',
      price: '',
      description: ''
    })

    this.props.addOne(book)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <br />
        <h4>Add a Book</h4>
        <div className="form-group">

          <label htmlFor="title">title
            <input name="title" id="title" type="text" className="form-control" onChange={this.onChange} value={this.state.title} required />
          </label>

          <label htmlFor="author">author
            <input name="author" id="author" type="text" className="form-control" onChange={this.onChange} value={this.state.author} required />
          </label>

          <label htmlFor="publisher">publisher
            <input name="publisher" id="publisher" type="text" className="form-control" onChange={this.onChange} value={this.state.publisher} required />
          </label>

          <label htmlFor="pages">pages
            <input name="pages" id="pages" type="number" className="form-control" onChange={this.onChange} value={this.state.pages} required />
          </label>

          <label htmlFor="price">price
            <input name="price" id="price" type="number" className="form-control" onChange={this.onChange} value={this.state.price} required />
          </label>

          <label htmlFor="description">description
            <textarea className="form-control" id="description" name="description" rows="3" onChange={this.onChange} value={this.state.description} required></textarea>
          </label>
        </div>

        <button type="submit" className="btn btn-outline-success">Submit</button>
      </form>
    )
  }
}
