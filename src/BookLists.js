import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'; // Imports the look of a single book;

/*
  CONSTANT: MyShelfs
  The different shelfs (or statuses) for the books.
  This array can be used to add/remove extra shelfs in the future.
*/
const MyShelfs = [
  {
    "id"    :   "1",
    "title" :   "Currently Reading"
  },
  {
    "id"    :   "2",
    "title" :   "Want to Read"
  },
  {
    "id"    :   "3",
    "title" :   "Read"
  }
];


const ListOfBooks = [
  {
    "id"      :     "1",
    "title"   :     "To Kill a Mockingbird",
    "author"  :     "Harper Lee",
    "cover"   :     "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
  },
  {
    "id"      :     "2",
    "title"   :     "Ender's Game",
    "author"  :     "Harper Lee",
    "cover"   :     "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
  },
  {
    "id"      :     "3",
    "title"   :     "Something Else",
    "author"  :     "Harper Lee",
    "cover"   :     "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
  }
];


class BookLists extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        {/*
          Looping over the list of books in this array (List of Books)
          based on the lists used in the too. (MyShelfs).
          FEATURE (for the future): User-managed SHELFS in the array MyShelfs perhaps
        */}

        {MyShelfs.map((shelf) => (
        <BookShelf key={shelf.id} BookShelfTitle={shelf.title} books={ListOfBooks} />
        ))}
        <div className="open-search">
          <Link to="/addbook" className="AddBook">Add a book</Link>
        </div>
      </div>
    )
  }
}
export default BookLists
