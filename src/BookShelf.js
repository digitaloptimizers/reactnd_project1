import React, { Component } from 'react';
import OneBook from './OneBook'; // Imports the look of a single book;


/*
  EXTENTION: BookShelf
  Creates a list of OneBook components with a specific status:
  E.g. Currently reading, want to read, read.
*/

class BookShelf extends React.Component {
  render() {
    return(
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.BookShelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">

                {/* Looping over the list of books in this array */}
                {this.props.books.map((book) => (
                  <OneBook key={book.id} title={book.title} cover={book.cover} author={book.author} />
                ))}
                {/* End of loop */}

              </ol>
            </div>
          </div>
    );
  }
}

export default BookShelf
