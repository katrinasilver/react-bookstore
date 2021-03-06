import React, { Component } from 'react'

export default class EditBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.id,
      title: this.props.title,
      author: this.props.author,
      publisher: this.props.publisher,
      website: this.props.website,
      pages: this.props.pages,
      description: this.props.description
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    let book = {
      title: this.state.title,
      author: this.state.author,
      publisher: this.state.publisher,
      website: this.state.website,
      pages: this.state.pages,
      description: this.state.description
    }

    this.setState({
      title: '',
      author: '',
      publisher: '',
      website: '',
      pages: '',
      description: ''
    })

    this.props.editBook(this.state.id, book)
  }

  render() {
    return (
      <form className="mt-3" data-book={this.state.id} onSubmit={this.onSubmit}>
        <p className="lead">Editing {this.state.title}</p>
        <div className="form-group">
          <label htmlFor="title">title
            <input name="title" type="text" className="form-control" onChange={this.onChange} value={this.state.title} required />
          </label>

          <label htmlFor="author">author
            <input name="author" type="text" className="form-control" onChange={this.onChange} value={this.state.author} required />
          </label>

          <label htmlFor="publisher">publisher
            <input name="publisher" type="text" className="form-control" onChange={this.onChange} value={this.state.publisher} required />
          </label>

          <label htmlFor="website">website
            <input name="website" type="url" className="form-control" onChange={this.onChange} value={this.state.website} required />
          </label>

          <label htmlFor="pages">pages
            <input name="pages" type="number" className="form-control" onChange={this.onChange} value={this.state.pages} required />
          </label>

          <label htmlFor="description">description
            <textarea className="form-control" name="description" rows="3" onChange={this.onChange} value={this.state.description} required></textarea>
          </label>
        </div>
        <button type="submit" className="btn btn-outline-success">Submit</button>
      </form>
    )
  }
}
