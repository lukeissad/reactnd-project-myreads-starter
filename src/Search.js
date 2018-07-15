import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Book from './Book'


class Search extends Component {
  state = {
    query: '',
    queryResult: [],
    noResults: false
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
    if (query) {
      BooksAPI.search(query).then((result) => {
        result.length > 0 ? this.setState({queryResult: result, noResults: false}) : this.setState({queryResult: [], noResults: true})
      })
    } else this.setState({queryResult: []})

  }

  render() {
    const {query, queryResult, noResults} = this.state
    const {books, onShelfChange} = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {queryResult.map(book =>
            <Book
              book={book}
              books={books}
              key={book.id}
              onShelfChange={onShelfChange}
            />
          )}
          </ol>
          {noResults && (
          <ol className="books-grid">
            <div>Nothing found. Did you use one of the available search terms?</div>
          </ol>
          )}
        </div>
      </div>
    )
  }
}

export default Search
