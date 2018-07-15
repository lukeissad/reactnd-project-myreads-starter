import React, {Component} from 'react'

class Book extends Component {
  render() {
    const {book, onShelfChange, books} = this.props

    const bookCover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193'

    let selectValue = 'none'

    for (let shelfBook of books) {
      if (shelfBook.id === book.id) {
        selectValue = shelfBook.shelf
        break
      }
    }

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})`}}></div>
            <div className="book-shelf-changer">
              <select
                value={selectValue}
                onChange={(event) => onShelfChange(book, event.target.value)}
                >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors && book.authors.map((author, index) =>
            <div className="book-authors" key={index}>{author}</div>
          )}
          {!book.authors &&
            <div className="book-authors">Unknown</div>
          }
        </div>
      </li>
    )
  }
}

export default Book
