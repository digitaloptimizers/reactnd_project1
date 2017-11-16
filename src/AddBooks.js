import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';

class AddBooks extends Component {
  searchDatabase = (e) => {
    e.preventDefault();
    const searchTerm = serializeForm(e.target, { hash:true});
    if(this.props.onCreateContact) this.props.onCreateContact(searchTerm);
    // BooksAPI.search(searchTerm.query,20);
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <form className="searchBooks" onSubmit={this.searchDatabase}>
              <div className="search-books-input-wrapper">
                <input type="text" name="query" placeholder="Search by title or author"/>
              </div>
            </form>
        </div>
        <div className="search-books-results">
          // ADD COMPONENT here
          // AND PUSH THE RESULTS FROM THE API INTO THIS COMPONENT
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}
export default AddBooks
