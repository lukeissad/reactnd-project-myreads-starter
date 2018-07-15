import React, {Component} from 'react'
import Book from './Book'

class Bookshelves extends Component {
  render() {
    const {books, onShelfChange} = this.props

    const shelves = [
      {name: 'currentlyReading', text: "Currently Reading"},
      {name: 'wantToRead', text: 'Want to Read'},
      {name: 'read', text: 'Read'}
    ]

    return (
      shelves.map(shelf =>
        <div key={shelf.name} className="bookshelf">
          <h2 className="bookshelf-title">{shelf.text}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {books.filter(book => book.shelf === shelf.name).map(book =>
              <Book
                book={book}
                books={books}
                key={book.id}
                onShelfChange={onShelfChange}
              />
            )}
            </ol>
          </div>
        </div>
      )
    )
  }
}

export default Bookshelves
