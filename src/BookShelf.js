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
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book) => (
                  <OneBook title={book.title} cover={book.cover} author={book.author} />
                ))}

              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf
