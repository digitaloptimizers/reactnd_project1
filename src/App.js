import React from 'react';
// import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import BookLists from './BookLists';
import AddBooks from './AddBooks';


class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path="/" component={BookLists}/>
        <Route path="/addbook" component={AddBooks}/>
      </div>
    )
  }
}

export default BooksApp
