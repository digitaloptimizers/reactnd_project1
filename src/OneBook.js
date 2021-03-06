import React from 'react';

/*
  EXTENTION: OneBook
  Creates ONE BOOK view with information about this book.
  - cover
  - title
  - author
*/

class OneBook extends React.Component {
  render() {
    return (
      <li key={this.props.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url("+this.props.cover+")" }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.author}</div>
        </div>
      </li>
    );
  }
}

export default OneBook
