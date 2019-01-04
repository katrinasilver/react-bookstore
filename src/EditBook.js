import React, { Component } from 'react'

export default class EditBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.id,
      title: this.props.title,
      author: this.props.author,
      publisher: this.props.publisher,
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
      pages: this.state.pages,
      description: this.state.description
    }

    this.setState({
      title: '',
      author: '',
      publisher: '',
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

// const EditBook = ({ id, title, author, pages, description, price, publisher, onChange, editBook }) => {
//   return (
//     <form className="mt-3" data-book={id} onSubmit={editBook}>
//       <p className="lead">Editing {title}</p>
//       <div className="form-group">
//         <label htmlFor="title">title
//           <input name="title" type="text" className="form-control" onChange={onChange} value={title} required/>
//         </label>

//         <label htmlFor="author">author
//           <input name="author" type="text" className="form-control" onChange={onChange} value={author} required/>
//         </label>

//         <label htmlFor="publisher">publisher
//           <input name="publisher" type="text" className="form-control" onChange={onChange} value={publisher} required/>
//         </label>

//         <label htmlFor="pages">pages
//           <input name="pages" type="number" className="form-control" onChange={onChange} value={pages} required/>
//         </label>

//         <label htmlFor="price">price
//           <input name="price" type="number" className="form-control" onChange={onChange} value={price} required/>
//         </label>

//         <label htmlFor="description">description
//           <textarea className="form-control" name="description" rows="3" onChange={onChange} value={description} required></textarea>
//         </label>
//       </div>

//       <button type="submit" className="btn btn-outline-success">Submit</button>
//     </form>
//   )
// }

// export default EditBook
